import "./styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import MainHead from "./Components/MainHead";

import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";

function App() {
	return (
		<Routes>
			<Route path='/' exact element={<MainHead />} />
			<Route path='/login' exact element={<Login />} />
		</Routes>
	);
}

export default App;
