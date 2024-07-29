import React, { useState } from 'react';
import '../css/resetpass.css'; // Update the path if necessary

function Resetpass() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="login-container-reset">
      <div className="logo-container-reset">
        <img src="/HalalSpots LOGO.png" alt="HalalSpots Logo" className="logo-reset" />
      </div>

      <div className="login-form-reset">
        <h2>Administrator</h2>
        <h3>RESET PASSWORD</h3>
        <div className="password-container-reset">
          <div className="input-container-reset">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="password-input-reset"
            />
            <span className="toggle-password-reset" onClick={togglePasswordVisibility}>
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>
          <div className="input-container-reset">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="password-input-reset"
            />
            <span className="toggle-password-reset" onClick={toggleConfirmPasswordVisibility}>
              {showConfirmPassword ? '🙈' : '👁️'}
            </span>
          </div>
        </div>
        <button type="submit" className="submit-password-button-reset">Submit</button>
      </div>
    </div>
  );
}

export default Resetpass;
