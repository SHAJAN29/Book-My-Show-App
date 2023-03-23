import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
export function Loginpage() {
  const navigate = useNavigate();
  const [status, setStatus] = useState("success");

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: { username: "", password: "" },
    onSubmit: async (value) => {
      console.log(value);
      const data = await fetch(
        "http://localhost:4000/bookingmovie/user-login",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(value),
        }
      );
      console.log(value);
      const result = await data.json();
      if (data.status === 400 && result.token === undefined) {
        setTimeout(() => {
          setStatus("error");
        }, 1000);
        console.log("errorrrrr");
      } else if (result.token) {
        setStatus("success");
        console.log(result);
        localStorage.setItem("token", result.token);
        navigate("/Movies");
      }
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit} className="loginForm">
        <h1>Login Page</h1>

        <TextField
          id="outlined-basic"
          label="UserName"
          value={values.username}
          variant="outlined"
          onChange={handleChange}
          name="username"
        />

        <TextField
          id="outlined-basic"
          type="password"
          value={values.password}
          onChange={handleChange}
          name="password"
          label="Password"
          variant="outlined"
        />
        <Button color={status} variant="contained" type="submit">
          {status === "success" ? "Login" : "retry"}
        </Button>
      </form>
    </div>
  );
}
