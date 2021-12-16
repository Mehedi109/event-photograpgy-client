import { Button } from '@mui/material';
import React from 'react';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
  const { googleSignIn, user } = useFirebase();
  console.log(user.email);
  const handleGoogleSignIn = () => {
    googleSignIn();
  };
  return (
    <div>
      <Button onClick={handleGoogleSignIn}>Sign In With Google</Button>
      {/* <h2>{user}</h2> */}
    </div>
  );
};

export default Login;
