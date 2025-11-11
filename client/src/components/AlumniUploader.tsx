import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function AlumniUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [form, setForm] = useState({
    name: "",
    gradYear: "",
    stream: "",
    company: "",
  });
  const [status, setStatus] = useState("");
  const [preview, setPreview] = useState("");

  const handleUpload = async () => {
    try {
      if (!file || !form.name) return alert("Please add name and image.");

      setStatus("Uploading...");

      // 1️⃣ Upload the image to Supabase storage
      const fileName = `${Date.now()}_${file.name.replace(/\s+/g, "_")}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("alumni")
        .upload(`photos/${fileName}`, file);

      if (uploadError) throw uploadError;

      // 2️⃣ Get the public URL
      const { data: publicUrlData } = supabase.storage
        .from("alumni")
        .getPublicUrl(`photos/${fileName}`);

      const imageUrl = publicUrlData.publicUrl;

      // 3️⃣ Insert into alumni_profiles table
      const { error: insertError } = await supabase
        .from("alumni_profiles")
        .insert({
          full_name: form.name,
          grad_year: form.gradYear ? parseInt(form.gradYear) : null,
          stream: form.stream || null,
          company: form.company || null,
          image_url: imageUrl,
        });

      if (insertError) throw insertError;

      setStatus("✅ Data saved successfully!");
      setPreview(imageUrl);
      setForm({ name: "", gradYear: "", stream: "", company: "" });
      setFile(null);
    } catch (err: any) {
      console.error(err);
      setStatus(`❌ ${err.message}`);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 space-y-4 bg-white/10 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold text-center text-white">
        Add Alumni Profile
      </h2>

      <input
        type="text"
        placeholder="Full Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full border border-gray-300 rounded p-2"
      />

      <input
        type="number"
        placeholder="Graduation Year"
        value={form.gradYear}
        onChange={(e) => setForm({ ...form, gradYear: e.target.value })}
        className="w-full border border-gray-300 rounded p-2"
      />

      <input
        type="text"
        placeholder="Stream (Science / Commerce / Arts)"
        value={form.stream}
        onChange={(e) => setForm({ ...form, stream: e.target.value })}
        className="w-full border border-gray-300 rounded p-2"
      />

      <input
        type="text"
        placeholder="Current Company / Profession"
        value={form.company}
        onChange={(e) => setForm({ ...form, company: e.target.value })}
        className="w-full border border-gray-300 rounded p-2"
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
        className="w-full border border-gray-300 rounded p-2"
      />

      <button
        onClick={handleUpload}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
      >
        Upload & Save
      </button>

      {status && (
        <p
          className={`text-center ${
            status.startsWith("✅") ? "text-green-400" : "text-red-400"
          }`}
        >
          {status}
        </p>
      )}

      {preview && (
        <div className="text-center">
          <img
            src={preview}
            alt="Preview"
            className="w-40 h-40 object-cover rounded mx-auto mt-3 shadow-md"
          />
          <p className="text-gray-300 text-sm mt-1">(Preview)</p>
        </div>
      )}
    </div>
  );
}
