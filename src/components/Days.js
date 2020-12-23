import React, { Component } from 'react';

class Days extends Component {
    render() {
        const {days} = this.props;
        return (
            <div className="days">
                {/* <div className="day">
                    <img src={days.icon} alt={days.name}/>
                    <h2 className="day_name">{days.name}</h2>
                    <h1 className="day_temp">{days.temp}</h1>
                </div> */}
            </div>
        )
    }
}

export default Days;