import React, { Component } from 'react';
import PropTypes from 'prop-types';

const dateOptions = { weekday: 'short',year: 'numeric', month: 'long', day: 'numeric' }
const timeOptions = { hour: 'numeric', minute: 'numeric' }

class Results extends Component {

  render() {
    return (
      <div className="results_container">
      <span className="results_header">{ this.props.airline }</span>
        <div className="results_item">
        <span className="fas fa-plane-departure icon_large"> </span>
            <div className="results_details">
            <span>{ this.props.airportDeparture }</span>
            <span>{ this.props.dateDeparture.toLocaleDateString('nl-NL', dateOptions) }</span>
            <span>{ this.props.dateDeparture.toLocaleTimeString('nl-NL', timeOptions) }</span>
            <span>{  }</span>
          </div>
        </div>
        <div className="results_item">
          <span className="fas fa-plane-arrival icon_large"> </span>
            <div className="results_details">
            <span>{ this.props.airportArrival }</span>
            <span>{ this.props.dateArrival.toLocaleDateString('nl-NL', dateOptions) }</span>
            <span>{ this.props.dateArrival.toLocaleTimeString('nl-NL', timeOptions) }</span>
          </div>
        </div>
      </div>
    );
  }
}

Results.propTypes = {
  airline: PropTypes.string.isRequired,
  dateDeparture: PropTypes.object.isRequired,
  dateArrival: PropTypes.object.isRequired,
  airportArrival: PropTypes.string.isRequired,
  airportDeparture: PropTypes.string.isRequired
};

export default Results;