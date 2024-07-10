import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    dob: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    dob: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    const namePattern = /^[A-Za-z\s]+$/;
    const numberPattern = /^[0-9]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{7,}$/;

    if (!formData.firstName) {
      newErrors.firstName = "First Name is required";
    } else if (!namePattern.test(formData.firstName)) {
      newErrors.firstName = "Should contain only letters";
    }

    if (!formData.lastName) {
      newErrors.lastName = "Last Name is required";
    } else if (!namePattern.test(formData.lastName)) {
      newErrors.lastName = "Should contain only letters";
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone Number is required";
    } else if (!numberPattern.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Should contain only digits";
    }

    if (!formData.dob) {
      newErrors.dob = "Date of Birth is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Invalid Email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!/(?=.*[A-Z])/.test(formData.password)) {
      newErrors.password = "Password should contain at least one uppercase letter";
    } else if (!/(?=.*\d)/.test(formData.password)) {
      newErrors.password = "Password should contain at least one digit";
    } else if (formData.password.length < 7) {
      newErrors.password = "Password should be at least 7 characters long";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm your password";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted", formData);
      // Add your form submission logic here
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-600">
      <div className="bg-white rounded-lg shadow-lg text-left w-80">
        <h2 className="font-serif text-1xl mb-3 text-center mt-0.5 text-lg">
          SIGN UP
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="firstName" className="block text-sm font-bold mb-1 ml-2">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            placeholder="Your First Name"
            className="ml-2 mr-2 w-70 pl-3 border border-gray-300 rounded-md text-sm mb-3"
          />
          {errors.firstName && <div className="text-red-500 text-sm ml-2">{errors.firstName}</div>}

          <label htmlFor="lastName" className="block text-sm font-bold mb-1 ml-2">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            placeholder="Your Last Name"
            className="w-70 ml-2 mr-2 pl-3 border border-gray-300 rounded-md mb-3 text-sm"
          />
          {errors.lastName && <div className="text-red-500 text-sm ml-2">{errors.lastName}</div>}

          <label htmlFor="phoneNumber" className="block text-sm font-bold font-600 mb-1 ml-2">
            Phone Number:
          </label>
          <input
            type="tel"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            placeholder="Your Phone Number"
            className="ml-2 mr-2 w-70 pl-3 border border-gray-300 rounded-md mb-3 text-sm"
            pattern="\d{10}"
          />
          {errors.phoneNumber && <div className="text-red-500 text-sm ml-2">{errors.phoneNumber}</div>}

          <label htmlFor="dob" className="block text-sm font-bold mb-1 ml-2">
            Date Of Birth:
          </label>
          <input
            type="date"
            id="dob"
            value={formData.dob}
            onChange={handleChange}
            required
            className="ml-2 mr-2 w-70 pl-3 border border-gray-300 rounded-md mb-3 text-sm"
          />
          {errors.dob && <div className="text-red-500 text-sm ml-2">{errors.dob}</div>}

          <label htmlFor="email" className="block text-sm font-bold mb-1 ml-2">
            E-mail:
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your E-mail"
            className="w-70 ml-2 mr-2 pl-3 border border-gray-300 rounded-md mb-3 text-sm"
          />
          {errors.email && <div className="text-red-500 text-sm ml-2">{errors.email}</div>}

          <label htmlFor="password" className="block text-sm font-bold mb-1 ml-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Enter Your Password"
            className="ml-2 mr-2 w-70 pl-3 border border-gray-300 rounded-md mb-3 text-sm"
            minLength="6"
          />
          {errors.password && <div className="text-red-500 text-sm ml-2">{errors.password}</div>}

          <label htmlFor="confirmPassword" className="block text-sm font-bold mb-1 ml-2">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            placeholder="Confirm Your Password"
            className="w-70 pl-3 border border-gray-300 rounded-md mb-5 ml-2 mr-2 text-sm"
          />
          {errors.confirmPassword && <div className="text-red-500 text-sm ml-2">{errors.confirmPassword}</div>}

          <button
            type="submit"
            className="w-60 py-1 ml-9 mr-4 text-white bg-black rounded-md hover:bg-gray-800 mt-0"
          >
            SIGN UP
          </button>
        </form>
        <div className="text-center text-sm text-gray-600 mt-2 mb-1.5">
          Already a member?{" "}
          <Link
            to="/Login"
            className="text-indigo-600 hover:text-indigo-500 font-bold"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
