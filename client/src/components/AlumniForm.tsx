import React, { useState } from "react";

const AlumniForm: React.FC = () => {
  const [form, setForm] = useState({
    studentName: "",
    email: "",
    college: "",
    passingYear: "",
    alumniContact: "",
    currentLocation: "",
    currentOrg: "",
    qualification: "",
    branch: "",
    image: null as File | null,
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, files } = e.target as any;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // TODO: handle form submission (API call)
    setTimeout(() => setSubmitting(false), 1500);
  };

  return (
    <form
      className="w-full max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-4"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      style={{ boxSizing: 'border-box' }}
    >
      <div className="flex flex-col">
        <label className="font-semibold mb-1">STUDENT NAME*</label>
        <input
          name="studentName"
          required
          value={form.studentName}
          onChange={handleChange}
          className="input input-bordered rounded px-3 py-2 border border-gray-300 focus:outline-primary"
        />
      </div>
      <div className="flex flex-col">
        <label className="font-semibold mb-1">EMAIL*</label>
        <input
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          className="input input-bordered rounded px-3 py-2 border border-gray-300 focus:outline-primary"
        />
      </div>
      <div className="flex flex-col">
        <label className="font-semibold mb-1">COLLEGE*</label>
        <input
          name="college"
          required
          value={form.college}
          onChange={handleChange}
          className="input input-bordered rounded px-3 py-2 border border-gray-300 focus:outline-primary"
        />
      </div>
      <div className="flex flex-col">
        <label className="font-semibold mb-1">PASSING YEAR*</label>
        <select
          name="passingYear"
          required
          value={form.passingYear}
          onChange={handleChange}
          className="input input-bordered rounded px-3 py-1 border border-gray-300 focus:outline-primary text-sm w-36"
          style={{ minWidth: '120px', maxWidth: '150px' }}
        >
          <option value="">Select Year Passing</option>
          {Array.from({ length: 30 }, (_, i) => 2025 - i).map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col">
        <label className="font-semibold mb-1">ALUMNI CONTACT NO.*</label>
        <input
          name="alumniContact"
          required
          value={form.alumniContact}
          onChange={handleChange}
          className="input input-bordered rounded px-3 py-2 border border-gray-300 focus:outline-primary"
        />
      </div>
      <div className="flex flex-col">
        <label className="font-semibold mb-1">CURRENT LOCATION*</label>
        <input
          name="currentLocation"
          required
          value={form.currentLocation}
          onChange={handleChange}
          className="input input-bordered rounded px-3 py-2 border border-gray-300 focus:outline-primary"
        />
      </div>
      <div className="flex flex-col">
        <label className="font-semibold mb-1">CURRENT ORGANIZATION*</label>
        <input
          name="currentOrg"
          required
          value={form.currentOrg}
          onChange={handleChange}
          className="input input-bordered rounded px-3 py-2 border border-gray-300 focus:outline-primary"
        />
      </div>
      <div className="flex flex-col">
        <label className="font-semibold mb-1">QUALIFICATION HELD*</label>
        <input
          name="qualification"
          required
          value={form.qualification}
          onChange={handleChange}
          className="input input-bordered rounded px-3 py-2 border border-gray-300 focus:outline-primary"
        />
      </div>
      <div className="flex flex-col md:col-span-2">
        <label className="font-semibold mb-1">BRANCH*</label>
        <input
          name="branch"
          required
          value={form.branch}
          onChange={handleChange}
          className="input input-bordered rounded px-3 py-2 border border-gray-300 focus:outline-primary"
        />
      </div>
      <div className="flex flex-col md:col-span-2">
        <label className="font-semibold mb-1">UPLOAD IMAGE*</label>
        <input
          name="image"
          type="file"
          accept="image/*"
          required
          onChange={handleChange}
          className="input input-bordered rounded px-3 py-2 border border-gray-300 focus:outline-primary"
        />
      </div>
      <div className="md:col-span-2 flex justify-center mt-4">
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-8 rounded transition-all w-full md:w-auto"
          disabled={submitting}
        >
          {submitting ? "Submitting..." : "SUBMIT"}
        </button>
      </div>
    </form>
  );
};

export default AlumniForm;
