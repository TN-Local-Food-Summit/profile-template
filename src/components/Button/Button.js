import './Button.css';
import React, { Component } from 'react';

class Button extends Component {

  constructor(props){
    super(props)

  }


  render(){
    return (
      <div>
        <button type="submit" className="button">Submit</button>
      </div>
    );
  }
  
}

export default Button;
