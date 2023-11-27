import './App.css'
import { Input, Button, Text } from "@mantine/core";

function App() {
  return (
    <>
    <Button className={'nazad'}>Назад</Button>
    <Text className={'nastroiki'}>Настройки</Text>
    <Text className={'name'}>Имя</Text>
    <Input 
    className={'boxname'} 
    placeholder="John"
    />
    <Text className={'fam'} >Фамилия</Text>
    <Input 
    className={'boxfam'} 
    placeholder="Doe" 
    />
    <Text className={'email'} >Email</Text>
    <Input 

    className={'boxmail'} 
    placeholder="johndoe@mail.ru" 
    />
    <Text className={'number'} >Телефон</Text>
    <Input 
    className={'boxnumber'} 
    placeholder="+1 111 111 1111" 
    />
    <Text className={'address'} >Адрес</Text>
    <Input 
    className={'boxaddress'} 
    placeholder="123 Main Street" 
    />
    <Text className={'index'} >Индекс</Text>
    <Input 
    className={'boxindex'} 
    placeholder="123456" 
    />
    <Text className={'city'} >Город</Text>
    <Input 
    className={'boxcity'} 
    placeholder="New York City" 
    />
    <Text className={'region'} >Регион</Text>
    <Input 
    className={'boxregion'} 
    placeholder="New York" 
    />
    <Text className={'country'} >Страна</Text>
    <Input 
    className={'boxcountry'} 
    placeholder="United States" 
    />
    <Button
    variant="danger"
    className={'send'}
    >Сохранить</Button>
    </>
  );
}
  export default App