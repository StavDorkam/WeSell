import React from 'react';
import {connect} from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async ev => {
        ev.preventDefault();
        const {emailSignInStart} =  this.props;
        const {email, password} = this.state;
        emailSignInStart(email, password);
    }

    handleChange = ev => {
        const { name, value } = ev.target;
        this.setState({ [name]: value })
    }

    render() {
        const {googleSignInStart} = this.props;
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        onChange={this.handleChange}
                        name="email"
                        type="email"
                        value={this.state.email}
                        label="Email"
                        autoComplete="username"
                        required />
                    <FormInput
                        onChange={this.handleChange}
                        name="password"
                        type="password"
                        value={this.state.password}
                        label="Password"
                        autoComplete="current-password"
                        required />
                    <div className="button-container">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
                            Sign In With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);