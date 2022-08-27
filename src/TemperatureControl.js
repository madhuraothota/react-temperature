import React from "react";
import { useState } from "react";

function TempControl() {
const [temperatureValue,setTemperatureValue] = useState(10);
const [temperatureColor,setTemperatureColor] = useState('cold');

    let increaseTemprature = () => {
         const  newTemperature = temperatureValue + 1;
         setTemperatureValue(newTemperature);

         if(newTemperature >= 15){
            setTemperatureColor('hot');
         }
    };

    let decreaseTemperature = () => {
        const newTemperature = temperatureValue - 1;
        setTemperatureValue(newTemperature);
        
        if(newTemperature <= 15) {
            setTemperatureColor('cold');
        }
    }
    return (
    <div className='app-container'>
        <div className='temperature-display-container'>
        <div className = {`temperature-display ${temperatureColor}`}>{temperatureValue}&deg;C</div>
        <div className="button-container">
        <button onClick={increaseTemprature}>+</button>
        <button onClick={decreaseTemperature}>-</button>
        </div>
        </div>
    </div>
    )

}

export default TempControl;