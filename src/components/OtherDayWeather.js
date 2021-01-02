import React, { Component } from 'react';

class OtherDayWeather extends Component {
    render() {
        const { daily } = this.props;
        return (
            <div className="days">
                {daily.map((day, key) => {
                    const dayName = new Date(day.dt * 1000).toLocaleString("fr-FR", { weekday: "long" });
                    if (dayName === new Date().toLocaleString("fr-FR", { weekday: "long" }).toLocaleLowerCase()) return;
                    return <div key={key} className="day">
                        <h3 className="day-name">{dayName}</h3>
                        <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt={dayName} className="day-image" />
                        <div className="day-temp">{day.temp.day}°c</div>
                    </div>
                })}
            </div>
        );
    }
}

export default OtherDayWeather;