import React, { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: '',
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.phone) newErrors.phone = 'Phone is required';
    if (!form.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!form.message) newErrors.message = 'Please share what brings you here';
    if (!form.preferredTime) newErrors.preferredTime = 'Preferred time is required';
    if (!form.agree) newErrors.agree = 'You must agree to be contacted';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', form);
      // Submit logic here
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white border border-green-900 rounded-lg p-8 shadow-sm space-y-5"
    >
      <h2 className="text-2xl font-semibold text-green-900 text-center mb-1">Get In Touch</h2>
      <p className="text-center text-gray-700 text-sm mb-4">
        Simply fill out the brief fields below. This form is safe, private, and completely free.
      </p>

      {/* Name */}
      <div>
        <label className="block text-green-900">Name</label>
        <input
          type="text"
          name="name"
          vaChange={handleChange}
            className="w-full mt-1 p-2 border border-green-800 rounded focus:outline-none focus:ring text-green-900 placeholder:text-gray-400"
          placeholder="Your full name"
        />lue={form.name}
          on
        {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-green-900">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
            className="w-full mt-1 p-2 border border-green-800 rounded focus:outline-none focus:ring text-green-900 placeholder:text-gray-400"
          placeholder="you@example.com"
        />
        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-green-900">Phone</label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
           className="w-full mt-1 p-2 border border-green-800 rounded focus:outline-none focus:ring text-green-900 placeholder:text-gray-400"
          placeholder="(555) 234-5678"
        />
        {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
      </div>

      {/* Message */}
      <div>
        <label className="block text-green-900">What brings you here?</label>
       <textarea
  name="message"
  value={form.message}
  onChange={handleChange}
  rows={3}
  className="w-full mt-1 p-2 border border-green-800 rounded focus:outline-none focus:ring text-green-900"
  placeholder="How can we help you?"
/>

        {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
      </div>

      {/* Preferred Contact Time */}
      <div>
        <label className="block text-green-900">Preferred time to reach you</label>
        <input
  type="text"
  name="preferredTime"
  value={form.preferredTime}
  onChange={handleChange}
  className="w-full mt-1 p-2 border border-green-800 rounded focus:outline-none focus:ring text-green-900 placeholder:text-gray-400"
  placeholder="e.g., Mornings, Afternoons"
/>

        {errors.preferredTime && <p className="text-red-600 text-sm mt-1">{errors.preferredTime}</p>}
      </div>

      {/* Consent */}
      <div className="flex items-start space-x-2">
        <input
          type="checkbox"
          name="agree"
          checked={form.agree}
          onChange={handleChange}
          className="mt-1"
        />
        <label className="text-sm text-green-900">
          I agree to be contacted
        </label>
      </div>
      {errors.agree && <p className="text-red-600 text-sm">{errors.agree}</p>}

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-green-900 text-white py-2 px-4 rounded hover:bg-green-800 transition"
      >
        Submit
      </button>

    
  <p className="text-xs text-center text-gray-600 mt-2">
  ⓘ By clicking submit, you consent to be contacted by Dr. Serena Blake.
</p>



    </form>
  );
}
