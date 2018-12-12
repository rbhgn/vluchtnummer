import React, { Component } from 'react'
import InputFlightNumber from './components/InputFlightNumber'
import InputDate from './components/InputDate'
import Results from './components/Results'
import NoResult from './components/NoResult'
import { connect } from 'react-redux'
import { loadData } from './actions/loadData'

import './App.scss'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {flightNumber: '', flightNumberValid: false};
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(obj) {
    return Object.keys(obj).map(v => this.setState({ [v]: obj[v] }) )
  }

  componentDidUpdate(prevProps, prevState) {
    return this.state.flightNumberValid && prevState !== this.state && this.props.loadData(this.state)
  }

  render() {
    return (
      <div className="App">

        <div className="form_container">
        
          <span className="bold_text">Vind een vlucht</span>

          <InputDate 
            handleInput={ this.handleInput }
          />

          <InputFlightNumber 
            handleInput={ this.handleInput }
          />
  
          { this.state.flightNumberValid && this.state.date && !this.props.result.noResult && this.props.result.dateArrival && <Results 
            dateArrival={ this.props.result.dateArrival } 
            airportArrival={ this.props.result.airportArrival }
            dateDeparture={ this.props.result.dateDeparture } 
            airportDeparture={ this.props.result.airportDeparture } 
            airline={ this.props.result.airline }
          /> }

          { this.state.flightNumberValid && this.state.date && this.props.result.noResult && <NoResult />}

        </div>
       
      </div>
    );
  }
}

const mapStateToProps = function (state) {
	return {
    result: state.result
	}
}



export default connect(mapStateToProps, {loadData})(App)