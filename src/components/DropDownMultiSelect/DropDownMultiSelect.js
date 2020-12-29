import './DropDownMultiSelect.css';
import React, { Component } from 'react';
import { Multiselect } from 'multiselect-react-dropdown';


class DropDownMultiSelect extends Component {

  constructor(props){
    super(props)
    // https://github.com/harvesthq/chosen/releases
    this.state = {
      options: this.props.options
    };
  }

  


  render(){
    return (
      <div className="dropDownMultiSelect">
        <Multiselect
        options={this.state.options} // Options to display in the dropdown
        selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
        onSelect={this.onSelect} // Function will trigger on select event
        onRemove={this.onRemove} // Function will trigger on remove event
        displayValue="name" // Property name to display in the dropdown options
        />
      </div>
    );
  }
  
}

export default DropDownMultiSelect;
