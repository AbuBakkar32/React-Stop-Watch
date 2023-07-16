import React from "react";
import Digit from "./Digit/Digit";
import "./CountDown.css";

const CountDown = (props) => {
    return (
        <div className="d-flex my-4 justify-content-center">
            <Digit color="palegreen" value={ props.time.min } animate="animate__animated animate__pulse"/>
            <Digit color="skyblue" value={ props.time.sec } animate="animate__animated animate__pulse"/>
            <Digit color="salmon" value={ props.time.mili } animate="animate__animated animate__pulse"/>
        </div>
    )
}

export default CountDown;

// Top 14 AI Tools

// www.wordtune.com
// www.murf.ai
// www.stockai.com
// www.maginstudio.com
// www.browse.ai
// www.craiyon.com
// www.texti.app
// www.huemint.com
// www.sembly.ai
// www.assemblyai.com
// www.autodraw.com
// www.poised.com
// www.supermeme.ai


