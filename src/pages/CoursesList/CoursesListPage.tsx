import {CoursesList} from "../../components/CoursesList/CoursesList.tsx";
import {Text} from "@mantine/core";

interface Props {
	courses: any[];
}

export const CoursesListPage = ({courses}: Props) => {
	return (
		<div>
			<Text fw={'600'} fz={'xl'} ta={'center'}>Список курсов</Text>
			<CoursesList courses={courses}/>
		</div>
	);
};