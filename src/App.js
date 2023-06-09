import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
// import Dashboard from "./Dashboard";
import SignUp from "./Components/SignUp";
import Home from "./Components/Home";
import Dashboard from "./Dashboard";
import Profile from "./Components/Profile";

const App = () => {
  return (
    <>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand">
            <Profile /> Welcome
          </a>
          <form class="d-flex">
            <ul class="nav justify-content-end">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Login">
                  Login
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Signup">
                  SignUp{" "}
                </a>
              </li>
            </ul>
          </form>
        </div>
      </nav>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Signup" element={<SignUp />} />
          <Route exact path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
