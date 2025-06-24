"use client";

import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess('Your message has been sent!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setError(data.message || 'Something went wrong.');
      }
    } catch (err) {
      setError('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-400 mb-8">
          I'm currently open to new opportunities. <br />
          If you have a project in mind, or just want to say hi, feel free to reach out!
        </p>
      </div>
      <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
        <div className="mb-4">
          <input type="text" id="name" placeholder="Your Name" value={form.name} onChange={handleChange} className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500" required />
        </div>
        <div className="mb-4">
          <input type="email" id="email" placeholder="Your Email" value={form.email} onChange={handleChange} className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500" required />
        </div>
        <div className="mb-4">
          <textarea id="message" rows={5} placeholder="Your Message" value={form.message} onChange={handleChange} className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500" required></textarea>
        </div>
        {success && <p className="text-green-400 text-center mb-4">{success}</p>}
        {error && <p className="text-red-400 text-center mb-4">{error}</p>}
        <div className="text-center">
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact; 