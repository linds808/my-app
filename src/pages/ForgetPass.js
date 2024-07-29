import React from 'react';
import '../css/forgetpass.css';

function ForgetPass() {
  return (
    <div className="login-container-forgetpass">
      <div className="logo-container-forgetpass">
        <img src="/HalalSpots LOGO.png" alt="HalalSpots Logo" className="logo-forgetpass" />
      </div>

      <div className="login-form-forgetpass">
        <h2>Administrator</h2>

        <div className="please-enter">
          <h3>Please enter your email for password recovery. <br/>
       We’ll send a link to your register email for you to reset your password.</h3>
        </div>

        <form>
          <div className="input-container-forgetpass">
            <input type="email" className="Email-input"placeholder="email@gmail.com" required />
          </div>

          <div className="e">
          <h3>Email</h3>
        </div>

          <button type="submit" className="submit-email-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ForgetPass;
