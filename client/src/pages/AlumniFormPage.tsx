import AlumniForm from "../components/AlumniForm";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function AlumniFormPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-muted/30 flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-2xl border border-primary/20 p-6 md:p-10 relative overflow-hidden">
        {/* Top decorative bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-[#0055A4]" />

        {/* Back Button */}
        <button
          onClick={() => navigate("/alumni")}
          className="mb-8 flex items-center gap-2 text-primary font-semibold hover:text-primary/90 transition-all"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Alumni
        </button>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
          Alumni Information Form
        </h1>
        <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
          Please submit your details below — our team will reach out to you soon to reconnect and share exciting alumni updates.
        </p>

        {/* Form */}
        <div className="relative z-10">
          <AlumniForm />
        </div>

        {/* Bottom decorative bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#0055A4] to-primary" />
      </div>
    </div>
  );
}
