// FileName: AdmissionsPage.tsx
import React, { useState } from "react";
import { ChevronDown, Download, Calendar, FileText, Users, ShieldCheck, Facebook, Twitter, Instagram, Mail } from "lucide-react";
import { useNavigate } from 'react-router-dom';

interface FAQ {
  q: string;
  a: string;
}

const AdmissionsPage: React.FC = () => {
  const navigate = useNavigate();

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Updated samplePapers array with new content
  const samplePapers = [
    { class: "IX", title: "IX Sample Paper - I", answerKey: "IX Sample Paper-I Answer Key" },
    { class: "X", title: "X Sample Paper - I", answerKey: "X Sample Paper-I Answer Key" },
    { class: "XI", subject: "Mathematics", title: "XI Mathematics Sample Paper-I", answerKey: "XI Mathematics Sample Paper-I Answer Key" },
    { class: "XI", subject: "Biology", title: "XI Biology Sample Paper-I", answerKey: "XI Biology Sample Paper-I Answer Key" },
    { class: "XI", subject: "Commerce", title: "XI Commerce Sample Paper-I", answerKey: "XI Commerce Sample Paper-I Answer Key" }
  ];
  
  const faqs: FAQ[] = [
    {
      q: "Who can apply for admission?",
      a: "Students applying for Class 1 to 12.",
    },
    {
      q: "Is the Entrance Test compulsory?",
      a: "Yes - it helps us understand your potential.",
    },
    {
      q: "What if I don't register online?",
      a: "On-spot registration is allowed, but pre-registration saves you time and hassle.",
    },
    {
      q: "Are scholarships really offered?",
      a: "Absolutely. Top scorers in the Entrance Test are rewarded with fee concessions.",
    },
    {
      q: "How do I stay updated about next steps?",
      a: "Simple! Save these numbers in your phone: 9302511111 / 9300110033 / 7725044544. We'll send you all important alerts and reminders.",
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleStartApplication = () => {
    navigate('/studentAdmissionForm');
  };

  const handleRegisterNow = () => {
    navigate('/studentAdmissionForm');
  };

  const handleScheduleTour = () => {
    // Placeholder
  };

  return (
    <div 
      className="font-sans text-gray-800 min-h-screen"
      style={{
        // ✅ VISIBLE ILLUSTRATIONS: Darker blue, higher contrast
        backgroundImage: `
          /* Abstract curved shapes in corners */
          radial-gradient(circle at 0% 0%, rgba(147, 197, 253, 0.08) 0%, transparent 40%),
          radial-gradient(circle at 100% 100%, rgba(147, 197, 253, 0.08) 0%, transparent 40%),
          
          /* Geometric dot pattern - now clearly visible */
          url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2393c5fd' fill-opacity='0.08'/%3E%3C/svg%3E")
        `,
        backgroundSize: 'cover, cover, 80px 80px',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat, no-repeat, repeat',
      }}
    >
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-800 text-white">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-700 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-700 rounded-full translate-x-1/2 translate-y-1/2 opacity-20"></div>
          <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-blue-600 rounded-lg rotate-45 opacity-10"></div>
        </div>
        
        <div className="relative z-10 px-4 py-24 md:py-32 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Step into a world of <span className="text-blue-300">growth, learning, and achievement</span> with the Macro Vision Academy
              </h1>
              <p className="text-xl md:text-2xl max-w-2xl mb-10 leading-relaxed opacity-90">
                Join our vibrant learning community for the 2026 academic year. Experience holistic education with world-class facilities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <button 
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                  onClick={handleRegisterNow}
                >
                  <Calendar className="w-5 h-5" />
                  Register Now
                </button>
                <button 
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  onClick={handleScheduleTour}
                >
                  Schedule a Tour
                </button>
              </div>
            </div>
            
            <div className="relative animate-fade-in-right">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="MVA_School.jpg" 
                  alt="School campus" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-70"></div>
              </div>
              
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500 rounded-lg rotate-12 shadow-lg animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-indigo-500 rounded-lg -rotate-12 shadow-lg animate-float animation-delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCEDURE SECTION */}
      <section className="py-20 px-4 md:px-20 bg-white" id="procedure">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Admission Procedure - Made Simple</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              Skip the stress and long queues! We've streamlined and crafted our process to get you from curious to campus-ready in no time.
            </p>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { 
                title: "Register Online", 
                desc: "Quick, easy, and queue-free", 
                icon: FileText 
              },
              { 
                title: "Mark Your Date", 
                desc: "4th January 2026 & 18th January 2026", 
                icon: Calendar 
              },
              { 
                title: "Show Up & Shine", 
                desc: "Walk straight into your test (pre-registered students skip lines)", 
                icon: Users 
              },
              { 
                title: "Get Your Results", 
                desc: "We'll connect with you personally", 
                icon: ShieldCheck 
              },
              { 
                title: "Secure Your Seat", 
                desc: "Finish formalities, submit documents, and you're in!", 
                icon: Calendar 
              }
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-lg hover:border-blue-300 transition-all duration-300 relative z-10"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-xl font-semibold text-blue-900 mb-4">Your future starts here - and it starts now.</p>
          </div>
        </div>
      </section>

      {/* ONLINE REGISTRATION SECTION */}
      <section className="py-20 px-4 md:px-20 bg-gray-50" id="registration">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Online Registration - Quick & Contactless</h2>
                <p className="text-gray-700 mb-6">
                  It takes less than 3 minutes. Here's how:
                </p>
                <ul className="space-y-2 text-gray-700 mb-8">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Visit our website or click the link we've shared</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Fill in your basic details</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Choose your preferred Entrance Test date</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Done! Confirmation will land right in your inbox</span>
                  </li>
                </ul>
                
                <div className="mb-6">
                  <p className="text-gray-700 mb-2"><strong>Questions? Just give us a ring:</strong></p>
                  <p className="text-blue-700 text-xl font-semibold">9302511111 / 9300110033 / 7725044544</p>
                  <p className="text-gray-600">We're just a call away</p>
                </div>
                
                <button 
                  className="bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105"
                  onClick={handleStartApplication}
                >
                  <FileText className="w-5 h-5" />
                  Start Application
                </button>
              </div>
              <div className="flex justify-center">
                <div className="bg-gray-100 border-2 border-dashed rounded-xl w-full h-80 flex items-center justify-center">
                  <img 
                    src="regesiterillustration.png" 
                    alt="Register illustration" 
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEE STRUCTURE SECTION */}
      <section className="py-20 px-4 md:px-20 bg-white" id="fee-structure">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Fee Structure - Value-Driven Education</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              We believe quality education should never be out of reach. Our fee plans are thoughtfully structured to give you maximum value.
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              <strong>Affordable tuition:</strong> Transparent breakdown - no hidden charges | Flexible payment plans (contact us for options)
            </p>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          {/* SCHOOL FEES TABLE */}
        <div className="mb-12 overflow-hidden rounded-2xl shadow-sm border border-gray-200">
  <div className="bg-blue-900 text-white p-4">
    <h3 className="text-xl font-semibold">Day Scholar - School Fee Structure</h3>
  </div>
  
  {/* Mobile responsive container */}
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white">
      <thead className="bg-gray-50 border-b">
        <tr>
          <th className="py-3 px-4 text-left font-medium text-gray-700 whitespace-nowrap min-w-[120px]">Class</th>
          <th className="py-3 px-4 text-left font-medium text-gray-700 whitespace-nowrap min-w-[140px]">Registration Fees</th>
          <th className="py-3 px-4 text-left font-medium text-gray-700 whitespace-nowrap min-w-[150px]">Annual School Fees</th>
          <th className="py-3 px-4 text-left font-medium text-gray-700 whitespace-nowrap min-w-[120px]">Remarks</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {[
          { class: "Class 1st", reg: "₹11,000", school: "₹90,000", remarks: "Non-refundable" },
          { class: "Class 2nd to 4th", reg: "₹11,000", school: "₹99,000", remarks: "Non-refundable" },
          { class: "Class 5th to 8th", reg: "₹11,000", school: "₹1,20,000", remarks: "Non-refundable" },
          { class: "Class 9th & 10th", reg: "₹11,000", school: "₹1,60,000", remarks: "Non-refundable" },
          { class: "Class 11th & 12th (Science)", reg: "₹11,000", school: "₹2,00,000", remarks: "Non-refundable" },
          { class: "Class 11th & 12th (Commerce)", reg: "₹11,000", school: "₹1,66,000", remarks: "Non-refundable" },
        ].map((item, i) => (
          <tr key={i} className={`hover:bg-blue-50 transition-colors ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
            <td className="py-3 px-4 font-medium text-blue-900 whitespace-nowrap min-w-[120px]">{item.class}</td>
            <td className="py-3 px-4 whitespace-nowrap min-w-[140px]">{item.reg}</td>
            <td className="py-3 px-4 whitespace-nowrap min-w-[150px]">{item.school}</td>
            <td className="py-3 px-4 text-gray-600 whitespace-nowrap min-w-[120px]">{item.remarks}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  
  <div className="bg-gray-100 p-4 text-sm text-gray-600">
    <p>Note: Registration fees are one-time and non-refundable. School fees are annual and may be payable in installments based on academy policies.</p>
  </div>
</div>

          {/* HOSTEL FEES TABLE */}
        <div className="mb-12 overflow-hidden rounded-2xl shadow-sm border border-gray-200">
  <div className="bg-blue-900 text-white p-4">
    <h3 className="text-xl font-semibold">Hostel Fee Structure</h3>
  </div>
  
  {/* Mobile responsive container */}
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white">
      <thead className="bg-gray-50 border-b">
        <tr>
          <th className="py-3 px-4 text-left font-medium text-gray-700 whitespace-nowrap min-w-[120px]">Class</th>
          <th className="py-3 px-4 text-left font-medium text-gray-700 whitespace-nowrap min-w-[140px]">Registration Fees</th>
          <th className="py-3 px-4 text-left font-medium text-gray-700 whitespace-nowrap min-w-[150px]">Annual Hostel Fees</th>
          <th className="py-3 px-4 text-left font-medium text-gray-700 whitespace-nowrap min-w-[150px]">Annual School Fees</th>
          <th className="py-3 px-4 text-left font-medium text-gray-700 whitespace-nowrap min-w-[120px]">Remarks</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {[
          { class: "Class 1st", reg: "₹11,000", hostel: "₹1,20,000", school: "₹90,000", remarks: "Non-refundable" },
          { class: "Class 2nd to 4th", reg: "₹11,000", hostel: "₹1,20,000", school: "₹99,000", remarks: "Non-refundable" },
          { class: "Class 5th to 8th", reg: "₹11,000", hostel: "₹1,20,000", school: "₹1,20,000", remarks: "Non-refundable" },
          { class: "Class 9th & 10th", reg: "₹11,000", hostel: "₹1,50,000", school: "₹1,60,000", remarks: "Non-refundable" },
          { class: "Class 11th & 12th (Science)", reg: "₹11,000", hostel: "₹1,50,000", school: "₹2,00,000", remarks: "Non-refundable" },
          { class: "Class 11th & 12th (Commerce)", reg: "₹11,000", hostel: "₹1,50,000", school: "₹1,66,000", remarks: "Non-refundable" },
        ].map((item, i) => (
          <tr key={i} className={`hover:bg-green-50 transition-colors ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
            <td className="py-3 px-4 font-medium text-green-900 whitespace-nowrap min-w-[120px]">{item.class}</td>
            <td className="py-3 px-4 whitespace-nowrap min-w-[140px]">{item.reg}</td>
            <td className="py-3 px-4 whitespace-nowrap min-w-[150px]">{item.hostel}</td>
            <td className="py-3 px-4 whitespace-nowrap min-w-[150px]">{item.school}</td>
            <td className="py-3 px-4 text-gray-600 whitespace-nowrap min-w-[120px]">{item.remarks}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  
  <div className="bg-gray-100 p-4 text-sm text-gray-600">
    <p>Note: Registration fees are one-time and non-refundable. Hostel fees include accommodation, meals, and other amenities. School fees are separate and annual.</p>
  </div>
</div>
          {/* CONTACT FOR MORE INFO */}
          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-4">
              Call our help desk now at <strong>9302511111</strong>, <strong>7725044544</strong> or <strong>9300110033</strong> - we'll walk you through it.
            </p>
            <button 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition-all duration-300"
              onClick={() => window.location.href = "#registration"} // or link to form
            >
              Click Here to Fill Online Registration Form
            </button>
          </div>
        </div>
      </section>

      {/* SAMPLE PAPERS SECTION */}
      <section className="py-20 px-4 md:px-20 bg-gray-50" id="sample-papers">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Sample Papers - Your Prep Power Tool</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              Nervous about the test? Don't be. We've got sample papers designed to help you walk in with confidence.
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              <strong>What You'll Get:</strong> Subject-specific practice (Maths, Science, English, Aptitude & more) | Past patterns + model questions | Tips on time management
            </p>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="text-center mb-12">
            <p className="text-gray-600 max-w-3xl mx-auto">
              Here you can find the sample papers for best help in your preparation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {samplePapers.map((paper, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 flex items-center"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <FileText className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-blue-900 mb-1">{paper.title}</h3>
                  <a
                    href="#"
                    className="text-blue-600 text-sm font-medium hover:underline"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`Downloading: ${paper.title}`);
                    }}
                  >
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* ANSWER KEYS ROW */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-blue-900 mb-6">Answer Keys</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {samplePapers.map((paper, i) => (
                <div
                  key={`key-${i}`}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 flex items-center"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <FileText className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-blue-900 mb-1">{paper.answerKey}</h3>
                    <a
                      href="#"
                      className="text-blue-600 text-sm font-medium hover:underline"
                      onClick={(e) => {
                        e.preventDefault();
                        alert(`Downloading: ${paper.answerKey}`);
                      }}
                    >
                      Download
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SYLLABUS SECTION */}
      <section className="py-20 px-4 md:px-20 bg-white" id="syllabus">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Entrance Examination Syllabus</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Download the official syllabus for entrance exams to know what topics to focus on.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Syllabus for Class 9th and 11th Entrance Examination 2025–26",
                link: "#"
              },
              {
                title: "Syllabus for Class 5th to 8th Entrance Examination 2025–26",
                link: "#"
              },
              {
                title: "Syllabus for Class 3rd and 4th Entrance Examination 2025–26",
                link: "#"
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 flex items-center"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <FileText className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-blue-900 mb-1">{item.title}</h3>
                  <a
                    href={item.link}
                    className="text-blue-600 text-sm font-medium hover:underline"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`Downloading: ${item.title}`);
                    }}
                  >
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 px-4 md:px-20 bg-white" id="faq">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">FAQ - Quick Answers to Common Questions</h2>
            <p className="text-gray-600">Find answers to common questions</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100 relative z-10"
              >
                <button
                  className="flex justify-between items-center w-full p-6 text-left font-medium text-blue-900 hover:bg-blue-50 transition-colors"
                  onClick={() => toggleFaq(i)}
                >
                  <span>{faq.q}</span>
                  <div
                    className={`transform transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                  >
                    <ChevronDown className="w-5 h-5 text-blue-700" />
                  </div>
                </button>
                
                {openFaq === i && (
                  <div className="p-6 pt-0 text-gray-700 border-t border-gray-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-indigo-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-700 rounded-lg rotate-45 opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-indigo-700 rounded-lg rotate-12 opacity-10"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join the Academy That Shapes Futures?
          </h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto opacity-90">
            At Macro Vision Academy, we're not just another school - We're a launchpad for ambition, growth, and greatness.
          </p>
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Entrance Test Dates:</h3>
            <p className="text-xl mb-6">4th January 2026 & 18th January 2026</p>
          </div>
          
          <p className="text-xl mb-6 max-w-2xl mx-auto opacity-90">
            Call us today: <strong>9302511111</strong> | <strong>9300110033</strong> | <strong>7725044544</strong>
          </p>
          
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Visit us online to register and start your journey.
          </p>
          
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            <strong>Macro Vision Academy</strong><br />
            From Classroom to Career - We're With You Every Step of the Way.
          </p>
          
          <button
            className="bg-white text-blue-900 px-10 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            onClick={handleStartApplication}
          >
            Secure Your Seat Today
          </button>
        </div>
      </section>

      
    </div>
  );
};

export default AdmissionsPage;