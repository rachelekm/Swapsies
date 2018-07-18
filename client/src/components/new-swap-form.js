import React from 'react';
import { connect } from 'react-redux';
import { RestaurantCategories } from './categories'
import { addSwapPosting } from '../actions';


export class NewSwapForm extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  render() {
    const categories = RestaurantCategories.map((type) => (
        <option value={type}>{type}</option>
      ));

    return (
      <div id="newSwapSection">
      <h2>What are you bringing to the swap: </h2>
      <form id="dish-info" onSubmit={e => this.onSubmit(e)}>
        <div class="form-section">
          <label for="meal-summary">Meal Summary</label>
          <textarea name="meal-summary" rows="15" required></textarea>
        </div>
        <div className="form-tags-section">
        <label for="meal-tags">Select categories from below:</label>
          <select name='swapTagsInput' className='swapTagsInput' aria-label="swap categories selection" multiple size='4' required>
              {categories}
          </select>
        </div>
        <div className="form-radio-section">
            <p>Select where applicable: </p>

            <input type="radio" name="meal-type" value="0" className="meal-type-radio" checked />
            <label for="meal-type">
              <span>Vegetarian</span>
            </label>
            <input type="radio" name="meal-type" value="1" className="meal-type-radio" checked />
            <label for="meal-type">
              <span>Vegan</span>
            </label>
            <input type="radio" name="meal-type" value="2" className="meal-type-radio" checked />
            <label for="meal-type">
              <span>Contains Nuts</span>
            </label>
            <input type="radio" name="meal-type" value="3" className="meal-type-radio" checked />
            <label for="meal-type">
              <span>Gluten Free</span>
            </label>
        </div>
        <button 
          type="submit"
          name="submit"
          id="submitButton" 
          className="swapSubmitbutton"
        >
          Publish Your Swap
        </button>
      </form>
    </div>
    );
  }
}

export default connect ()(NewSwapForm);