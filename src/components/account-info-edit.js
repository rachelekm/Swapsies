import React from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field, change, untouch } from 'redux-form';
import Input from './input';
import { required, nonEmpty } from '../validators';
import { updateUserInfo, toggleEditInfo } from '../actions';

export class AccountInfoEdit extends React.Component {

  onSubmit(values) {
    this.props.dispatch(updateUserInfo(values));
    this.props.dispatch(toggleEditInfo('accountInfo'));
  }

  resetFields(formName, fieldsObj) {
      Object.keys(fieldsObj).forEach(fieldKey => {
          this.props.dispatch(change(formName, fieldKey, fieldsObj[fieldKey]));
          this.props.dispatch(untouch(formName, fieldKey));
      });
    }

  render() {
    let errorMessage;
      if (this.props.error) {
        errorMessage = (
          <div className="message message-error">{this.props.error}</div>
      );
    }

    return (
      <div className="accountInfo">
        <form
          onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values))}>
          <h2>Name:</h2>
          <Field 
            name="userFirstName" 
            type="text" 
            component={Input}
            validate={[required, nonEmpty]}
            />
          <Field 
            name="userLastName" 
            type="text" 
            component={Input}
            validate={[required, nonEmpty]}
            />

          <div className="restaurantInfoEdit">
          <h2>Restaurant Affiliation: </h2>
          <Field 
            name="affiliationName" 
                label="Name: " 
                type="text" 
                component={Input}
                validate={[required, nonEmpty]}
            />
          <Field 
            name="affiliationAddress" 
                label="Address: " 
                type="text" 
                component={Input}
                validate={[required, nonEmpty]}
            />
            <Field 
            name="affiliationContact" 
                label="Contact Info: " 
                type="text" 
                component={Input}
                validate={[required, nonEmpty]}
            />
            </div>
            <button
              type="submit"
              className="editInfoSubmitbutton">
                    Confirm Edit
            </button>
            </form>
            {errorMessage}
          </div>
        );

      }
}

 function mapStateToProps(state) {

    return {
        initialValues :state.app.user
     }
}

export default connect( mapStateToProps )(
    reduxForm({
        form: 'editProfileInfo',
        enableReinitialize : true
    })(AccountInfoEdit)
 );