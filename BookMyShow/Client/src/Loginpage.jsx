import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";

import { useNavigate } from "react-router-dom";
export function Loginpage() {
  const navigate = useNavigate();

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: { username: "20", password: "20" },
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
      if (data.status === 401) {
        console.log("errorrrrr");
      } else {
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
        <Button variant="contained" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
