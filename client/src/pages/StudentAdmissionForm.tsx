// FileName: StudentAdmissionForm.tsx
import React, { useState } from 'react';

// Define the type for the main form data object (excluding the checkbox)
interface FormData {
  admissionForClass: string;
  studentName: string;
  dob: string;
  gender: string;
  previousSchool: string;
  casteCategory: string;
  course: string;
  sourceMedium: string;
  suitableDateForEntrance: string;
  fatherFullName: string;
  fatherOccupation: string;
  motherFullName: string;
  motherOccupation: string;
  fatherPhone: string;
  motherPhone: string;
  fatherEmail: string;
  relativeFriendName1: string;
  relativeFriendClass1: string;
  relativeFriendYear1: string;
  relativeFriendName2: string;
  relativeFriendClass2: string;
  relativeFriendYear2: string;
  relativeFriendName3: string;
  relativeFriendClass3: string;
  relativeFriendYear3: string;
  relativeFriendContact1: string;
  relativeFriendContact2: string;
  relativeFriendContact3: string;
  allergyAilments: string;
  hostelFacility: string;
  address: string;
  city: string;
  state: string;
  pinCode: string;
}

const StudentAdmissionForm: React.FC = () => {
  // Form Data State - Comprehensive fields based on the image
  const [formData, setFormData] = useState<FormData>({
    admissionForClass: '',
    studentName: '',
    dob: '',
    gender: '',
    previousSchool: '',
    casteCategory: '',
    course: '', // For 11th Student
    sourceMedium: '',
    suitableDateForEntrance: '',
    fatherFullName: '',
    fatherOccupation: '',
    motherFullName: '',
    motherOccupation: '',
    fatherPhone: '',
    motherPhone: '',
    fatherEmail: '',
    relativeFriendName1: '',
    relativeFriendClass1: '',
    relativeFriendYear1: '',
    relativeFriendName2: '',
    relativeFriendClass2: '',
    relativeFriendYear2: '',
    relativeFriendName3: '',
    relativeFriendClass3: '',
    relativeFriendYear3: '',
    relativeFriendContact1: '',
    relativeFriendContact2: '',
    relativeFriendContact3: '',
    allergyAilments: '',
    hostelFacility: '',
    address: '',
    city: '',
    state: '',
    pinCode: '',
  });

  // Separate state for the terms checkbox
  const [terms, setTerms] = useState<boolean>(false);

  // UI State
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Handle input changes for all fields except 'terms'
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error for the field being edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Handle change for the 'terms' checkbox
  const handleTermsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerms(e.target.checked);
    if (errors.terms) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.terms;
        return newErrors;
      });
    }
  };

  // Validate form data
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Required fields based on the image (marked with *)
    if (!formData.admissionForClass) newErrors.admissionForClass = 'Required.';
    if (!formData.studentName.trim()) newErrors.studentName = 'Required.';
    if (!formData.dob) newErrors.dob = 'Required.';
    if (!formData.gender) newErrors.gender = 'Required.';
    if (!formData.previousSchool.trim()) newErrors.previousSchool = 'Required.';
    if (!formData.casteCategory) newErrors.casteCategory = 'Required.';
    if (!formData.course) newErrors.course = 'Required.';
    if (!formData.sourceMedium) newErrors.sourceMedium = 'Required.';
    if (!formData.suitableDateForEntrance) newErrors.suitableDateForEntrance = 'Required.';
    if (!formData.fatherFullName.trim()) newErrors.fatherFullName = 'Required.';
    if (!formData.fatherOccupation.trim()) newErrors.fatherOccupation = 'Required.';
    if (!formData.motherFullName.trim()) newErrors.motherFullName = 'Required.';
    if (!formData.motherOccupation.trim()) newErrors.motherOccupation = 'Required.';
    if (!formData.fatherPhone.trim()) newErrors.fatherPhone = 'Required.';
    if (!formData.motherPhone.trim()) newErrors.motherPhone = 'Required.';
    if (!formData.fatherEmail.trim()) newErrors.fatherEmail = 'Required.';
    if (!formData.relativeFriendName1.trim() && !formData.relativeFriendName2.trim() && !formData.relativeFriendName3.trim()) {
      // At least one relative/friend name should be filled
      newErrors.relativeFriendName1 = 'At least one required.';
    }
    if (!formData.allergyAilments) newErrors.allergyAilments = 'Required.';
    if (!formData.hostelFacility) newErrors.hostelFacility = 'Required.';
    if (!formData.address.trim()) newErrors.address = 'Required.';
    if (!formData.city.trim()) newErrors.city = 'Required.';
    if (!formData.state.trim()) newErrors.state = 'Required.';
    if (!formData.pinCode.trim()) newErrors.pinCode = 'Required.';
    if (!terms) newErrors.terms = 'You must agree to the terms and conditions.';

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.fatherEmail.trim() && !emailRegex.test(formData.fatherEmail)) {
      newErrors.fatherEmail = 'Invalid email format.';
    }

    // Validate phone number format (simple check for 10 digits)
    const phoneRegex = /^\d{10}$/;
    if (formData.fatherPhone.trim() && !phoneRegex.test(formData.fatherPhone)) {
      newErrors.fatherPhone = 'Phone number must be 10 digits.';
    }
    if (formData.motherPhone.trim() && !phoneRegex.test(formData.motherPhone)) {
      newErrors.motherPhone = 'Phone number must be 10 digits.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Combine form data and terms for submission
      const fullFormData = { ...formData, terms };
      // Submit the form data
      console.log('Form submitted:', fullFormData);
      alert('Form submitted successfully!');
      // Reset form if needed
      // setFormData(initialFormDataState); // Define initialFormDataState if you want to reset
      // setTerms(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-900 p-4 flex justify-between items-center">
          <div className="text-sm text-white">
            <span className="mr-4">📞 Contact No: +91 9302511111, 9300110033</span>
            <span className="mr-4">✉️ Pros@mvaburhanpur.com</span>
          </div>
          <div className="flex-shrink-0">
            {/* Placeholder for logo - Replace with actual logo component or image */}
            <div className="w-32 h-10 bg-blue-900 rounded-md flex items-center justify-center text-white font-bold">
              MACRO VISION ACADEMY
            </div>
          </div>
        </div>

        {/* Form Title */}
        <div className="bg-blue-900 p-4 text-center">
          <h1 className="text-xl font-bold text-white">ADMISSION ENQUIRY FORM</h1>
        </div>

        {/* Main Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* STUDENT DETAILS */}
          <div className="bg-blue-900 p-3">
            <h2 className="text-white text-sm font-semibold">STUDENT DETAILS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="admissionForClass" className="block text-sm font-medium text-gray-700">
                Admission For Class*:
              </label>
              <select
                id="admissionForClass"
                name="admissionForClass"
                value={formData.admissionForClass}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.admissionForClass ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
              >
                <option value="">Select grade</option>
                <option value="Pre-Primary">Pre-Primary</option>
                <option value="Primary">Primary</option>
                <option value="Middle">Middle</option>
                <option value="High School">High School</option>
                <option value="Senior Secondary">Senior Secondary</option>
              </select>
              {errors.admissionForClass && <p className="mt-1 text-xs text-red-600">{errors.admissionForClass}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="studentName" className="block text-sm font-medium text-gray-700">
                Name of the Student*:
              </label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.studentName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
              />
              {errors.studentName && <p className="mt-1 text-xs text-red-600">{errors.studentName}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                DOB* (DD/MM/YYYY):
              </label>
              <input
                type="text"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                placeholder="DD/MM/YYYY"
                className={`mt-1 block w-full px-3 py-2 border ${errors.dob ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
              />
              {errors.dob && <p className="mt-1 text-xs text-red-600">{errors.dob}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                Gender*:
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.gender ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && <p className="mt-1 text-xs text-red-600">{errors.gender}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="previousSchool" className="block text-sm font-medium text-gray-700">
                Previous School:
              </label>
              <input
                type="text"
                id="previousSchool"
                name="previousSchool"
                value={formData.previousSchool}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.previousSchool ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
              />
              {errors.previousSchool && <p className="mt-1 text-xs text-red-600">{errors.previousSchool}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="casteCategory" className="block text-sm font-medium text-gray-700">
                Caste Category:
              </label>
              <select
                id="casteCategory"
                name="casteCategory"
                value={formData.casteCategory}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.casteCategory ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
              >
                <option value="">Select Category</option>
                <option value="General">General</option>
                <option value="OBC">OBC</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
              </select>
              {errors.casteCategory && <p className="mt-1 text-xs text-red-600">{errors.casteCategory}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="course" className="block text-sm font-medium text-gray-700">
                Course (For 11th Student):
              </label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.course ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
              >
                <option value="">Select Subject</option>
                <option value="Science">Science</option>
                <option value="Commerce">Commerce</option>
                <option value="Arts">Arts</option>
              </select>
              {errors.course && <p className="mt-1 text-xs text-red-600">{errors.course}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="sourceMedium" className="block text-sm font-medium text-gray-700">
                Source/Medium:
              </label>
              <select
                id="sourceMedium"
                name="sourceMedium"
                value={formData.sourceMedium}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.sourceMedium ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
              >
                <option value="">Select Source</option>
                <option value="CBSE">CBSE</option>
                <option value="ICSE">ICSE</option>
                <option value="State Board">State Board</option>
              </select>
              {errors.sourceMedium && <p className="mt-1 text-xs text-red-600">{errors.sourceMedium}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="suitableDateForEntrance" className="block text-sm font-medium text-gray-700">
                Suitable date for Entrance Examination*:
              </label>
              <input
                type="date"
                id="suitableDateForEntrance"
                name="suitableDateForEntrance"
                value={formData.suitableDateForEntrance}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.suitableDateForEntrance ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
              />
              {errors.suitableDateForEntrance && <p className="mt-1 text-xs text-red-600">{errors.suitableDateForEntrance}</p>}
            </div>
          </div>

          {/* FATHER DETAILS */}
          <div className="bg-blue-900 p-3">
            <h2 className="text-white text-sm font-semibold">FATHER DETAILS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="fatherFullName" className="block text-sm font-medium text-gray-700">
                Full Name*:
              </label>
              <input
                type="text"
                id="fatherFullName"
                name="fatherFullName"
                value={formData.fatherFullName}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.fatherFullName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
              />
              {errors.fatherFullName && <p className="mt-1 text-xs text-red-600">{errors.fatherFullName}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="fatherOccupation" className="block text-sm font-medium text-gray-700">
                Occupation:
              </label>
              <input
                type="text"
                id="fatherOccupation"
                name="fatherOccupation"
                value={formData.fatherOccupation}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.fatherOccupation ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
              />
              {errors.fatherOccupation && <p className="mt-1 text-xs text-red-600">{errors.fatherOccupation}</p>}
            </div>
          </div>

          {/* MOTHER DETAILS */}
          <div className="bg-blue-900 p-3">
            <h2 className="text-white text-sm font-semibold">MOTHER DETAILS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="motherFullName" className="block text-sm font-medium text-gray-700">
                Name*:
              </label>
              <input
                type="text"
                id="motherFullName"
                name="motherFullName"
                value={formData.motherFullName}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.motherFullName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
              />
              {errors.motherFullName && <p className="mt-1 text-xs text-red-600">{errors.motherFullName}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="motherOccupation" className="block text-sm font-medium text-gray-700">
                Occupation:
              </label>
              <input
                type="text"
                id="motherOccupation"
                name="motherOccupation"
                value={formData.motherOccupation}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.motherOccupation ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
              />
              {errors.motherOccupation && <p className="mt-1 text-xs text-red-600">{errors.motherOccupation}</p>}
            </div>
          </div>

          {/* CONTACT DETAILS */}
          <div className="bg-blue-900 p-3">
            <h2 className="text-white text-sm font-semibold">CONTACT DETAILS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="fatherPhone" className="block text-sm font-medium text-gray-700">
                Father Phone No *:
              </label>
              <input
                type="tel"
                id="fatherPhone"
                name="fatherPhone"
                value={formData.fatherPhone}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.fatherPhone ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
                placeholder="Enter 10-digit number"
              />
              {errors.fatherPhone && <p className="mt-1 text-xs text-red-600">{errors.fatherPhone}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="motherPhone" className="block text-sm font-medium text-gray-700">
                Mother Phone No *:
              </label>
              <input
                type="tel"
                id="motherPhone"
                name="motherPhone"
                value={formData.motherPhone}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.motherPhone ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
                placeholder="Enter 10-digit number"
              />
              {errors.motherPhone && <p className="mt-1 text-xs text-red-600">{errors.motherPhone}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="fatherEmail" className="block text-sm font-medium text-gray-700">
                Father E-mail *:
              </label>
              <input
                type="email"
                id="fatherEmail"
                name="fatherEmail"
                value={formData.fatherEmail}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.fatherEmail ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
                placeholder="example@email.com"
              />
              {errors.fatherEmail && <p className="mt-1 text-xs text-red-600">{errors.fatherEmail}</p>}
            </div>
          </div>

          {/* FURTHER INFORMATION */}
          <div className="bg-blue-900 p-3">
            <h2 className="text-white text-sm font-semibold">FURTHER INFORMATION</h2>
          </div>
          <div className="space-y-4">
            <p className="text-sm font-medium text-gray-700">Do you have any relatives/friend who is studying or has student at MVA :</p>
            {[1, 2, 3].map((i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label htmlFor={`relativeFriendName${i}`} className="block text-sm font-medium text-gray-700">
                    Name:
                  </label>
                  <input
                    type="text"
                    id={`relativeFriendName${i}`}
                    name={`relativeFriendName${i}`}
                    value={formData[`relativeFriendName${i}` as keyof FormData]} // Use FormData type here
                    onChange={handleChange}
                    className={`mt-1 block w-full px-3 py-2 border ${errors[`relativeFriendName${i}`] ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
                  />
                  {errors[`relativeFriendName${i}`] && <p className="mt-1 text-xs text-red-600">{errors[`relativeFriendName${i}`]}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor={`relativeFriendClass${i}`} className="block text-sm font-medium text-gray-700">
                    Class:
                  </label>
                  <select
                    id={`relativeFriendClass${i}`}
                    name={`relativeFriendClass${i}`}
                    value={formData[`relativeFriendClass${i}` as keyof FormData]} // Use FormData type here
                    onChange={handleChange}
                    className={`mt-1 block w-full px-3 py-2 border ${errors[`relativeFriendClass${i}`] ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
                  >
                    <option value="">Select grade</option>
                    <option value="Pre-Primary">Pre-Primary</option>
                    <option value="Primary">Primary</option>
                    <option value="Middle">Middle</option>
                    <option value="High School">High School</option>
                    <option value="Senior Secondary">Senior Secondary</option>
                  </select>
                  {errors[`relativeFriendClass${i}`] && <p className="mt-1 text-xs text-red-600">{errors[`relativeFriendClass${i}`]}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor={`relativeFriendYear${i}`} className="block text-sm font-medium text-gray-700">
                    Year:
                  </label>
                  <input
                    type="text"
                    id={`relativeFriendYear${i}`}
                    name={`relativeFriendYear${i}`}
                    value={formData[`relativeFriendYear${i}` as keyof FormData]} // Use FormData type here
                    onChange={handleChange}
                    className={`mt-1 block w-full px-3 py-2 border ${errors[`relativeFriendYear${i}`] ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
                  />
                  {errors[`relativeFriendYear${i}`] && <p className="mt-1 text-xs text-red-600">{errors[`relativeFriendYear${i}`]}</p>}
                </div>
              </div>
            ))}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="relativeFriendContact1" className="block text-sm font-medium text-gray-700">
                  Contact:
                </label>
                <input
                  type="text"
                  id="relativeFriendContact1"
                  name="relativeFriendContact1"
                  value={formData.relativeFriendContact1}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border ${errors.relativeFriendContact1 ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
                />
                {errors.relativeFriendContact1 && <p className="mt-1 text-xs text-red-600">{errors.relativeFriendContact1}</p>}
              </div>
              <div className="space-y-2">
                <label htmlFor="relativeFriendContact2" className="block text-sm font-medium text-gray-700">
                  Contact:
                </label>
                <input
                  type="text"
                  id="relativeFriendContact2"
                  name="relativeFriendContact2"
                  value={formData.relativeFriendContact2}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border ${errors.relativeFriendContact2 ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
                />
                {errors.relativeFriendContact2 && <p className="mt-1 text-xs text-red-600">{errors.relativeFriendContact2}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="relativeFriendContact3" className="block text-sm font-medium text-gray-700">
                Contact:
              </label>
              <input
                type="text"
                id="relativeFriendContact3"
                name="relativeFriendContact3"
                value={formData.relativeFriendContact3}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.relativeFriendContact3 ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
              />
              {errors.relativeFriendContact3 && <p className="mt-1 text-xs text-red-600">{errors.relativeFriendContact3}</p>}
            </div>
          </div>

          {/* HEALTH DETAILS */}
          <div className="bg-blue-900 p-3">
            <h2 className="text-white text-sm font-semibold">HEALTH DETAILS</h2>
          </div>
          <div className="space-y-2">
            <label htmlFor="allergyAilments" className="block text-sm font-medium text-gray-700">
              Any Allergy/Ailments/Injuries/Physical disability:
            </label>
            <select
              id="allergyAilments"
              name="allergyAilments"
              value={formData.allergyAilments}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border ${errors.allergyAilments ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
            >
              <option value="">Select</option>
              <option value="None">None</option>
              <option value="Allergy">Allergy</option>
              <option value="Ailment">Ailment</option>
              <option value="Injury">Injury</option>
              <option value="Disability">Disability</option>
            </select>
            {errors.allergyAilments && <p className="mt-1 text-xs text-red-600">{errors.allergyAilments}</p>}
          </div>

          {/* OTHER DETAILS */}
          <div className="bg-blue-900 p-3">
            <h2 className="text-white text-sm font-semibold">OTHER DETAILS</h2>
          </div>
          <div className="space-y-2">
            <label htmlFor="hostelFacility" className="block text-sm font-medium text-gray-700">
              Whether Hostel Facility Require (Hostel from 5th onwards)*:
            </label>
            <select
              id="hostelFacility"
              name="hostelFacility"
              value={formData.hostelFacility}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border ${errors.hostelFacility ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            {errors.hostelFacility && <p className="mt-1 text-xs text-red-600">{errors.hostelFacility}</p>}
          </div>

          {/* PERMANENT ADDRESS (RESIDENCES) */}
          <div className="bg-blue-900 p-3">
            <h2 className="text-white text-sm font-semibold">PERMANENT ADDRESS (RESIDENCES)</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address*:
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
              />
              {errors.address && <p className="mt-1 text-xs text-red-600">{errors.address}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                City*:
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
              />
              {errors.city && <p className="mt-1 text-xs text-red-600">{errors.city}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                State*:
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.state ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
              />
              {errors.state && <p className="mt-1 text-xs text-red-600">{errors.state}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="pinCode" className="block text-sm font-medium text-gray-700">
                Pin Code*:
              </label>
              <input
                type="text"
                id="pinCode"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.pinCode ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
              />
              {errors.pinCode && <p className="mt-1 text-xs text-red-600">{errors.pinCode}</p>}
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                checked={terms} // Use the separate state
                onChange={handleTermsChange} // Use the separate handler
                className="focus:ring-blue-900 h-4 w-4 text-blue-900 border-gray-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="terms" className="font-medium text-gray-700">
                I agree to the Terms and Conditions *
              </label>
              {errors.terms && <p className="mt-1 text-xs text-red-600">{errors.terms}</p>}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
            >
              Enroll Now
            </button>
          </div>
        </form>

        {/* Footer Text */}
        <div className="bg-gray-100 p-4 text-xs text-gray-600">
          <p>We hereby declare that the above mentioned details are true to the best of my/his knowledge. We also understand that the management reserves the right to withhold the Admission in my/need without assigning any reason. I/We agree that the decision of the Admission Committee will be final and binding. We will not hold school responsible, if I/We do not come or communicate due to reasons. Read fine mobile numbers registered in the format as given by the school. The give consent is abide by the school norms and co-operate as required in respective of areas.</p>
        </div>
      </div>
    </div>
  );
};

export default StudentAdmissionForm; // Add export statement to fix isolatedModules error