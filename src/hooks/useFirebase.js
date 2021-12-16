import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from 'firebase/auth';
import { useState } from 'react';
import initializeAuthentication from '../Pages/Login/Firebase/firebase.init';
initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});

  const auth = getAuth();

  const googleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // // The signed-in user info.
        console.log(result.user.displayName);
        setUser(result.user);
        // console.log(usr);
        console.log(user);
        // const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here. 0x80070006 - 0x90018
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
      // ...
    } else {
      setUser({});
    }
  });

  return {
    user,
    setUser,
    googleSignIn,
  };
};

export default useFirebase;
