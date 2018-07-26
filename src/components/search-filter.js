import React from 'react';
import {reduxForm, Field, change, untouch } from 'redux-form';
import Input from './input';
import { connect } from 'react-redux';
import { required, nonEmpty } from '../validators';
import { filterSearch } from '../actions';

export class SearchFilter extends React.Component {

  onSubmit(values) {
    this.props.dispatch(filterSearch(values));
    this.resetFields('newSwap', {mealType: '', textSearch: ''});
  }

  resetFields(formName, fieldsObj) {
      Object.keys(fieldsObj).forEach(fieldKey => {
          this.props.dispatch(change(formName, fieldKey, fieldsObj[fieldKey]));
          this.props.dispatch(untouch(formName, fieldKey));
      });
    }

  render() {

    let successMessage;
      if (this.props.submitSucceeded) {
        successMessage = (
          <div className="message message-success">
          </div>
        );
      }

    let errorMessage;
      if (this.props.error) {
        errorMessage = (
          <div className="message message-error">{this.props.error}</div>
      );
    }

    return (
      <div id="searchSwapSection">
          <form
              onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
              <div className="filterSwapSearchBar">
                <Field 
                  name="textSearch" 
                  label="Search for swaps:" 
                  placeholer="search swaps..."
                  type="text" 
                  component={Input} />
              </div>

              <div className="filterSwapRadioButtons">
                <Field
                  name="mealType"
                  label="Vegetarian"
                  component={Input}
                  type="radio"
                  value="Vegetarian"
                />
                <Field
                  name="mealType"
                  label="Vegan"
                  component={Input}
                  type="radio"
                  value="Vegan"
                />
                <Field
                  name="mealType"
                  label="Contains Nuts"
                  component={Input}
                  type="radio"
                  value="Contains Nuts"
                />
                <Field
                  name="mealType"
                  label="Gluten Free"
                  component={Input}
                  type="radio"
                  value="Gluten Free"
                />
              </div>
                <button
                    type="submit"
                    className="searchSubmitbutton"
                    disabled={this.props.pristine || this.props.submitting}>
                    Filter Swaps
                </button>
            </form>
            {successMessage}
            {errorMessage}
          </div>
        );

      }
}
      

export default reduxForm({
    form: 'newSwap'
})(SearchFilter);


