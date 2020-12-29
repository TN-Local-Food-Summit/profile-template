import './TextArea.css';
import React, { Component } from 'react';

class TextArea extends Component {

  MAX_LEN = 500;

  constructor(props){
    super(props)
    this.state = { charsLeft: this.MAX_LEN };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ charsLeft: this.MAX_LEN - e.target.value.length })
  }


  render(){
    return (
      <div>
        <div>{this.props.label}:</div>
        <textarea className="textArea" onChange={this.handleChange} maxLength={this.MAX_LEN}/>
        <p className="textAreaCharsLeft">{this.state.charsLeft} Characters Left</p>
      </div>
    );
  }
  
}

export default TextArea;
