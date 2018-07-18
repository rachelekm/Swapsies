import React from 'react';
import { connect } from 'react-redux';

import { filterSearch } from '../actions';

export class SearchFilter extends React.Component {
  handleRadioChange(event){
    event.preventDefault();
    console.log(event);
    const value = event.currentTarget.value;
    this.props.dispatch(filterSearch(value));
  };

  render() {
    return (
      <div className='filter-radio-buttons'>
            Select where applicable:
          <fieldset>
            <input 
              type="radio" 
              name="meal-type" 
              value="0" 
              className="meal-type-radio" 
              checked
              onChange={this.handleRadioChange} />
            <label htmlFor="meal-type">
              <span>Vegetarian</span>
            </label>
            <input 
              type="radio" 
              name="meal-type" 
              value="1" 
              className="meal-type-radio" 
              checked
              onChange={this.handleRadioChange}
               />
            <label htmlFor="meal-type">
              <span>Vegan</span>
            </label>
            <input 
              type="radio" 
              name="meal-type" 
              value="2" 
              className="meal-type-radio" 
              checked
              onChange={this.handleRadioChange}
               />
            <label htmlFor="meal-type">
              <span>Contains Nuts</span>
            </label>
            <input 
              type="radio" 
              name="meal-type" 
              value="3" 
              className="meal-type-radio" 
              checked
              onChange={this.handleRadioChange}
               />
            <label htmlFor="meal-type">
              <span>Gluten Free</span>
            </label>
          </fieldset>
      </div>
    );
  }
}

export default connect ()(SearchFilter);
