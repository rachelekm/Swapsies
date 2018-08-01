import React from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field, change, untouch } from 'redux-form';
import Input from './input';
import InputSelect from './select'
import { required, nonEmpty } from '../validators';
import { updateSwap, toggleEditInfo } from '../actions/actions';
import { RestaurantCategories } from './categories'


export class SwapHistoryEdit extends React.Component {

  onSubmit(values) {
    console.log('in here');
    this.props.dispatch(updateSwap(values, this.props.index));
    this.props.dispatch(toggleEditInfo('swapHistory', this.props.index));
  }

  resetFields(formName, fieldsObj) {
      Object.keys(fieldsObj).forEach(fieldKey => {
          this.props.dispatch(change(formName, fieldKey, fieldsObj[fieldKey]));
          this.props.dispatch(untouch(formName, fieldKey));
      });
    }

  render() {
    console.log(this.props.initialValues);
    let errorMessage;
      if (this.props.error) {
        errorMessage = (
          <div className="message message-error">{this.props.error}</div>
      );
    }

    const categories = RestaurantCategories.map(c => {
      return { value: c, label: c }
    });
    const extraCat = ["Vegan", "Vegetarian", "Gluten Free", "Contains Nuts"];
    extraCat.forEach(c => {
      categories.push( { value: c, label: c } );
    });

    return (
      <div className="editSwapInfo">
        <form
          onSubmit={this.props.handleSubmit(values =>
            this.onSubmit(values)
        )}>

          <Field 
            name="mealSummary" 
            label="Meal Summary" 
            type="textarea" 
            component={Input}
            validate={[required, nonEmpty]
          }/>
          <div className="newSwapSelectSection">
            Select where applicable:
            <Field
              className = "form-select"
              name="mealCategories"
              options={
                categories
              }
              validate={[required]}
              component={InputSelect}
              multi          
            />
          </div>


                <button
                    type="submit"
                    className="swapSubmitbutton"
                >
                Publish Your Swap
                </button>
            </form>
            {errorMessage}
          </div>
        );

      }
}

 function mapStateToProps(state, ownProps) {
  const selectedIndex = ownProps.index;
  const allTags = state.app.userSwaps[selectedIndex].tags.map(tag => 
    { return {value: tag.type, label: tag.type }}
  );

    return {
        initialValues: {
          mealSummary: state.app.userSwaps[selectedIndex].description,
          mealCategories: allTags
        }
     }
}

export default connect( mapStateToProps )(
    reduxForm({
        form: 'editSwapInfo',
        enableReinitialize : true
    })(SwapHistoryEdit)
 );