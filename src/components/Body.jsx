import React from "react";
import { useState } from "react";

const Body = () => {
    const [count, setCount] = useState(0);

    const addCount = () => {
        setCount(count + 1);
    }

    const pause = () => {
        setCount(0);

    }

    const stopCount = () => {
        setCount(count - 1);
    }

    const change = () => {
        document.getElementById("wrap").style.backgroundColor = "black";
        document.getElementById("disp").style.color = "white";
        document.getElementById("white").style.color = "white";
        document.getElementById("btn1").style.display = "none";
        document.getElementById("btn2").style.display = "revert"
    }

    const chnge = () => {
        document.getElementById("wrap").style.backgroundColor = "white";
        document.getElementById("disp").style.color = "black";
        document.getElementById("white").style.color = "black";
        document.getElementById("btn2").style.display = "none"
        document.getElementById("btn1").style.display = "revert"
    }
    
    return (
        <div className="body">
            <div className="wrapper" id="wrap">
                <h2 id="white">Counter</h2>
                <div className="swt">
                    <button className="switch" id="btn1" onClick={change}>on</button>
                    <button className="switch two" id="btn2" onClick={chnge}>off</button>
                </div>
                <div className="display" id="disp">{count}</div>
                <div className="bttn">
                    <button className="btn" onClick={addCount}>+</button>
                    <button className="btn" onClick={pause}>Reset</button>
                    <button className="btn" onClick={stopCount} disabled={count < 1}>-</button>
                </div>
            </div>
        </div>
    );
}
 
export default Body;