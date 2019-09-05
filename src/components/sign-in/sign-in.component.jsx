import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = ev => {
        ev.preventDefault();
        this.setState({ email: '', password: '' })
    }

    handleChange = ev => {
        const { name, value } = ev.target;
        this.setState({ [name]: value })
    }

    render() {
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
                        required />
                    <FormInput
                        onChange={this.handleChange}
                        name="password"
                        type="password"
                        value={this.state.password}
                        label="Password"
                        required />
                    <div className="button-container">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign In With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;