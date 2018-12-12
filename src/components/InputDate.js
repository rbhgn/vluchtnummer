import React, { Component } from 'react';

const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' }

class InputDate extends Component {

  constructor(props) {
    super(props);

    this.state = {date: new Date(), dropdown: false, dates: []};
    this.showDropDown = this.showDropDown.bind(this);
    this.setDate = this.setDate.bind(this)
  }

  showDropDown() {
    return this.setState(prev => ({dropdown: !prev.dropdown}))
  }
  
  setDate(e) {
    return this.setState({date: new Date(e.target.value), dropdown: false})
  }
  
  componentDidUpdate(prevProps, prevState) {
    return prevState !== this.state && this.props.handleInput({date: this.state.date})
  }

  componentDidMount() {
    const dates = Array.from(Array(14).keys()).map(v => new Date(Date.now() + v * 86400000))
    this.setState({dates})
  }

  render() {
    
    return (

      <div className={`input_container ${this.state.focus && 'input_container_focused'}`}>

        <span className="fas fa-check icon_small"/>

        <div className="input_field"> 
          { 
            typeof this.state.date === 'object' ? '' + this.state.date.toLocaleDateString('nl-NL', dateOptions) : typeof this.state.date
          } 
        </div>

        <span 
          className={`fas ${this.state.dropdown ? 'fa-chevron-up' : 'fa-chevron-down'} icon_small`} 
          onClick={ this.showDropDown }
        />
        
        { this.state.dropdown && <div className="dropdown_container">

        {this.state.dates.map((v, i) => (
          <button 
            onClick={ this.setDate } 
            value={ v } key={ i }
            className="dropdown_item">{ i=== 0 ? 'Vandaag' : i === 1 ? 'Morgen' : v.toLocaleDateString('nl-NL', dateOptions)  }
          </button>
        ))}

      </div>
      
      }
      
      </div>

    )
  }
}

export default InputDate;