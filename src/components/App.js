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
    error: ""
  }

  handleInputChange = (e) => {
    const value = e.target.value
    this.setState({
      value: value
    })
  }

  handleCitySubmit = (e) => {
    console.log("Potwierzdzony formularz")
    e.preventDefault()

    const APIKey = '02c2023f3244257649f7751b64e787bb'
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}`;

    fetch(API)
      .then(response => response.json())
      .then(response => {
        if(response.ok) {
          return response
        }
        throw Error("Nie udało się ")
      })
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App"> 
        <Form 
          value={this.state.value} 
          change={this.handleInputChange}
          submit={this.handleCitySubmit}
          />
        <Result/>
      </div>
    );
  }
}

export default App;
