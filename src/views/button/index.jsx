import React from "react";

import "./index.css";

function Button(props) {
    const {
        title,
        onClick
    } = props;
    return (
        <button className='b' onClick={onClick} type="button">{title}</button>
    );
}

export default Button;