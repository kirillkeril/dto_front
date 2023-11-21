import './App.css'
import { Input, Button, Text } from "@mantine/core";

function App() {
  return (
    <>
    <Button>Назад</Button>
    <Text>Имя</Text>
    <Input placeholder="John"/>
    <Text>Фамилия</Text>
    <Input placeholder="Doe" />
    <Text>Email</Text>
    <Input placeholder="johndoe@mail.ru" />
    <Text>Телефон</Text>
    <Input placeholder="+1 111 111 1111" />
    <Text>Адрес</Text>
    <Input placeholder="123 Main Street" />
    <Text>Индекс</Text>
    <Input placeholder="123456" />
    <Text>Город</Text>
    <Input placeholder="New York City" />
    <Text>Регион</Text>
    <Input placeholder="New York" />
    <Text>Страна</Text>
    <Input placeholder="United States" />
    <Button variant="filled">Отправить</Button>
    </>
  );
}
  export default App