


import AlumniForm from "../components/AlumniForm";
import { useNavigate } from "react-router-dom";

export default function AlumniFormPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-muted/30 flex flex-col items-center py-8 px-2">
      <div
        className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-4 md:p-8 flex flex-col"
        style={{ minHeight: '70vh', maxHeight: '900px', overflowY: 'auto' }}
      >
        <button
          onClick={() => navigate('/alumni')}
          className="mb-6 px-4 py-2 bg-primary text-white rounded font-semibold hover:bg-primary/90 transition-all self-start"
        >
          ← Back to Alumni
        </button>
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 text-primary">
          Hello, please submit your details below and our team will reach out to you as soon as possible.
        </h1>
        <AlumniForm />
      </div>
    </div>
  );
}
