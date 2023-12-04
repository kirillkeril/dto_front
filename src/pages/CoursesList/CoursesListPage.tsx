import {CoursesList} from "../../components/CoursesList/CoursesList.tsx";
import {Text} from "@mantine/core";
import {ICourse} from "../../types.ts";
import {useEffect, useState} from "react";
import {api} from "../../api.ts";

export const CoursesListPage = () => {
	const [courses, setCourses] = useState<ICourse[]>([]);

	useEffect(() => {
		api.getCourses().then(data => {
			setCourses(data);
		})
	})

	return (
		<div>
			<Text fw={'600'} fz={'xl'} ta={'center'}>Список курсов</Text>
			<CoursesList courses={courses}/>
		</div>
	);
};