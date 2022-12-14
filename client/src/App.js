import { Route, Routes, Navigate } from "react-router-dom";
import EmailVerify from "./components/EmailVerify/EmailVerify";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import Signup from "./components/Singup/Singup";


function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/users/:id/verify/:token" element={<EmailVerify/>} />
		</Routes>
	);
}

export default App;