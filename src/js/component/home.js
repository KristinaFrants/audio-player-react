import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";

//create your first component
export const Home = () => {
	// initialize the tasks variable to an empty array and hook it to setTasks function
	const [treck, setTreck] = useState();
	const [sourse, setSourse] = useState();

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/sound/songs")
			.then(resp => resp.json())
			.then(data => {
				setTreck(data), [];
			});
	});

	return (
		<>
			<ul>
				{!treck
					? "Loading..."
					: treck.map((t, index) => {
							return (
								<li
									key={index}
									onClick={() =>
										setSourse(
											"https://assets.breatheco.de/apis/sound/" +
												t.url
										)
									}>
									{t.name}
								</li>
							);
					  })}
			</ul>
			<audio controls autoPlay src={sourse}>
				<source type="audio/mp3" />
			</audio>
		</>
	);
};
