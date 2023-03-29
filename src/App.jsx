import "./App.css";
import Profile, { Propicts, Data } from "./components/Profile";

const App = () => {
	const judul = "Batuaji";
	const judul2 = "Batam Center";
	const judul3 = "Nongsa";
	function a() {
		alert("Hello");
	}
	return (
		<div className="card">
			<h1>Hello Batam</h1>
			<h1 className="judul">Welcome to {judul}</h1>
			<button className="btn" onClick={a}>
				ok
			</button>
			<Profile />
			<Propicts value={judul2} />
			<Data value={judul3} />
		</div>
	);
};

export default App;
