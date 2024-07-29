import React, { useState, useEffect } from 'react';
import { supabase } from '../Pages/admin';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';

function Login() {
  const [formData, setFormData] = useState({ Email: '', Password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleChange(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
        email: formData.Email,
        password: formData.Password,
      });

      if (signInError) throw signInError;

      // Check if the user is in the admin table
      const { data: adminData, error: adminError } = await supabase
        .from('admin')
        .select('*')
        .eq('Email', formData.Email);

      if (adminError) throw adminError;

      if (adminData.length === 0) {
        setError('You do not have admin privileges.');
        return;
      }

      console.log('Sign in data:', signInData);

      // Redirect to the dashboard upon successful login
      navigate('/dashboard');
    } catch (error) {
      console.error('Error:', error);
      setError(`Error: ${error.message || 'An unexpected error occurred'}`);
    }
  }

  // Track authentication state changes
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (session && event === 'SIGNED_IN') {
        navigate('/dashboard');
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [navigate]);

  return (
    <div className="login-container">
      <div className="logo-container">
        <img src="/HalalSpots LOGO.png" alt="HalalSpots Logo" className="logo" />
      </div>

      <div className="login-form">
        <h2>Administrator</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="email"
              name="Email"
              placeholder="Email"
              value={formData.Email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              name="Password"
              placeholder="Password"
              value={formData.Password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="forgot-password">
            <a href="/forgotpass">Forgot Password?</a>
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="login-button">Login</button>
        </form>
        <button className="create-account-button" onClick={() => navigate('/createacc')}>Create Account</button>
      </div>
    </div>
  );
}

export default Login;
