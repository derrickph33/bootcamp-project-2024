
import React from 'react';

export default function ContactPage() {
  return (
    <>
      <main className="px-5 pt-5 pb-5">
        <h1 className="text-5xl font-bold text-center mb-5">Contact Me</h1>
        <h2 className="text-2xl text-center mb-5">Please leave your contact and I would love to get to know you!</h2>
        
        <form id="contact-form" className="flex flex-col items-center gap-4 w-full max-w-md mx-auto">
          <input
            type="text"
            id="name"
            placeholder="Name:"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            id="email"
            placeholder="Email:"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          <textarea
            id="message"
            placeholder="Message:"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          ></textarea>
          <input
            type="submit"
            value="Submit"
            className="px-4 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors"
          />
        </form>
      </main>

      <footer className="footer text-center p-4 bg-gray-100">
        © 2024 Derrick Phan | All Rights Reserved
      </footer>
    </>
  );
}