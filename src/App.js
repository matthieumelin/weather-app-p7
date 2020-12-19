import React, { Component } from 'react';

import './App.css';

import axios from 'axios';

import SearchCity from './components/SearchCity';
import TodayWeather from './components/TodayWeather';
import Days from './components/Days';
import OtherDayWeather from './components/OtherdayWeather';

class App extends Component {
  state = {
    data: []
  }

 // des que le composant est chargé
  componentDidMount() {
    // recupérer les données météo
    const latitude = 50.4291723;
    const longitude = 2.8319805;
    const API = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&lang=fr&exclude=minutely,hourly,alerts?q=Lens&appid=72108e347dc182365f7eb12a2452214b`;
    axios.get(`${API}`)
    .then(response => {
      // on met a jour le state
      this.setState({
        // on met a jour le tableau des données (aujourd'hui)
        data: response.data
      })
    })
  }
  
  render() {
    const data = this.state.data;

    if (Object.keys(data).length !== 0) {
      const today = data.current;
      const todayWeekDay = new Date(today.dt * 1000).toLocaleString("fr-FR", { weekday: "long" });

      return (
        <div className="container">
          <SearchCity />
          <TodayWeather
          image={`http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`}
          name={data.name}
          temp={data.current.temp}
          description={data.current.weather[0].description} />
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