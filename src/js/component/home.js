import React, { useState } from "react";

//create your first component
export function Home() {
	const [light, lightOn] = useState("light red off");

	const changeRed = () => {
		lightOn("light red");

		if (light == "light red off") {
			lightOn("light red");
		} else lightOn("light red off");
	};

	return (
		<div className="stop-light-container">
			<div className={light} onClick={changeRed}>
				red
			</div>
			<div className="light yellow off">Yellow</div>
			<div className="light green off">Green</div>
		</div>
	);
}
