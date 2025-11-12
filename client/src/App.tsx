import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import AboutUsPage from "@/pages/AboutUsPage";
import LifeAtMVAPage from "@/pages/LifeAtMVAPage";
import AcademicsPage from "@/pages/AcademicsPage";
import AdmissionsPage from "@/pages/AdmissionsPage";
import AlumniPage from "@/pages/AlumniPage";
import AlumniFormPage from "@/pages/AlumniFormPage";
import AchievementsPage from "@/pages/AchievementsPage";
import CareersPage from "@/pages/CareersPage";
import BlogsPage from "@/pages/BlogsPage";
import ContactPage from "@/pages/ContactPage";
import StudentAdmissionForm from "./pages/StudentAdmissionForm";
import AlumniConnectPage from "./pages/AlumniConnectPage";
import SportsCompetitionHighlights from "./pages/SportsCompetitionHighlights";
import AdminBlogPage from "./pages/AdminBlogPage";
import AlumniAdmin from "./pages/AlumniAdmin";
declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_LoadStart?: Date;
  }
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about/:section?" element={<AboutUsPage />} />
      <Route path="/life-at-mva/:category?/:subcategory?" element={<LifeAtMVAPage />} />
      <Route path="/academics/:section?" element={<AcademicsPage />} />
      <Route path="/admissions/:section?" element={<AdmissionsPage />} />
      {/* <Route path="/alumni/:section?" element={<AlumniPage />} /> */}
      <Route path="/alumni" element={<AlumniPage />} />
        <Route path="/admin" element={<AlumniAdmin />} />

      <Route path="/alumni/form" element={<AlumniFormPage />} />
      <Route path="/achievements/:category?/:subcategory?" element={<AchievementsPage />} />
      <Route path="/careers/:section?" element={<CareersPage />} />
      <Route path="/blogs/:category?" element={<BlogsPage />} />
      <Route path="/admin/blogs" element={<AdminBlogPage />} />

      <Route path="/contact" element={<ContactPage />} />
      <Route path="/studentAdmissionForm" element={<StudentAdmissionForm />} />
      <Route path="/alumni/connect" element={<AlumniConnectPage />} />
      <Route path="/sports-competition-highlights" element={<SportsCompetitionHighlights />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  useEffect(() => {
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();
    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/690c2a1f418b98195b551879/1j9bo931n";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode?.insertBefore(s1, s0);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
              <AppRoutes />
            </main>
            <Footer />
          </div>

          {/* ✅ Floating WhatsApp Icon */}
          <a
            href="https://wa.me/919302511111"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="fixed bottom-24 right-6 bg-green-500 text-white rounded-full p-4 shadow-lg hover:scale-110 transition-transform duration-300 z-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-7 h-7"
            >
              <path d="M20.52 3.48A11.91 11.91 0 0012 0C5.37 0 0 5.37 0 12a11.89 11.89 0 001.63 6L0 24l6.18-1.62A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12a11.91 11.91 0 00-3.48-8.52zM12 22a9.94 9.94 0 01-5.06-1.36l-.36-.21-3.67.96.98-3.57-.23-.37A9.93 9.93 0 012 12C2 6.48 6.48 2 12 2a9.94 9.94 0 017.07 2.93A9.94 9.94 0 0122 12c0 5.52-4.48 10-10 10zm5.12-7.65c-.28-.14-1.63-.8-1.88-.89s-.44-.14-.63.14-.72.89-.89 1.07-.33.21-.61.07a8.12 8.12 0 01-2.39-1.47A9.15 9.15 0 019.7 11c-.16-.28 0-.43.12-.57s.28-.33.42-.5.19-.28.28-.47.05-.36-.02-.5c-.07-.14-.63-1.52-.86-2.08s-.46-.48-.63-.49-.36 0-.55 0a1.07 1.07 0 00-.77.36 3.22 3.22 0 00-1 2.39 5.59 5.59 0 001.16 3.01 12.83 12.83 0 004.93 4.68 10.69 10.69 0 002.7 1 .79.79 0 00.83-.49c.1-.14.1-.35.07-.49s-.28-.49-.56-.63z" />
            </svg>
          </a>
        </BrowserRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;