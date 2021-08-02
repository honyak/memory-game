import React from "react";
import "./Score.css";

const Score = props => (
<div className="score row jumbotron m-3 sticky-top">
  <h1 className="display-4">Score {props.score}</h1>
</div>

);

export default Score;