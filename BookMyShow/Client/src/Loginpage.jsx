import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
export function Loginpage() {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: { UserName: "20", Password: "20" },
    onSubmit: (value) => {
      console.log(value);
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit} className="loginForm">
        <h1>Login Page</h1>

        <TextField
          id="outlined-basic"
          label="UserName"
          value={values.UserName}
          variant="outlined"
          onChange={handleChange}
          name="UserName"
        />

        <TextField
          id="outlined-basic"
          type="password"
          value={values.Password}
          onChange={handleChange}
          name="Password"
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
