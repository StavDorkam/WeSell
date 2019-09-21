import React, { useState } from 'react';
import { connect } from 'react-redux';

import { signUpStart } from '../../redux/user/user.actions';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import { SignUpContainer, TitleContainer } from './sign-up.styles';

const SignUp = ({ signUpStart }) => {
    const [credentials, setCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const { displayName, email, password, confirmPassword } = credentials;

    const handleSubmit = async ev => {
        ev.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords Dont Match!')
            return;
        }
        signUpStart({ displayName, email, password })
    }

    const handleChange = ev => {
        const { name, value } = ev.target;
        setCredentials({ ...credentials, [name]: value })
    }

    return (
        <SignUpContainer>
            <TitleContainer>I do not have an account</TitleContainer>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={handleChange}
                    label="Display Name"
                    required
                />
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    label="Email"
                    autoComplete="username"
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    label="Password"
                    autoComplete="new-password"
                    required
                />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    label="Confirm Password"
                    autoComplete="new-password"
                    required
                />
                <CustomButton type="submit">SIGN UP</CustomButton>
            </form>
        </SignUpContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: credentials => dispatch(signUpStart(credentials))
})

export default connect(null, mapDispatchToProps)(SignUp)