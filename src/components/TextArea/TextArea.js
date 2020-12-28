import './TextArea.css';
import React, { Component } from 'react';

class TextArea extends Component {

  constructor(props){
    super(props)

  }


  render(){
    return (
      <div>
        <textarea className="textArea" maxLength="500"/>
      </div>
    );
  }
  
}

export default TextArea;
