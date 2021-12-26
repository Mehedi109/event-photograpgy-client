import { Button } from "@mui/material";
import React from "react";
import useFirebase from "../../../hooks/useFirebase";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { googleSignIn, user } = useFirebase();
  console.log(user.email);

  const location = useLocation();
  const navigate = useNavigate();
  const redirect_uri = location.state?.from || "/home";

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      navigate(redirect_uri);
    });
  };
  return (
    <div>
      <h2>Login</h2>
      <Button onClick={handleGoogleSignIn}>Sign In With Google</Button>
    </div>
  );
};

export default Login;
