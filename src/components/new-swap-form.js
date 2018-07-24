import React from 'react';
import {reduxForm, Field, change, untouch } from 'redux-form';
import Input from './input';
import InputSelect from './select'
import { required, nonEmpty } from '../validators';
import { RestaurantCategories } from './categories'
import { addSwapPosting } from '../actions';

export class NewSwapForm extends React.Component {

  onSubmit(values) {
    console.log(values);
    this.props.dispatch(addSwapPosting(values));
    this.resetFields('newSwap', {
      mealSummary: '',
      mealCategories: '',
      mealType: ''});
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
            Your swap has been posted!
          </div>
        );
      }

    let errorMessage;
      if (this.props.error) {
        errorMessage = (
          <div className="message message-error">{this.props.error}</div>
      );
    }

    const categories = RestaurantCategories.map(c => {
                      return { value: c, label: c }
                    });

    return (
      <div id="newSwapSection">

      <h2>What are you bringing to the swap: </h2>
          <form
              onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>

              <Field 
                name="mealSummary" 
                label="Meal Summary" 
                type="textarea" 
                component={Input}
                validate={[required, nonEmpty]}/>
              <div className="newSwapRadioButtons">
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
              <div className="newSwapSelectSection">
              Select where applicable:
                <Field
                  className = "form-select"
                  name="mealCategories"
                  options={
                    categories
                  }
                  component={InputSelect}
                  multi          
                  />
              </div>


                <button
                    type="submit"
                    className="swapSubmitbutton"
                    disabled={this.props.pristine || this.props.submitting}>
                    Publish Your Swap
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
})(NewSwapForm);

