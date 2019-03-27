import React from 'react';

const Result = (props) => {
  const {err, city, date, temp, sunset, sunrise, pressure, wind} = props.weather
  return ( 
    <React.Fragment>
      <div> Pogoda dla: {city} </div>
      <div> Dzień: {date}</div>
      <div> Temperatura: {temp}</div>
      <div> Wschód: {sunrise}</div>
      <div> Zachód: {sunset}</div>
      <div> Ciśnienie: {pressure}</div>
      <div> Wiatr: {wind}</div>
    </React.Fragment>
   );
}
 
export default Result;