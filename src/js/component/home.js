import React, { useState } from "react";

//create your first component
export function Home() {
	const [light1, lightOn1] = useState("light red off");

	const changeRed = () => {
		if (light1 === "light red off") {
			lightOn1("light red");
		} else lightOn1("light red off");
	};

	const [light2, lightOn2] = useState("light yellow off");

	const changeYellow = () => {
		if (light2 === "light yellow off") {
			lightOn2("light yellow");
		} else lightOn2("light yellow off");
	};

	const [light3, lightOn3] = useState("light green off");

	const changeGreen = () => {
		if (light3 === "light green off") {
			lightOn3("light green");
		} else lightOn3("light green off");
	};

	return (
		<>
			<div className="stop-light-container">
				<div className={light1} onClick={changeRed} />
				<div className={light2} onClick={changeYellow} />
				<div className={light3} onClick={changeGreen} />
			</div>
			<div className="buttons">
				<button type="button" className="btn btn-light">
					Click
				</button>
				<button type="button" className="btn btn-light">
					Timer
				</button>
				<button type="button" className="btn btn-light">
					Off
				</button>
			</div>
		</>
	);
}
