import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useForm} from "@mantine/form";
import {api} from "../../../api.ts";
import {Box, Button, Group, LoadingOverlay, Textarea, TextInput, Title} from "@mantine/core";
import './CreateCoursePage.scss'


export const CreateCoursePage: React.FC = () => {
    const {courseId} = useParams();
    const [isFetching, setIsFetching] = useState(false);

    const form = useForm({
        initialValues: {
            name: '',
            description: ''
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
                form.resetDirty();
                setIsFetching(false);
            }).catch(() => {
                setIsFetching(false);
            })
        }
    }, [courseId])

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
                    <Button>
                        Сохранить
                    </Button>
                    <Button color={'red'}>
                        Удалить курс
                    </Button>
                </Group>
            </Box>
        </div>
    )
}