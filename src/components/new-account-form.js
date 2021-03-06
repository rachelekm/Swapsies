import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/actions-users';
import {login} from '../actions/actions-auth';
import Input from './input';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
import normalizePhone from './normalizePhone';
const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

export class CreateAccountForm extends React.Component {
    onSubmit(values) {
        const {username, 
            password, 
            firstName, 
            lastName, 
            affiliationName, 
            affiliationAddress, 
            affiliationContact} = values;
        const user = {username, 
            password, 
            firstName, 
            lastName, 
            affiliationName, 
            affiliationAddress, 
            affiliationContact};
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

    render() {
        return (
            <form
                className="create-account-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <label htmlFor="firstName">First name</label>
                <Field component={Input} type="text" name="firstName" />
                <label htmlFor="lastName">Last name</label>
                <Field component={Input} type="text" name="lastName" />
                <label htmlFor="username">Username</label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <label htmlFor="password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    validate={[required, passwordLength, isTrimmed]}
                />
                <label htmlFor="passwordConfirm">Confirm password</label>
                <Field
                    component={Input}
                    type="password"
                    name="passwordConfirm"
                    validate={[required, nonEmpty, matchesPassword]}
                />
                <div className='newaccount-form-restaurant-info'>
                    <label htmlFor="affiliationName">Restaurant Name: </label>
                    <Field component={Input} type="text" name="affiliationName" />
                    <label htmlFor="affiliationAddress">Restaurant Address: </label>
                    <Field component={Input} type="text" name="affiliationAddress" />
                    <label htmlFor="affiliationContact">Preferred Phone Number for swapping: </label>
                    <Field component={Input} type="text" name="affiliationContact" normalize={normalizePhone}/>
                </div>
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Register
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'createAccount',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('createAccount', Object.keys(errors)[0]))
})(CreateAccountForm);