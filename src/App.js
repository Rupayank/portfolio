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
import { useState } from "react";

function App() {
	const [latest, setLatest] = useState(false);
	const [domain, setDomain] = useState(false);

	return (
		<>
			<Navbar />
			<MainHead />
			<About />
			<button onClick={() => setDomain(!domain)}>My Domains</button>
			{domain && <Services />}
			<button onClick={() => setLatest(!latest)}>LatestWork</button>
			{latest && <Latest />}
			<Contact />
			<Skill />
			<Timeline />
			<MainFoot />
		</>
	);
}

export default App;
