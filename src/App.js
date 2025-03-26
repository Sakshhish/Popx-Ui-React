import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Signup from "./Signup"; // Import Signup from separate file

const Home = () => (
  <div className="container">
    <h2>Welcome to PopX</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <Link to="/signup" className="btn">Create Account</Link>
    <div className="spacer" style={{ marginBottom: "20px" }}></div>
    <Link to="/login" className="btn secondary">Already Registered? Login</Link>
  </div>
);

const Login = () => (
  <div className="container">
    <h2>Signin to your PopX account</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <label>Email Address</label>
    <input type="email" placeholder="Enter email address" />
    <label>Password</label>
    <input type="password" placeholder="Enter password" />
    <button className="btn">Login</button>
  </div>
);

const AccountSettings = () => (
  <div className="container">
    <h2>Account Settings</h2>
    <div className="profile">
      <img src="https://via.placeholder.com/50" alt="profile" />
      <div>
        <h3>Marry Doe</h3>
        <p>Marry@Gmail.Com</p>
      </div>
    </div>
    <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr...</p>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<AccountSettings />} />
      </Routes>
    </Router>
  );
}

export default App;
