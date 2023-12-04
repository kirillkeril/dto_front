import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {isNotEmpty, useForm} from "@mantine/form";
import {api} from "../../../api.ts";
import {Box, Button, Group, LoadingOverlay, Textarea, TextInput, Title, Text} from "@mantine/core";
import './CreateCoursePage.scss'
import {notifications} from "@mantine/notifications";
import {modals} from "@mantine/modals";


export const CreateCoursePage: React.FC = () => {
    const {courseId} = useParams();
    const [isFetching, setIsFetching] = useState(false);

    const form = useForm({
        initialValues: {
            name: '',
            description: ''
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
                    description: data.description
                });
                setIsFetching(false);
            }).catch(() => {
                setIsFetching(false);
            })
        }
    }, [courseId])

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
                </Box>

                <Group>
                    {courseId !== 'new' ?
                        <>
                            <Button onClick={saveCourse} disabled={!form.isDirty()}>
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