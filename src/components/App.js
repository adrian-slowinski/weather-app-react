import React, { Component } from 'react';
import Form from './Form'
import Result from './Result'
import './App.css';

class App extends Component {

  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    err: ""
  }

  handleInputChange = (e) => {
    const value = e.target.value
    this.setState({
      value: value
    })
  }

  // handleCitySubmit = (e) => {
  //   console.log("Potwierzdzony formularz")
  //   e.preventDefault()

  //   const APIKey = '02c2023f3244257649f7751b64e787bb'
  //   const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;

  //   fetch(API)
  //   .then(response => {
  //     if(response.ok) {
  //       return response
  //     }
  //     throw Error("Nie udało się ")
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     const time = new Date().toLocaleString();
  //     this.setState(prevState => ({
  //       err: false,
  //       date: time,
  //       city: prevState.value,
  //       sunrise: data.sys.sunrise,
  //       sunset: data.sys.sunset   ,
  //       temp: data.main.temp,
  //       pressure: data.main.pressure,
  //       wind: data.wind.speed
  //     }))
  //   })
  //   .catch(err => {
  //     console.log(err)
  //     this.setState({
  //       err: true,
  //       city: this.state.value
  //     })
  //   })
  // }

  componentDidUpdate(prevProps, prevState){
    // console.log(prevState)
    // console.log(this.state.value)

    if (this.state.value.length === 0) return

    if (prevState.value !== this.state.value){
        const APIKey = '02c2023f3244257649f7751b64e787bb'
        const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;

        fetch(API)
        .then(response => {
          if(response.ok) {
            return response
          }
          throw Error("Nie udało się ")
        })
        .then(response => response.json())
        .then(data => {
          const time = new Date().toLocaleString();
          this.setState(prevState => ({
            err: false,
            date: time,
            city: prevState.value,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset   ,
            temp: data.main.temp,
            pressure: data.main.pressure,
            wind: data.wind.speed
          }))
        })
        .catch(err => {
          console.log(err)
          this.setState({
            err: true,
            city: this.state.value
          })
        })
    }
  }

  render() {
    return (
      <div className="App"> 
        <Form 
          value={this.state.value} 
          change={this.handleInputChange}
          // submit={this.handleCitySubmit}
          />
        <Result weather={this.state} />
      </div>
    );
  }
}

export default App;
