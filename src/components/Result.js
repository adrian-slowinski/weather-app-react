import React from 'react';

const Result = (props) => {
  const {err, city, date, temp, sunset, sunrise, pressure, wind} = props.weather

  let content = null

  if(!err && city) {

    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()
    content = (
      <div>
        <h2>  {`Dane pogodowe dla miasta ${city}:`} </h2>
        <div> Dzień: {date}</div>
        <div> Temperatura: {temp} &#176;C</div>
        <div> Wschód: {sunriseTime}</div>
        <div> Zachód: {sunsetTime}</div>
        <div> Wiatr: {wind} m/s</div>
        <div> Ciśnienie: {pressure} hPa</div>
      </div>
    )
  }

  return ( 
    <div className="result">
      {err ? `Brak ${city} w bazie danych` : content}
    </div>
    // <React.Fragment>
    //   <div> Pogoda dla: {city} </div>
    // </React.Fragment>
   );
}
 
export default Result;