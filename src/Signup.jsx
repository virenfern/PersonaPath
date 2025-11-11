import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

export default function Signup() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const goHome = () => navigate('/', { replace: true });
  const goToLanding = () => navigate('/landing_test', { replace: true });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: add validation and API call later
    goToLanding();
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-left">
          <button type="button" className="back-btn" onClick={goHome}>
            ← Back
          </button>

          <h1>SIGN UP</h1>
          <hr className="divider" />

          <form className="auth-form" onSubmit={handleSubmit}>
            <input
              className="auth-input"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="auth-input"
              name="email"
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="auth-input"
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="auth-input"
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button className="auth-btn" type="submit">
              Sign Up
            </button>
          </form>
        </div>

        <div className="auth-right">
          <img
            className="auth-illustration"
            src="https://via.placeholder.com/420x300?text=Illustration"
            alt="illustration placeholder"
          />
        </div>
      </div>
    </div>
  );
}