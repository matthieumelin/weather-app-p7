import React, { Component } from 'react';

import './App.css';

import axios from 'axios';

import TodayWeather from './components/TodayWeather';
import OtherDayWeather from './components/OtherDayWeather';

class App extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=50.4291723&lon=2.8319805&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=72108e347dc182365f7eb12a2452214b")
      .then(response => {
        this.setState({ data: response.data })
      });
  }

  render() {
    if (Object.keys(this.state.data).length !== 0) {
      return (
        <div className="container">
          <TodayWeather
            name="Lens"
            image={`http://openweathermap.org/img/wn/${this.state.data.current.weather[0].icon}@2x.png`}
            temp={this.state.data.current.temp}
            description={this.state.data.current.weather[0].description} />
          <OtherDayWeather
            daily={this.state.data.daily} />
        </div>
      );
    } else {
      return <p>Chargement...</p>;
    }
  }
}

export default App;