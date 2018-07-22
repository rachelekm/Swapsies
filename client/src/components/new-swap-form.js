import React from 'react';
import { connect } from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import { RestaurantCategories } from './categories'
import { addSwapPosting } from '../actions';


export class NewSwapForm extends React.Component {
  onSubmit(values) {
    console.log(values);
  }

  render() {
    const categories = RestaurantCategories.map((type) => (
        <option value={type}>{type}</option>
      ));

    return (
      <div id="newSwapSection">
      <h2>What are you bringing to the swap: </h2>
          <form
              onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
              <label for="meal-summary">Meal Summary</label>
              <Field name="meal-summary" 
                id="meal-summary" 
                type="text" 
                component="textarea" />
              <label for="meal-tags">Select categories from below:</label>
              <Field name="swapTagsInput" id="swapTagsInput" type="text" component="select" />
              <Field
                onClick={
                  () => {
                    this.setState((prevState) => {
                    return {isChecked: !prevState.isChecked};
                    });
                  }
                }
                name="meal-type"
                component="input"
                type="radio"
                checked={this.state.isChecked}
                value="Vegetarian"
                />
                Vegetarian
                <button type="submit"
                  className="swapSubmitbutton">
                  Publish Your Swap
                  </button>
            </form>

          </div>
        );

      }
}
export default reduxForm({form: 'swapform'})(NewSwapForm);

