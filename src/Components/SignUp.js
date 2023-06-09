import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [values, setValues] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const onhandleSubmit = (e) => {
    e.preventDefault();
    if (values.name === "" || values.email === "" || values.password === "") {
      setError("Fill all the fields");
    } else {
      setError("");
    }

    try {
      createUserWithEmailAndPassword(auth, values.email, values.password).then(
        async (res) => {
          const user = res.user;
          await updateProfile(user, {
            displayName: values.name,
          });
          console.log(user);
          alert("User Created successfully");
          navigate("/Login");
        }
      );
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          height: "90vh",
          width: "100vw",
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
          <h2>SignUp form</h2>
          <br></br>
          <div className="mb-3">
            <label for="exampleInputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              onChange={(event) =>
                setValues((prev) => ({ ...prev, name: event.target.value }))
              }
              aria-describedby="nameHelp"
            />
          </div>
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
            type="submit"
            onClick={onhandleSubmit}
            className="btn btn-secondary"
          >
            SignUp Here...
          </button>{" "}
          Already have an account <Link to="/Login">Login</Link>
        </form>
      </div>
    </>
  );
}

export default SignUp;
