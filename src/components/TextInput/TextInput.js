import './TextInput.css';
import React, { Component } from 'react';

class TextInput extends Component {

  constructor(props){
    super(props)

  }


  render(){
    return (
      <div className="textInputDiv">
        <p className="label">{this.props.label + (this.props.required ? '*' : '')}</p>
        <input className="textInput" placeholder={this.props.label} required={this.props.required}/>
      </div>
    );
  }
  
}

export default TextInput;
