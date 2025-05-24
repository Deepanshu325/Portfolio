import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    gmail: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.post('https://portfoliobackend-po5r.onrender.com/send-email', formData);

      toast.success("Message sent successfully", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });

      setFormData({
        firstname: '',
        lastname: '',
        gmail: '',
        message: '',
      });
    } catch (error) {
      alert('Error sending message');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="pt-28 pb-10 px-4 min-h-[82vh] grid place-items-center relative">
      {isLoading && (
        <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center z-50">
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <form
        className="max-w-2xl mx-auto p-6 bg-white shadow-md text-black w-full"
        onSubmit={handleSubmit}    data-aos="fade-right"
      >
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <label className="font-bold">First Name *</label>
            <input
              name="firstname"
              type="text"
              value={formData.firstname}
              onChange={handleChange}
              className="w-full border-b border-gray-400 text-black"
              required
            />
          </div>
          <div className="flex-1">
            <label className="font-bold">Last Name *</label>
            <input
              name="lastname"
              type="text"
              value={formData.lastname}
              onChange={handleChange}
              className="w-full border-b border-gray-400 text-black"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="font-bold">Email *</label>
          <input
            name="gmail"
            type="email"
            value={formData.gmail}
            onChange={handleChange}
            className="w-full border-b border-gray-400 text-black"
            required
          />
        </div>
        <div className="mb-6">
          <label className="font-bold">Message</label>
          <input
            name="message"
            type="text"
            value={formData.message}
            onChange={handleChange}
            className="w-full border-b border-gray-400 text-black"
          />
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 rounded bg-purple-600 text-white shadow-md hover:bg-purple-700 disabled:opacity-50"
          disabled={isLoading}
        >
          Send
        </button>
      </form>
    </main>
  );
};

export default Contact;
