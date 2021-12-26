import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import "./MakeAdmin.css";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAddAdmin = (e) => {
    const user = { email };
    const url = "https://agile-sierra-38761.herokuapp.com/users/admin";
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setEmail("");
          setSuccess(true);
          alert("The user added as admin");
        } else {
          alert("Not added as admin");
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h5 className="mt-5">Make Admin</h5>

      <form onSubmit={handleAddAdmin}>
        <TextField
          variant="filled"
          placeholder="Enter User's Email"
          color="success"
          type="email"
          focused
          name="name"
          onBlur={handleOnBlur}
        />{" "}
        <br />
        <br />
        <button
          variant="contained"
          style={{
            backgroundColor: "orange",
            padding: "10px 20px",
            border: "none",
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default MakeAdmin;
