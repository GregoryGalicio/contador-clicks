import React from "react";
import "./Button.css";

function Button({text, isClickButton, handleClick}){/*we use {text} instead props.text. It is destructuration*/
    return(/*handleClick is a function its render in other side*/
<button 
    className={ isClickButton ? 'click-button':'reset-button' }
    onClick={handleClick}>
    {text}
</button>
    );
}

export default Button;