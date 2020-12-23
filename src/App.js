import React, { Component } from 'react';

import './App.css';

import axios from 'axios';

import TodayWeather from './components/TodayWeather';
import Days from './components/Days';
import OtherDayWeather from './components/OtherdayWeather';

class App extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Lens&units=metric&appid=72108e347dc182365f7eb12a2452214b&lang=fr`)
    .then(response => {
      this.setState({ data: response.data })
    })
  }
  
  render() {
    if (Object.keys(this.state.data).length !== 0) {
      console.log(`http://openweathermap.org/img/wn/${this.state.data.weather[0].icon}@2x.png`);
      return (
        <div className="container">
          <TodayWeather
          name={this.state.data.name}
          image={`http://openweathermap.org/img/wn/${this.state.data.weather[0].icon}@2x.png`}
          temp={this.state.data.main.temp}
          description={this.state.data.weather[0].description} />
          <Days />
          <OtherDayWeather />
        </div>
      );
    } else {
      return <p>Chargement...</p>;
    }
  }
}

export default App;