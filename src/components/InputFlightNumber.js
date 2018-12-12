import React, { Component } from 'react';

class InputFlightNumber extends Component {
  
  constructor(props) {
    super(props)
    this.state = { flightNumber: '', flightNumberValid: false}
    this.handleChange = this.handleChange.bind(this)
    this.clearInput = this.clearInput.bind(this)
  }

  validateFlightNumber(str) {
    return str.match(/\b[A-Z]{2}[0-9]{1,4}\b/) ? true : false
  }
  
  clearInput() {
    return this.setState({flightNumber: '', flightNumberValid: false})
  }

  handleChange(e) {
    const flightNumber = e.target.value.toUpperCase()
    const flightNumberValid = this.validateFlightNumber( e.target.value.toUpperCase() )
    return this.setState({flightNumber, flightNumberValid})
  }

  componentDidUpdate(prevProps, prevState) {
    return prevState !== this.state && this.props.handleInput(this.state)
  }

  componentDidMount() {
    this.props.handleInput(this.state)
  }

  render() {
    return (
      <div className={`input_container ${this.state.focus && 'input_container_focused'}`}>

        {this.state.flightNumberValid ? <span className="fas fa-check icon_small"></span> : <span></span>}

        <input 
          className={`input_field ${this.state.flightNumberValid && 'input_field_valid'}` }
          type="text" 
          placeholder="Vluchtnummer"
          maxLength="6"
          onChange={ this.handleChange }
          value={ this.state.flightNumber }
        />

        { this.state.flightNumber.length > 0 ? <span className="fas fa-times-circle icon_small" onClick={ this.clearInput }></span> : <span></span> }

      </div>
    )
  }
}

export default InputFlightNumber