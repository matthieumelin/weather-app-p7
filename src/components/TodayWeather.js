import React, { Component } from 'react';

class TodayWeather extends Component {
    render() {
        const {name, image, temp, description} = this.props;
        return ( 
            <div className="today-weather">
                <div className="today-time">
                    <img src={image} alt={description} className="today-image" />
                </div>
                <div className="today-infos">
                    <h2 className="today-day">Aujourd'hui</h2>
                    <h1 className="today-city">Ville de {name}</h1>
                    <div className="today-temp">Température: {temp}°c</div>
                    <div className="today-sky">{description}</div>
                </div>
            </div>
        );
    }
}

export default TodayWeather;