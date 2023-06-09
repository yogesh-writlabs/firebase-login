import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export default function Login() {
  const [values, setValues] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();
    if (values.name === "" || values.email === "" || values.password === "") {
      setError("Fill all the fields");
    } else {
      setError("");
    }

    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        console.log(res);
        alert("User Logined successfully");
        navigate("/Dashboard");
      })
      .catch((error) => alert(error));
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          height: "90vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <form
          style={{
            padding: "20px",
            border: "2px solid black",
            borderRadius: "30px",
            backgroundColor: "lightgray",
          }}
        >
          <h2>Login form</h2>
          <br></br>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, email: event.target.value }))
              }
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, password: event.target.value }))
              }
            />
          </div>
          <div className="mb-3 form-check">{error}</div>
          <button
            style={{ marginRight: "30px" }}
            type="submit"
            className="btn btn-secondary"
            onClick={onhandleSubmit}
          >
            Submit
          </button>
          New User <Link to="/Signup">SignUp Here..</Link>
        </form>
      </div>
    </>
  );
}
