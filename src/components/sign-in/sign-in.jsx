import React, { useState } from 'react';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import './sign-in.scss';


const SignIn = props => {
    const [state, setStste] = useState({
        email: "",
        password: ""
    });

    const handleSubmite = event => {
        event.preventDefault();

        setStste({email: ""});
        setStste({password: ""});
    };

    const handleChage = event => {
        const {value, name} = event.target;

        setStste({...state, [name]: value});
    };

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>sign in with your email and password</span>

            <form onSubmit={handleSubmite}>
                <FormInput 
                    name="email" 
                    type="email" 
                    value={state.email} 
                    required 
                    handleChange={handleChage}
                    label="email"
                />
                <FormInput 
                    name="password" 
                    type="password" 
                    value={state.password} 
                    required
                    handleChange={handleChage}
                    label="password"
                />

                <CustomButton type="submit">Sign In</CustomButton>
            </form>
        </div>
    );
};


export default SignIn;