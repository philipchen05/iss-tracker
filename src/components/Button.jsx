import React from "react";

function Button(props) {
    return <button className="font-display" onClick={() => {props.f(props.lang)}} >{props.name}</button>
}

export default Button;