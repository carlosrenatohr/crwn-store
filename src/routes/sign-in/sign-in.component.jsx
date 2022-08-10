import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
    
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(response.user);
        // console.log(response);
    }

    return(
        <div>
            <h1>Sign in</h1>
            <button onClick={logGoogleUser}>Sign in With Google</button>
        </div>
    );
}

export default SignIn;