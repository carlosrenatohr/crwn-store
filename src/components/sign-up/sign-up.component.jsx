import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import ButtonControl from '../button-control/button-control.component';

import { createAuthUserWithEmailPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import './sign-up.styles.scss';
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUp = () => {

    const [ formFields, setFormFields ] = useState( defaultFormFields );
    const { displayName, email, password, confirmPassword } = formFields;
    console.log(formFields);

    const handleChange = (ev) => {
        const { name, value } = ev.target;
        setFormFields( { ...formFields, [name]: value} ); // TODO check on this
    };

    const resetFormFields = (ev) => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        if (!email && !password){
            alert( 'Please enter your email and password.');
            return;
        }
        if (password != confirmPassword) {
            alert( 'Please enter your password again.');
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailPassword(email, password);
            if (user) {
                console.log('User created', user);
                const newCreatedUser = await createUserDocumentFromAuth(user, { displayName })
                resetFormFields();
            }
        } catch (error) {
            console.log('User create failed');
            console.log(error)
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
                return;
            } else if (error.code === 'auth/weak-password') {
                alert('Cannot create user, email already in use');
                return;
            } else {}
        }
        
    };

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Name</label>
                <FormInput label='Display Name' type='text' name='displayName' value={displayName} required onChange={handleChange}/>

                <FormInput
                label='Email'
                type='email'
                required
                onChange={handleChange}
                name='email'
                value={email}
                />

                <FormInput label='Password'
                type='password'
                required
                onChange={handleChange}
                name='password'
                value={password}
                />
                
                <FormInput
                label='Confirm Password'
                type='password'
                required
                onChange={handleChange}
                name='confirmPassword'
                value={confirmPassword}
                />
                <ButtonControl type='submit'>Sign Up</ButtonControl>
            </form>
        </div>
    );
}

export default SignUp;