import './App.css'
import '@mantine/core/styles.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {CreateCoursePage, CoursesListPage} from "./pages";

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
		<BrowserRouter>
			<Routes>
				<Route path={'/admin'}>
					<Route path={'/admin/course'}>
						<Route path={'/admin/course/:courseId'} element={<CreateCoursePage/>}/>
					</Route>
				</Route>
				<Route path={'/'} element={<CoursesListPage courses={courses}/>}>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App
