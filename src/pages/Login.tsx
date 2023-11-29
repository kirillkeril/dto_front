import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
  } from '@mantine/core';
  import classes from './Login.module.css';
  
  export function Login() {
    return (
      <Container size={420} my={40}>
        <Title ta="center" className={classes.title}>
          Авторизация
        </Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          Нет аккаунта?{' '}
          <Anchor size="sm" component="button">
            Создать аккаунт
          </Anchor>
        </Text>
  
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="Email" placeholder="examole@email.com" required />
          <PasswordInput label="Password" placeholder="Your password" required mt="md" />
          <Group justify="space-between" mt="lg">
            <Checkbox label="Запомнить меня" />
            <Anchor component="button" size="sm">
              Забыли пароль?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl">
            Войти
          </Button>
        </Paper>
      </Container>
    );
  }