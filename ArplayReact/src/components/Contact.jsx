import React, { useState } from 'react';
import '../Styles/form.css'

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.message) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert('Form submitted successfully');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
    <h1 className='text-center text-light mt-4'>Send a message</h1>
    <p className='text-center text-light mb-4'>Your opinion is important to us. Send us a message to tell us about your experience browsing the site.</p>
    <div className='form mt-5'>
    <form onSubmit={handleSubmit} className='main'>
    <h1>Login</h1>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <p className='error'>{errors.name}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <p className='error'>{errors.email}</p>}
      </div>
      <div>
        <label>Message:</label>
        <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
        {errors.message && <p className='error'>{errors.message}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
    </>
  );
}



export default Contact;
