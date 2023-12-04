import {Button, Card, Group, Text} from "@mantine/core";

interface Props {
  course: any;
}

const CourseCard = ({course} : Props) => {
  return (
	  <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group justify={'space-between'}>
        <Text fw={'600'}>{course.name}</Text>
      </Group>

	    <Text fw={'400'} mt={'md'}>{course.description}</Text>

	    <Button color="blue" fullWidth mt="md" radius="md">
		    Подробнее
	    </Button>
    </Card>
  );
};

export default CourseCard;