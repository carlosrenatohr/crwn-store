import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB-6hb_vw4ZRYM5ccW72uA7ew43HLfTM_g",
    authDomain: "crw-react-store.firebaseapp.com",
    projectId: "crw-react-store",
    storageBucket: "crw-react-store.appspot.com",
    messagingSenderId: "276888917332",
    appId: "1:276888917332:web:f020c4de005800331be4c1"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);