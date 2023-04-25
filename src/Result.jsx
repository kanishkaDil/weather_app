
import React, { useState, useEffect } from "react";
import { fetchInfo } from "./fetchInfo";
import celsius_to_fahrenheit from "./celsius_to_fahrenheit";


function Result(props) {
  const [temperature, setTemperature] = useState("");
  const [click, setClick] = useState(1);
  const [simbol, setSimbol] = useState("°C");

  useEffect(() => {
    const getTemperature = async () => {
      const temperatureData = await fetchInfo(props.cordinate);
      setTemperature(temperatureData);
    };

    getTemperature();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if(click){
      setTemperature(celsius_to_fahrenheit(temperature).toFixed(2));
      setClick(0);
      setSimbol("°F");
    }else{
      const getTemperature = async () => {
        const temperatureData = await fetchInfo(props.cordinate);
        setTemperature(temperatureData);
        setSimbol("°C");
      };
  
      getTemperature();
      
      setClick(1);
    }
    console.log('The link was clicked.');
  }

  return (
    <div style={{
      backgroundColor: '#C4DEF6',
      borderRadius: '8px',
      width: '220px',
      height: '125px',
      textAlign: 'center',
      borderBlockColor: 'black',

    }}>
      <h2>{props.city}</h2>
      <h3>Current temp: {temperature}{simbol}</h3>
      <button onClick={handleClick}>°C----°F</button>
    </div>
  );
}



export default Result