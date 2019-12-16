import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="stop-light-container">
			<div className="light red">Red</div>
			<div className="light yellow">Yellow</div>
			<div className="light green">Green</div>
		</div>
	);
}
