import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { applyJob } from "../services/jobApi";

function ApplyForm() {
  const { id } = useParams();
  const [form, setForm] = useState({ name: "", email: "", resume: "" });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await applyJob(id, form);
      setSuccess("Application submitted successfully!");
      setForm({ name: "", email: "", resume: "" });
      setError("");
    } catch {
      setError("Failed to submit application.");
      setSuccess("");
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Apply for Job</h1>
      {success && <p className="text-green-600 mb-2">{success}</p>}
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          required
        />
        <input
          type="text"
          name="resume"
          placeholder="Resume URL"
          value={form.resume}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          required
        />
        <button className="bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
          Submit Application
        </button>
      </form>
    </div>
  );
}

export default ApplyForm;
