export default function Profile(props) {
	return (
		<div>
			<h1>Ini React JS</h1>
		</div>
	);
}

export function Propicts(props) {
	return (
		<div>
			<h1 className="judul">Welcome to {props.value}</h1>
		</div>
	);
}
export function Data(props) {
	return (
		<div>
			<h1>Welcome to {props.value}</h1>
			<IsiData />
		</div>
	);
}

function IsiData() {
	let arr = ["Batu", "Aji"];
	return (
		<div className="judul">
			{arr.map((val) => (
				<div> {val} </div>
			))}
		</div>
	);
}
