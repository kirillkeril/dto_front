import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {isNotEmpty, useForm} from "@mantine/form";
import {api} from "../../../api.ts";
import {Box, Button, Group, LoadingOverlay, Textarea, TextInput, Title, Text, FileInput} from "@mantine/core";
import {notifications} from "@mantine/notifications";
import {modals} from "@mantine/modals";
import {parseCSV} from "../../../utils.ts";
import './CreateCoursePage.scss'

interface ProgramColumn {
    name: string
}

const REQUIRED_PROGRAM_COLUMNS: ProgramColumn[] = [
    {name: 'program_id'},
    {name: 'competition_id'},
    {name: 'teacher'},
    {name: 'timetable_id'}
]


export const CreateCoursePage: React.FC = () => {
    const {courseId} = useParams();
    const [isFetching, setIsFetching] = useState(false);

    const form = useForm({
        initialValues: {
            name: '',
            description: '',
            program: null as (File | null)
        },
        validate: {
            name: isNotEmpty('Введите название курса'),
            description: isNotEmpty('Введите описание курса')
        }
    });

    useEffect(() => {
        const id = Number(courseId);
        if (!isNaN(id)) {
            setIsFetching(true);
            api.getCourseById(id).then(data => {
                form.setValues({
                    name: data.name,
                    description: data.description
                })
                form.resetDirty({
                    name: data.name,
                    description: data.description,
                    program: data.program
                });
                setIsFetching(false);
            }).catch(() => {
                setIsFetching(false);
            })
        }
    }, [courseId])

    useEffect(() => {
        if (form.values.program) {
            const reader = new FileReader()
            reader.onload = () => {
                const headers = parseCSV(reader.result as string)[0]
                const unspecifiedFields = REQUIRED_PROGRAM_COLUMNS.filter(item => !headers.includes(item.name));
                if (unspecifiedFields.length) {
                    form.setErrors(prevState => (
                        {...prevState, program: 'В таблице не обнаружено следующих обязательных полей: ' + unspecifiedFields.map(item => item.name).join(', ')}
                    ))
                }
                console.log(headers)
            }
            reader.readAsText(form.values.program)
        }
    }, [form.values.program])

    const saveCourse = () => {
        if (form.isValid()) {
            notifications.show({
                title: 'Курс отредактирован',
                message: 'Но пока что в этом нельзя убедиться',
                color: 'green'
            })
        } else {
            form.validate();
        }
    }

    const deleteCourse = () => {
        modals.openConfirmModal({
            title: 'Требуется подтверждение',
            children: (
                <Text size="sm">
                    Вы действительно хотите удалить курс #{courseId}? Это действие нельзя будет отменить.
                </Text>
            ),
            centered: true,
            confirmProps: { color: 'red' },
            labels: { confirm: 'Удалить курс', cancel: 'Отмена' },
            onConfirm: () => {
                notifications.show({
                    title: 'Курс удалён',
                    message: 'Но пока что в этом нельзя убедиться',
                    color: 'red'
                })
            },
        });
    }

    return (
        <div>
            <Box className={'pageWrapper'}>
                <LoadingOverlay visible={isFetching} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
                {courseId !== 'new' ?
                    <Title order={4}>Редактирование курса #{courseId}</Title>
                    :
                    <Title order={4}>Создание нового курса</Title>
                }

                <Box className={'formWrapper'}>
                    <TextInput withAsterisk label="Название курса" placeholder="Введите название" {...form.getInputProps('name')} />
                    <Textarea withAsterisk label="Описание курса" placeholder="Введите описание" {...form.getInputProps('description')} />
                    <FileInput
                        label="Программа курса"
                        description="CSV таблица с необходимыми полями"
                        placeholder="Нажмите, чтобы прикрепить файл"
                        accept=".csv"
                        clearable
                        withAsterisk
                        {...form.getInputProps('program')}
                    />
                </Box>

                <Group>
                    {courseId !== 'new' ?
                        <>
                            <Button onClick={saveCourse} disabled={!form.isDirty() || !form.isValid()}>
                                Сохранить
                            </Button>
                            <Button color={'red'} onClick={deleteCourse}>
                                Удалить курс
                            </Button>
                        </>
                        :
                        <Button onClick={saveCourse}>
                            Создать курс
                        </Button>
                    }
                </Group>
            </Box>
        </div>
    )
}