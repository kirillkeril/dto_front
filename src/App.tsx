import './App.css'
import '@mantine/core/styles.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {CreateCoursePage, CoursesListPage, Login, Profile} from "./pages";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={'/admin'}>
					<Route path={'/admin/course'}>
						<Route path={'/admin/course/:courseId'} element={<CreateCoursePage/>}/>
					</Route>
				</Route>
				<Route path={'/'} element={<CoursesListPage/>}/>
				<Route path={'/login'} element={<Login/>}/>
				<Route path={'/profile'} element={<Profile/>}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App
