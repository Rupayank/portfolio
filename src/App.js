import "./styles.css";
import Navbar from "./Components/Navbar";
import MainHead from "./Components/MainHead";
import About from "./Components/About";
import Services from "./Components/Service";
import Latest from "./Components/LatestWork";
import Contact from "./Components/Contact";
import Skill from "./Components/Skill";
import Timeline from "./Components/Timeline";
import MainFoot from "./Components/MainFoot";

function App() {
	return (
		<>
			<Navbar />
			<MainHead />
			<About />
			<Services />
			<Latest />
			<Contact />
			<Skill />
			<Timeline />
			<MainFoot />
			<script src="./js/app.js"></script>
		</>
	);
}

export default App;
