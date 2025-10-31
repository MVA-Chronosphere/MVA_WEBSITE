import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import NotFound from "@/pages/not-found";
import StudentAdmissionForm from "./pages/StudentAdmissionForm";
import AlumniConnectPage from "./pages/AlumniConnectPage";
import { Navigate } from "react-router-dom";


function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about/:section?" element={<AboutUsPage />} />
      <Route path="/life-at-mva/:category?/:subcategory?" element={<LifeAtMVAPage />} />
      <Route path="/academics/:section?" element={<AcademicsPage />} />
      <Route path="/admissions/:section?" element={<AdmissionsPage />} />
  <Route path="/alumni/:section?" element={<AlumniPage />} />
  <Route path="/alumni/form" element={<AlumniFormPage />} />
      <Route path="/achievements/:category?/:subcategory?" element={<AchievementsPage />} />
      <Route path="/careers/:section?" element={<CareersPage />} />
      <Route path="/blogs/:category?" element={<BlogsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/studentAdmissionForm" element={<StudentAdmissionForm />} />
      <Route path="/alumni/connect" element={<AlumniConnectPage />} />
      {/* <Route path="*" element={<NotFound />} /> */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>
        </BrowserRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
