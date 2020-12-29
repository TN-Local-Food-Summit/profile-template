import './BinarySelect.css';
import React, { Component } from 'react';
import Switch from "react-switch";


class BinarySelect extends Component {

  constructor(props){
    super(props)
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <div className="binarySelect">
        <label>{this.props.label}</label>
        <Switch 
        onChange={this.handleChange} 
        checked={this.state.checked} 
        height={20}
        width={50}
        />
      </div>
    );
  }
  
}

export default BinarySelect;
