import './App.css'
import '@mantine/core/styles.css';
import CoursesListPage from "./pages/CoursesList/CoursesListPage.tsx";

function App() {
	const courses = [
		{
			id: 1,
			name: "Название курса",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur aut doloremque error expedita nam officia quo similique unde voluptate?"
		},
		{
			id: 2,
			name: "Название курса",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur aut doloremque error expedita nam officia quo similique unde voluptate?"
		},
		{
			id: 3,
			name: "Название курса",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur aut doloremque error expedita nam officia quo similique unde voluptate?"
		},
		{
			id: 4,
			name: "Название курса",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur aut doloremque error expedita nam officia quo similique unde voluptate?"
		},
		{
			id: 5,
			name: "Название курса",
			description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur aut doloremque error expedita nam officia quo similique unde voluptate?"
		},
	];
	return (
		<div>
			<CoursesListPage courses={courses}/>
		</div>
	);
}

export default App
