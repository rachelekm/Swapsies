import { change as changeFieldValue } from 'redux-form'
import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export default class InputSelect extends Component {

 render() {
  return (
   <Select
    {...this.props}
    value={this.props.input.value}
    onChange={(value) => this.props.input.onChange(value)}
    onBlur={() => this.props.input.onBlur(this.props.input.value)}
    options={this.props.options}
   />
  );
 }
}