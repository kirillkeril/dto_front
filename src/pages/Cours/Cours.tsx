import { Button, List, Text } from '@mantine/core';

function CourseList() {
  const courses = [
    {
      name: 'Курс 1',
      description: 'Описание курса 1',
    },
    {
      name: 'Курс 2',
      description: 'Описание курса 2',
    },
    {
      name: 'Курс 3',
      description: 'Описание курса 3',
    },
  ];

  return (
    <div>
      <Button variant="outline" color="blue">
        Назад
      </Button>
      <List>
        {courses.map((course, index) => (
          <List.Item key={index}>
            <Text size="lg">{course.name}</Text>
            <Text size="sm">{course.description}</Text>
            <Button variant="outline" color="blue">
              Конкурс(заказ)
            </Button>
          </List.Item>
        ))}
      </List>
      <Button variant="outline" color="blue">
        Расписание
      </Button>
      <Button variant="outline" color="blue">
        Версии для записи на курсы
      </Button>
    </div>
  );
}

export default CourseList;
