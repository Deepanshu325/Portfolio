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

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://portfoliobackend-po5r.onrender.com/send-email', formData); // Update with your backend URL
     
      
  toast.success("Message send sucessfully", {
  position: "top-center",
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "light",
});
    } catch (error) {
      alert('Error sending message');
      console.error(error);
    }
  };

  return (
    <main className="pt-28 pb-10 px-4">
      <form className="max-w-2xl mx-auto p-6 bg-white shadow-md text-black" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <label className="font-bold">First Name *</label>
            <input name="firstname" type="text" onChange={handleChange} className="w-full border-b border-gray-400" required />
          </div>
          <div className="flex-1">
            <label className="font-bold">Last Name *</label>
            <input name="lastname" type="text" onChange={handleChange} className="w-full border-b border-gray-400" required />
          </div>
        </div>
        <div className="mb-6">
          <label className="font-bold">Email *</label>
          <input name="gmail" type="email" onChange={handleChange} className="w-full border-b border-gray-400" required />
        </div>
        <div className="mb-6">
          <label className="font-bold">Message</label>
          <input name="message" type="text" onChange={handleChange} className="w-full border-b border-gray-400" />
        </div>
        <button type="submit" className="mt-4 px-4 py-2 rounded bg-purple-600 text-white shadow-md hover:bg-purple-700">
          Send
        </button>
      </form>
    </main>
  );
};

export default Contact;
