import './DropDownSelect.css';
import React, { Component } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';

class DropDownSelect extends Component {

  constructor(props){
    super(props)
    this.state = {
      options: this.props.options
    };
  }


  render(){
    return (
      <div className="dropDownSelect">
        <Multiselect
        options={this.state.options} // Options to display in the dropdown
        selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
        onSelect={this.onSelect} // Function will trigger on select event
        onRemove={this.onRemove} // Function will trigger on remove event
        singleSelect={true}
        displayValue="name" // Property name to display in the dropdown options
        />
      </div>
    );
  }
  
}

export default DropDownSelect;
