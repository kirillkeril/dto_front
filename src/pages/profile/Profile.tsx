import classes from "./profile.module.css";
import {Button, Divider, Menu, MenuItem, Text, TextInput} from "@mantine/core";
import {useForm} from "@mantine/form";

function Profile() {
    const form = useForm({});

    return (
        <div className={classes.profileWrapper}>
            <Text component={'h2'} size={'xl'} style={{fontWeight: 'bold', margin: '3vh 0'}}>Настройки аккаунта</Text>
            <div>
                тут будет меню
                тут будет меню
                тут будет меню
            </div>
            <Divider size={'sm'} color={'dark'} style={{marginTop: '0.5rem'}}/>
            <form onSubmit={form.onSubmit(() => console.log(form.values))} className={classes.profileForm}>
                <div className={classes.profileName}>
                    <TextInput
                        label={'Фамилия'}
                        placeholder="Иванов"
                    />
                    <TextInput
                        placeholder="Иван"
                        label={'Имя'}
                    />
                    <TextInput
                        label={'Отчество'}
                        placeholder="Иванович"
                    />
                </div>
                <div className={classes.profileContact}>
                    <TextInput
                        label={'Email'}
                        placeholder="ivanov.ivan@mail.com"
                    />
                    <TextInput
                        label={'Телефон'}
                        placeholder="+79999999999"
                    />
                </div>

                <div className={classes.profilePlace}>
                    <TextInput
                        label={'Адрес'}
                        placeholder="123 Main Street"
                    />
                    <TextInput
                        label={'Индекс'}
                        placeholder="123456"
                    />
                    <TextInput
                        label={'Населенный пункт'}
                        placeholder="Пермь"
                    />
                    <TextInput
                        label={'Регион'}
                        placeholder="Пермский край"
                    />
                    <TextInput
                        label={'Страна'}
                        placeholder="Россия"
                    />
                </div>
                <Button
                    variant="filled"
                >
                    Сохранить
                </Button>
            </form>
        </div>
    );
}

export default Profile
