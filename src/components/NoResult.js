import React, { Component } from 'react';

class NoResult extends Component {

  render() {
    return (
      <div className="results_container">
        <span className="results_header"> Helaas, geen vlucht gevonden </span>
      </div>
    );
  }
}


export default NoResult;