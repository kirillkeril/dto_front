import styles from './coursesList.module.css';
import CourseCard from "../CourseCard/CourseCard.tsx";

interface Props {
	courses: any[];
}

export const CoursesList = ({courses}: Props) => {
	return (
		<main className={styles.listWrapper}>
			<ul className={styles.list}>
				{courses.map(c =>
					<li key={c.id} className={styles.listItem}>
						<CourseCard course={c}/>
					</li>)}
			</ul>
		</main>
	);
};
