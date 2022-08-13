import { useState, useEffect, useContext } from 'react';

import FormInput from '../form-input/form-input.component';
import ButtonControl from '../button-control/button-control.component';

import { UserContext } from '../../contexts/user.context';

import { getRedirectResult } from 'firebase/auth';
import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

import './sign-in.styles.scss';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    // const { currentUser, setCurrentUser} = useContext(UserContext)

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
        // setCurrentUser(user);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email,password);
            // setCurrentUser(user);

            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                case 'auth/wrong-password':
                    alert('wrong password for email');
                    break;
                default:
                    console.log(error);
            }
        }
    };
    
    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormFields({ ...formFields, [name]: value });
    };

    return(
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                label='Email'
                type='email'
                required
                onChange={handleChange}
                name='email'
                value={email}
                />

                <FormInput
                label='Password'
                type='password'
                required
                onChange={handleChange}
                name='password'
                value={password}
                />
                <div className='buttons-container'>
                <ButtonControl type='submit'>Sign In</ButtonControl>
                <ButtonControl type='button' buttonType='google' onClick={signInWithGoogle}>
                    Google sign in
                </ButtonControl>
                </div>
            </form>
        </div>
    );
}

export default SignIn;