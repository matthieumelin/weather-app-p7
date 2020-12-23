import React, { Component } from 'react';

class TodayWeather extends Component {
    render() {
        const {name, image, temp, description} = this.props;
        return ( 
            <div className="today_weather">
                <div className="today_time">
                    <img src={image} alt={description} className="today_image" />
                </div>
                <div className="today_infos">
                    <h2 className="today_day">Aujourd'hui</h2>
                    <h1 className="today_city">Ville de Lens</h1>
                    <div className="today_temp">Température: {temp}°c</div>
                    <div className="today_sky">{description}</div>
                </div>
            </div>
        );
    }
}

export default TodayWeather;