import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main/App";
import Signup from "./components/Singup";
import Login from "./components/Login";
// import { userName } from "./components/Meet/userName";
// import Meet from "./components/Meet";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			{/* <Route path="/Room" exact element={<Meet />} /> */}
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/signup" exact element={<Signup />} />
		</Routes>
	);
}

export default App;
