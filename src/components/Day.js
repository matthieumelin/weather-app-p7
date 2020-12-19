import React, { Component } from 'react';

class Day extends Component {
    render() {
        const {icon, name, temp } = this.props;
        return (
            <div className="day">
                <img src={icon} alt={name}/>
                <h2 className="day_name">{name}</h2>
                <h1 className="day_temp">{temp}</h1>
            </div>
        );
    }
}

export default Day;