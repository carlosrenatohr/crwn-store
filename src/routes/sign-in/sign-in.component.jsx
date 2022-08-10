import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
    
    useEffect( () => async () => { 
        // (async () => {
            const response = await getRedirectResult(auth);
            console.log(response);
            if (response) {
                const userDocRef = await createUserDocumentFromAuth(response.user);                
            }
            
        // }) ()
    }, []);

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(response.user);
    }

    return(
        <div>
            <h1>Sign in</h1>
            <button onClick={logGoogleUser}>Sign in With Google</button>
            <button onClick={signInWithGoogleRedirect}>Sign in With Redirect</button>
        </div>
    );
}

export default SignIn;