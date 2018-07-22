import React from 'react';
import {reduxForm, Field, SubmissionError, focus} from 'redux-form';
import Input from './input';
import InputSelect from './select'
import {required, nonEmpty, email} from '../validators';
import { RestaurantCategories } from './categories'


export class NewSwapForm extends React.Component {
  onSubmit(values) {
    console.log(values);
  }

  render() {
    let successMessage;
      if (this.props.submitSucceeded) {
        successMessage = (
          <div className="message message-success">
            Message submitted successfully
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
              {successMessage}
              {errorMessage}

              <Field 
                name="meal-summary" 
                label="Meal Summary" 
                type="textarea" 
                component={Input}
                validate={[required, nonEmpty]}/>
              <div className="newSwapRadioButtons">
                <Field
                  name="meal-type"
                  label="Vegetarian"
                  component={Input}
                  type="radio"
                  value="Vegetarian"
                />
                <Field
                  name="meal-type"
                  label="Vegan"
                  component={Input}
                  type="radio"
                  value="Vegan"
                />
                <Field
                  name="meal-type"
                  label="Contains Nuts"
                  component={Input}
                  type="radio"
                  value="Contains Nuts"
                />
                <Field
                  name="meal-type"
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
                  name="meal-categories"
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

          </div>
        );

      }
}

export default reduxForm({
    form: 'newSwap',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('newSwap', Object.keys(errors)[0]))
})(NewSwapForm);

