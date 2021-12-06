import "./styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import MainHead from "./Components/MainHead";
import Login from "./Components/Login";
import AdminPanel from "./Components/AdminPanel";

import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<Routes>
			<Route path='/' exact element={<MainHead />} />
			<Route path='/login' exact element={<Login />} />
			<Route path='/admin' exact element={<AdminPanel />} />
		</Routes>
	);
}

export default App;
