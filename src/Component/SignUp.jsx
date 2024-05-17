import React, { useState } from 'react';
import { FaLinkedin, FaGoogle, FaFacebook } from 'react-icons/fa';

const SignUp = () => {
  const url = process.env.PUBLIC_URL + '/images/left.PNG';
  const urllogo = process.env.PUBLIC_URL + '/images/logo.PNG';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '50px auto',
    border: '03px solid rgb(255 205 41)',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '700px',
  };

  const imageStyle = {
    width: '350px',
    height: '500px',
    marginRight: '20px',
    border: '1px solid #ccc',
  };

  const logoStyle = {
    width: '50px',
    height: 'auto',
    marginRight: '20px',
  };

  const formContainerStyle = {
    width: '350px',
    height: '500px',
    marginRight:"20px"
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '20px',
  };

  const formGroupStyle = {
    marginBottom: '15px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
    borderRadius:"10px"
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: 'rgb(115 137 93)',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const buttonHoverStyle = {
    backgroundColor: "rgb(115 137 93)",
  };

  const socialContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  };

  const socialButtonStyle = {
    margin: '0 10px',
    cursor: 'pointer',
    fontSize: '24px',
    color: '#555',
  };
  const foterStyle = {
    color: "rgb(115 137 93)",
    fontWeight:"700"
  }
  return (
    <div style={containerStyle}>
      <img src={url} alt="Sign Up" style={imageStyle} />
      <div style={formContainerStyle}>
        <img src={urllogo} alt="Sign Up" style={logoStyle} />
        <h2 style={headerStyle}>Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div style={formGroupStyle}>
            <label htmlFor="name" style={labelStyle}>FUll Name</label>
            <input
            placeholder={' 🙍🏻‍♂️ Enter Full Name'}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="email" style={labelStyle}>Email</label>
            <input
             placeholder='✉︎ Enter Your Email'
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="password" style={labelStyle}>Password</label>
            <input
             placeholder='ⓘ Enter Your Password'
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
          <button
            type="submit"
            style={{ ...buttonStyle, ':hover': buttonHoverStyle }}
          >
            Sign Up
          </button>
        </form>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>or</div>
        <div style={socialContainerStyle}>
          <FaLinkedin style={socialButtonStyle} />
          <FaGoogle style={socialButtonStyle} />
          <FaFacebook style={socialButtonStyle} />
        </div>
        <p>Already have an Account? <b style={{foterStyle}}>Login</b></p>
      </div>
    </div>
  );
};

export default SignUp;
