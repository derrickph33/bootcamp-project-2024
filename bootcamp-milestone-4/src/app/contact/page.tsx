"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from 'emailjs-com';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface Status {
  loading: boolean;
  success: string;
  error: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<Status>({
    loading: false,
    success: '',
    error: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const validateForm = (): boolean => {
    const { name, email, message } = formData;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ loading: false, success: '', error: 'All fields are required.' });
      return false;
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setStatus({ loading: false, success: '', error: 'Please enter a valid email address.' });
      return false;
    }
    return true;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus({ loading: false, success: '', error: '' });

    if (!validateForm()) return;

    setStatus({ loading: true, success: '', error: '' });

    const serviceID = 'service_4z5b52l';
    const templateID = 'template_uj1wfc9';
    const userID = 'TH2_KuapxhIQLKi1q';

    const templateParams = {
      to_name: 'Derrick Phan', 
      from_name: formData.name,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus({
          loading: false,
          success: 'Your message has been sent successfully!',
          error: '',
        });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err: { message: string }) => {
        console.error('FAILED...', err);
        setStatus({
          loading: false,
          success: '',
          error: err.message || 'Failed to send the message. Please try again later.',
        });
      });
  };

  return (
    <>
      <main className="px-5 pt-5 pb-5">
        <h1 className="text-5xl font-bold text-center mb-5">Contact Me</h1>
        <h2 className="text-2xl text-center mb-5">Please leave your contacts and message and I would love to respond and get to know you!</h2>
        
        <form
          id="contact-form"
          className="flex flex-col items-center gap-4 w-full max-w-md mx-auto"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            id="name"
            placeholder="Name:"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            id="email"
            placeholder="Email:"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          <textarea
            id="message"
            placeholder="Message:"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          ></textarea>
          
          {status.error && (
            <p className="text-red-500 text-center">{status.error}</p>
          )}
          
          {status.success && (
            <p className="text-green-500 text-center">{status.success}</p>
          )}
          
          <button
            type="submit"
            disabled={status.loading}
            className={`px-4 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors ${
              status.loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {status.loading ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </main>

      <footer className="footer text-center p-4 bg-gray-100">
        © 2024 Derrick Phan | All Rights Reserved
      </footer>
    </>
  );
};

export default ContactPage;