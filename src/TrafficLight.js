import React from "react";
import './styles.css';

const TrafficLight = (props) => {

    const [bulbState, setBulbState] = React.useState("black");

    const handleClick = (color) => {
        setBulbState(color);
    }
    return (
        <>
            <div className="traffic-light-app">
                <h1>Traffic Light</h1>
                <div className="control-panels">
                    <button className="button" id="stop-button" onClick={() => handleClick("red")}>Stop</button>
                    <button className="button" id="slow-button" onClick={() => handleClick("yellow")}>Slow</button>
                    <button className="button" id="go-button" onClick={() => handleClick("green")}>Go</button>
                </div>
                <div className="traffic-light">
                    <div className={`bulb ${bulbState === "red" ? 'bulb-red' : ''}`}></div>
                    <div className={`bulb ${bulbState === "yellow" ? 'bulb-yellow' : ''}`}></div>
                    <div className={`bulb ${bulbState === "green" ? 'bulb-green' : ''}`}></div>
                </div>
            </div>
        </>
    );
}

export default TrafficLight;