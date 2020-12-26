import React, { Component } from 'react';

class BinarySelect extends Component {

  constructor(props){
    super(props)

  }


  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input type='checkbox'/>
      </div>
    );
  }
  
}

export default BinarySelect;
