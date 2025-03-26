import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: "yes",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData)); // Save user details
    navigate("/account"); // Redirect to account settings page
  };

  return (
    <div className="container">
      <h2>Create your PopX account</h2>
      <form onSubmit={handleSubmit}>
        <label>Full Name*</label>
        <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} required />

        <label>Phone number*</label>
        <input type="text" name="phoneNumber" placeholder="Phone number" onChange={handleChange} required />

        <label>Email address*</label>
        <input type="email" name="email" placeholder="Email address" onChange={handleChange} required />

        <label>Password*</label>
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />

        <label>Company name</label>
        <input type="text" name="companyName" placeholder="Company name" onChange={handleChange} />

        <p>Are you an Agency?</p>
        <label>
          <input type="radio" name="isAgency" value="yes" checked={formData.isAgency === "yes"} onChange={handleChange} /> Yes
        </label>
        <label>
          <input type="radio" name="isAgency" value="no" checked={formData.isAgency === "no"} onChange={handleChange} /> No
        </label>

        <button className="btn" type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default Signup;
