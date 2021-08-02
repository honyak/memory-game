import React from "react";
import "./Title.css";

const Title = props => {
    return (
    <div>
<h1 className="title">{props.children}</h1>
<h2>Click each character without repeating.</h2>
</div>
)
}

export default Title;
