import React, { useState } from 'react';
import Validations from '../component/Validations';
import axios from 'axios';
import '../CSS/style.css'
const TalentSignPage = () => {

  const initialState = {

    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: ""
  }

  const [values, setValues] = useState(initialState);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (values.firstName !== '' && values.lastName !== '' && values.username !== '' && values.email !== '' && values.password !== '') {

      axios.post('http://wren.in:3200/api/sign-up/fan', {
        firstName: values.firstName,
        lastName: values.lastName,
        username: values.username,
        email: values.email,
        password: values.password
      }).then(response => {
        console.log(`Posting data ${response.data}`);

        setValues(initialState);

        setErrors({});

        alert(`Data sent successfully`);

      })
        .catch(error => console.log(`Error: ${error}`));
    }
    else {
      setErrors(Validations(values));
    }

  }

  return (
    <React.Fragment>
      <form className="main-form">
      <h2 className="form-title">Create Your Fan Account</h2>
        <div className="form-detail">
          <div className="form-group">
            <label>First Name*</label>
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              name='firstName'
              onChange={handleChange}
              value={values.firstName}
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>
          <div className="form-group">
            <label>Last Name*</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              name='lastName'
              onChange={handleChange}
              value={values.lastName}
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>
          <div className="form-group">
            <label>Username*</label>
            <input
              type="text"
              className="form-control"
              placeholder="username"
              name='username'
              onChange={handleChange}
              value={values.username}
            />
            {errors.username && <p className="error">{errors.username}</p>}
          </div>
          <div className="form-group">
            <label>Email*</label>
            <input
              type="email"
              className="form-control"
              placeholder="email"
              name='email'
              onChange={handleChange}
              value={values.email}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label>Password*</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name='password'
              onChange={handleChange}
              value={values.password}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div className="form-condition-check">
            <input  type="checkbox" />
            <label className="form-condition">
              I agree to the <span>Terms and Conditions</span>
            </label>
          </div>
          <div className="submit-btn">
            <button type="submit" className="button" onClick={handleFormSubmit}>
              SIGN UP
            </button>
          </div>
        </div>
      </form>

    </React.Fragment>
  )
}

export default TalentSignPage;