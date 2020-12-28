import './TextInput.css';
import React, { Component } from 'react';

class TextInput extends Component {

  constructor(props){
    super(props)

  }


  render(){
    return (
      <div>
        <input className="textInput" placeholder={this.props.placeholder}/>
      </div>
    );
  }
  
}

export default TextInput;
