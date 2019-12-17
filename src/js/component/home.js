import React, { useState } from "react";

//create your first component
export function Home() {
	const [light1, setLight1] = useState("light red off");

	const changeRed = () => {
		if (light1 === "light red off") {
			setLight1("light red");
		} else setLight1("light red off");
	};

	const [light2, setLight2] = useState("light yellow off");

	const changeYellow = () => {
		if (light2 === "light yellow off") {
			setLight2("light yellow");
		} else setLight2("light yellow off");
	};

	const [light3, setLight3] = useState("light green off");

	const changeGreen = () => {
		if (light3 === "light green off") {
			setLight3("light green");
		} else setLight3("light green off");
	};

	function lightOn() {
		setInterval(function() {
			setLight1("light red");
			setLight2("light yellow");
			setLight3("light green");
		}, 3000);
	}

	let lightOff = () => {
		setLight1("light red off");
		setLight2("light yellow off");
		setLight3("light green off");
	};

	return (
		<>
			<div className="stop-light-container">
				<div className={light1} onClick={changeRed} />
				<div className={light2} onClick={changeYellow} />
				<div className={light3} onClick={changeGreen} />
			</div>
			<div className="buttons">
				<button
					type="button"
					className="btn btn-light"
					onClick={lightOn}>
					On
				</button>
				<button type="button" className="btn btn-light">
					Timer
				</button>
				<button
					type="button"
					className="btn btn-light"
					onClick={lightOff}>
					Off
				</button>
			</div>
		</>
	);
}
