import React, { useState } from 'react';
import { supabase, signUpUser } from '../Pages/admin';
import '../css/CreateAcc.css';

function CreateAcc() {
  const [formData, setFormData] = useState({ Fullname: '', Username: '', Email: '', Password: '' });
  const [errors, setErrors] = useState({});

  function validateForm() {
    const newErrors = {};

    if (!formData.Fullname.trim()) {
      newErrors.Fullname = 'Fullname is required';
    }

    if (!formData.Username.trim()) {
      newErrors.Username = 'Username is required';
    }

    if (!formData.Email.trim()) {
      newErrors.Email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.Email)) {
      newErrors.Email = 'Email is invalid';
    }

    if (!formData.Password.trim()) {
      newErrors.Password = 'Password is required';
    } else if (formData.Password.length < 6) {
      newErrors.Password = 'Password must be at least 6 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleChange(event) {
    setFormData((prevFormData) => ({ ...prevFormData, [event.target.name]: event.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email: formData.Email,
        password: formData.Password,
        options: {
          data: { Fullname: formData.Fullname, Username: formData.Username },
        },
      });

      if (signUpError) throw signUpError;
      console.log('Sign up data:', signUpData);

      const insertData = await signUpUser(formData);

      console.log('Inserted data:', insertData);
      alert('Check your email for the verification link.');
    } catch (error) {
      console.error('Error:', error);
      alert(`Error: ${error.message || 'An unexpected error occurred'}`);
    }
  }

  return (
    <div className="CreateAcc-container">
      <div className="logo-container">
        <img src="/HalalSpots LOGO.png" alt="HalalSpots Logo" className="logo" />
      </div>

      <div className="CreateAcc-form">
        <h2>Administrator</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container-createacc-fullname">
            <input
              type="text"
              name="Fullname"
              placeholder="Fullname"
              value={formData.Fullname}
              onChange={handleChange}
              required
            />
            {errors.Fullname && <p className="error">{errors.Fullname}</p>}
          </div>
          <div className="input-container-createacc-Username">
            <input
              type="text"
              name="Username"
              placeholder="Username"
              value={formData.Username}
              onChange={handleChange}
              required
            />
            {errors.Username && <p className="error">{errors.Username}</p>}
          </div>
          <div className="input-container-createacc-Email">
            <input
              type="email"
              name="Email"
              placeholder="Email"
              value={formData.Email}
              onChange={handleChange}
              required
            />
            {errors.Email && <p className="error">{errors.Email}</p>}
          </div>
          <div className="input-container-createacc-Password">
            <input
              type="password"
              name="Password"
              placeholder="Password"
              value={formData.Password}
              onChange={handleChange}
              required
            />
            {errors.Password && <p className="error">{errors.Password}</p>}
          </div>
          <button type="submit" className="create-account-createacc-button">Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default CreateAcc;
