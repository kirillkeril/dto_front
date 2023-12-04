import './App.css'
import '@mantine/core/styles.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {CreateCoursePage, CoursesListPage} from "./pages";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={'/admin'}>
					<Route path={'/admin/course'}>
						<Route path={'/admin/course/:courseId'} element={<CreateCoursePage/>}/>
					</Route>
				</Route>
				<Route path={'/'} element={<CoursesListPage/>}>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App
