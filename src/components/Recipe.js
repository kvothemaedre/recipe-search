import React from "react";
import "./Recipe.css"

const Recipe = (props) => {
	return (
		<div className="jumbotron">
			<h1>{props.title}</h1>
			<p>Calories : {props.calories}</p>
			<img src={props.image} alt="" />
		</div>
	)
}

export default Recipe