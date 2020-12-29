import './TextInput.css';
import React, { Component } from 'react';

class TextInput extends Component {

  constructor(props){
    super(props)

  }


  render(){
    return (
      <div className="textInputDiv">
        <p className="label">{this.props.label}</p>
        <input className="textInput" placeholder={this.props.label}/>
      </div>
    );
  }
  
}

export default TextInput;
