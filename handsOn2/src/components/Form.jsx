import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    isChecked: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form Submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nPassword: ${formData.password}`);
  };

  return (
    <div
      className="h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="p-8 bg-white bg-opacity-80 rounded shadow-md w-full max-w-md"
      >
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="border px-4 py-2 w-full rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="border px-4 py-2 w-full rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="border px-4 py-2 w-full rounded"
          />
        </div>
        <div className="mb-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="isChecked"
              checked={formData.isChecked}
              onChange={handleChange}
              className="w-4 h-4"
            />
            <span>I agree to terms</span>
          </label>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
