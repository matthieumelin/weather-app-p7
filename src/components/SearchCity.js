import React, { Component } from 'react';

class SearchCity extends Component {
    render() {
        return (
            <div className="search_city">
                <input type="text" name="city" id="city" placeholder="Rechercher une ville.." className="search_input" />
            </div>
        );
    }
}

export default SearchCity;