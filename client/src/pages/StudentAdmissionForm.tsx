// FileName: StudentAdmissionForm.tsx
import React, { useState, useRef } from 'react';

// Define the type for the main form data object
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
  // Form Data State
  const [formData, setFormData] = useState<FormData>({
    admissionForClass: '',
    studentName: '',
    dob: '',
    gender: '',
    previousSchool: '',
    casteCategory: '',
    course: '',
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

  // UI State
  const [terms, setTerms] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);

  // Class options for different levels
  const classOptions = {
    'Pre-Primary': ['Nursery', 'LKG', 'UKG'],
    'Primary': ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5'],
    'Middle': ['Grade 6', 'Grade 7', 'Grade 8'],
    'High School': ['Grade 9', 'Grade 10'],
    'Senior Secondary': ['Grade 11', 'Grade 12']
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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

  // Format date to YYYY-MM-DD for input[type="date"]
  const formatDateForInput = (dateString: string): string => {
    if (!dateString) return '';
    
    // If it's already in YYYY-MM-DD format, return as is
    if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
      return dateString;
    }
    
    // Try to parse DD/MM/YYYY format
    const parts = dateString.split('/');
    if (parts.length === 3) {
      const [day, month, year] = parts;
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    }
    
    return dateString;
  };

  // Format date to DD/MM/YYYY for display
  const formatDateForDisplay = (dateString: string): string => {
    if (!dateString) return '';
    
    // If it's in YYYY-MM-DD format, convert to DD/MM/YYYY
    if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
      const [year, month, day] = dateString.split('-');
      return `${day}/${month}/${year}`;
    }
    
    return dateString;
  };

  // Handle date input change (convert from YYYY-MM-DD to DD/MM/YYYY for storage)
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (value) {
      // Convert from YYYY-MM-DD to DD/MM/YYYY
      const [year, month, day] = value.split('-');
      const formattedDate = `${day}/${month}/${year}`;
      setFormData(prev => ({ ...prev, [name]: formattedDate }));
    } else {
      setFormData(prev => ({ ...prev, [name]: '' }));
    }

    // Clear error for the field being edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Enhanced validation function
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Required fields validation
    const requiredFields: (keyof FormData)[] = [
      'admissionForClass', 'studentName', 'dob', 'gender', 'previousSchool',
      'casteCategory', 'course', 'sourceMedium', 'suitableDateForEntrance',
      'fatherFullName', 'fatherOccupation', 'motherFullName', 'motherOccupation',
      'fatherPhone', 'motherPhone', 'fatherEmail', 'allergyAilments',
      'hostelFacility', 'address', 'city', 'state', 'pinCode'
    ];

    requiredFields.forEach(field => {
      if (!formData[field]?.toString().trim()) {
        newErrors[field] = 'This field is required.';
      }
    });

    // At least one relative/friend name should be filled
    if (!formData.relativeFriendName1?.trim() && 
        !formData.relativeFriendName2?.trim() && 
        !formData.relativeFriendName3?.trim()) {
      newErrors.relativeFriendName1 = 'At least one relative/friend name is required.';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.fatherEmail && !emailRegex.test(formData.fatherEmail)) {
      newErrors.fatherEmail = 'Please enter a valid email address.';
    }

    // Phone number validation (10 digits)
    const phoneRegex = /^\d{10}$/;
    if (formData.fatherPhone && !phoneRegex.test(formData.fatherPhone.replace(/\D/g, ''))) {
      newErrors.fatherPhone = 'Phone number must be exactly 10 digits.';
    }
    if (formData.motherPhone && !phoneRegex.test(formData.motherPhone.replace(/\D/g, ''))) {
      newErrors.motherPhone = 'Phone number must be exactly 10 digits.';
    }

    // Date validation
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (formData.dob && !dateRegex.test(formData.dob)) {
      newErrors.dob = 'Please enter date in DD/MM/YYYY format.';
    } else if (formData.dob) {
      // Validate actual date
      const [day, month, year] = formData.dob.split('/').map(Number);
      const date = new Date(year, month - 1, day);
      if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
        newErrors.dob = 'Please enter a valid date.';
      } else {
        // Validate age (between 3 and 18 years)
        const today = new Date();
        const age = today.getFullYear() - year;
        const monthDiff = today.getMonth() - (month - 1);
        const dayDiff = today.getDate() - day;
        
        let actualAge = age;
        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
          actualAge--;
        }
        
        if (actualAge < 3 || actualAge > 18) {
          newErrors.dob = 'Student age must be between 3 and 18 years.';
        }
      }
    }

    // Pin code validation (6 digits)
    const pinCodeRegex = /^\d{6}$/;
    if (formData.pinCode && !pinCodeRegex.test(formData.pinCode)) {
      newErrors.pinCode = 'Pin code must be exactly 6 digits.';
    }

    // Terms and conditions
    if (!terms) {
      newErrors.terms = 'You must agree to the terms and conditions.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle phone number input (formatting)
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Remove non-digit characters and limit to 10 digits
    const digitsOnly = value.replace(/\D/g, '').slice(0, 10);
    setFormData(prev => ({ ...prev, [name]: digitsOnly }));

    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Handle pin code input
  const handlePinCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    // Remove non-digit characters and limit to 6 digits
    const digitsOnly = value.replace(/\D/g, '').slice(0, 6);
    setFormData(prev => ({ ...prev, pinCode: digitsOnly }));

    if (errors.pinCode) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.pinCode;
        return newErrors;
      });
    }
  };

  // Reset form function
  const resetForm = () => {
    setFormData({
      admissionForClass: '',
      studentName: '',
      dob: '',
      gender: '',
      previousSchool: '',
      casteCategory: '',
      course: '',
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
    setTerms(false);
    setErrors({});
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    if (!validateForm()) {
      setIsSubmitting(false);
      // Scroll to first error
      const firstError = Object.keys(errors)[0];
      if (firstError) {
        const element = document.getElementById(firstError);
        element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    const formDataToSend = new FormData();
    
    // Add all form data to FormData
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });
    
    // Add terms and other required fields
    formDataToSend.append('terms', terms.toString());
    formDataToSend.append('_subject', `New Admission Form: ${formData.studentName}`);
    formDataToSend.append('_template', 'table');
    formDataToSend.append('_captcha', 'false');

    try {
      const response = await fetch("https://formsubmit.co/ajax/digitalmarketing@mvaburhanpur.com", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();
      
      if (response.ok && result.success === "true") {
        setSubmitStatus("success");
        resetForm();
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        setSubmitStatus("error");
        console.error('Form submission failed:', result);
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-900 p-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-white text-center md:text-left">
            <div className="mb-2">
              <span className="mr-4">📞 Contact No: +91 9302511111, 9300110033</span>
            </div>
            <div>
              <span>✉️ Pros@mvaburhanpur.com</span>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="w-32 h-10 bg-blue-800 rounded-md flex items-center justify-center text-white font-bold text-sm">
              MACRO VISION ACADEMY
            </div>
          </div>
        </div>

        {/* Form Title */}
        <div className="bg-blue-900 p-4 text-center">
          <h1 className="text-2xl font-bold text-white">ADMISSION ENQUIRY FORM</h1>
          <p className="text-blue-200 mt-2">Please fill out all required fields (*)</p>
        </div>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 m-6">
            <p className="text-green-800 font-medium text-center">
              ✅ Thank you for your admission enquiry! We'll get back to you soon.
            </p>
          </div>
        )}
        
        {submitStatus === "error" && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 m-6">
            <p className="text-red-800 font-medium text-center">
              ❌ There was an error submitting your form. Please try again or contact us directly.
            </p>
          </div>
        )}

        {/* Main Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="p-6 space-y-8">
          {/* STUDENT DETAILS */}
          <div className="bg-blue-900 p-3 rounded">
            <h2 className="text-white text-lg font-semibold">STUDENT DETAILS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="admissionForClass" className="block text-sm font-medium text-gray-700">
                Admission For Class <span className="text-red-500">*</span>
              </label>
              <select
                id="admissionForClass"
                name="admissionForClass"
                value={formData.admissionForClass}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.admissionForClass ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
              >
                <option value="">Select grade level</option>
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
                Name of the Student <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.studentName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
                placeholder="Enter full name"
              />
              {errors.studentName && <p className="mt-1 text-xs text-red-600">{errors.studentName}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                Date of Birth <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formatDateForInput(formData.dob)}
                onChange={handleDateChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.dob ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
                max={new Date().toISOString().split('T')[0]}
              />
              {formData.dob && (
                <p className="text-xs text-gray-500">Selected: {formatDateForDisplay(formData.dob)}</p>
              )}
              {errors.dob && <p className="mt-1 text-xs text-red-600">{errors.dob}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                Gender <span className="text-red-500">*</span>
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.gender ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
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
                Previous School <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="previousSchool"
                name="previousSchool"
                value={formData.previousSchool}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.previousSchool ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
                placeholder="Name of previous school"
              />
              {errors.previousSchool && <p className="mt-1 text-xs text-red-600">{errors.previousSchool}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="casteCategory" className="block text-sm font-medium text-gray-700">
                Caste Category <span className="text-red-500">*</span>
              </label>
              <select
                id="casteCategory"
                name="casteCategory"
                value={formData.casteCategory}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.casteCategory ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
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
                Course (For 11th Student) <span className="text-red-500">*</span>
              </label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.course ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
              >
                <option value="">Select Course</option>
                <option value="Science">Science</option>
                <option value="Commerce">Commerce</option>
                <option value="Arts">Arts</option>
              </select>
              {errors.course && <p className="mt-1 text-xs text-red-600">{errors.course}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="sourceMedium" className="block text-sm font-medium text-gray-700">
                Source/Medium <span className="text-red-500">*</span>
              </label>
              <select
                id="sourceMedium"
                name="sourceMedium"
                value={formData.sourceMedium}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.sourceMedium ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
              >
                <option value="">Select Source</option>
                <option value="CBSE">CBSE</option>
                <option value="ICSE">ICSE</option>
                <option value="State Board">State Board</option>
                <option value="Other">Other</option>
              </select>
              {errors.sourceMedium && <p className="mt-1 text-xs text-red-600">{errors.sourceMedium}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="suitableDateForEntrance" className="block text-sm font-medium text-gray-700">
                Suitable date for Entrance Examination <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="suitableDateForEntrance"
                name="suitableDateForEntrance"
                value={formatDateForInput(formData.suitableDateForEntrance)}
                onChange={handleDateChange}
                min={new Date().toISOString().split('T')[0]}
                className={`mt-1 block w-full px-3 py-2 border ${errors.suitableDateForEntrance ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
              />
              {formData.suitableDateForEntrance && (
                <p className="text-xs text-gray-500">Selected: {formatDateForDisplay(formData.suitableDateForEntrance)}</p>
              )}
              {errors.suitableDateForEntrance && <p className="mt-1 text-xs text-red-600">{errors.suitableDateForEntrance}</p>}
            </div>
          </div>

          {/* FATHER DETAILS */}
          <div className="bg-blue-900 p-3 rounded">
            <h2 className="text-white text-lg font-semibold">FATHER DETAILS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="fatherFullName" className="block text-sm font-medium text-gray-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fatherFullName"
                name="fatherFullName"
                value={formData.fatherFullName}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.fatherFullName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
                placeholder="Father's full name"
              />
              {errors.fatherFullName && <p className="mt-1 text-xs text-red-600">{errors.fatherFullName}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="fatherOccupation" className="block text-sm font-medium text-gray-700">
                Occupation <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fatherOccupation"
                name="fatherOccupation"
                value={formData.fatherOccupation}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.fatherOccupation ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
                placeholder="Father's occupation"
              />
              {errors.fatherOccupation && <p className="mt-1 text-xs text-red-600">{errors.fatherOccupation}</p>}
            </div>
          </div>

          {/* MOTHER DETAILS */}
          <div className="bg-blue-900 p-3 rounded">
            <h2 className="text-white text-lg font-semibold">MOTHER DETAILS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="motherFullName" className="block text-sm font-medium text-gray-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="motherFullName"
                name="motherFullName"
                value={formData.motherFullName}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.motherFullName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
                placeholder="Mother's full name"
              />
              {errors.motherFullName && <p className="mt-1 text-xs text-red-600">{errors.motherFullName}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="motherOccupation" className="block text-sm font-medium text-gray-700">
                Occupation <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="motherOccupation"
                name="motherOccupation"
                value={formData.motherOccupation}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.motherOccupation ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
                placeholder="Mother's occupation"
              />
              {errors.motherOccupation && <p className="mt-1 text-xs text-red-600">{errors.motherOccupation}</p>}
            </div>
          </div>

          {/* CONTACT DETAILS */}
          <div className="bg-blue-900 p-3 rounded">
            <h2 className="text-white text-lg font-semibold">CONTACT DETAILS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="fatherPhone" className="block text-sm font-medium text-gray-700">
                Father Phone No <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="fatherPhone"
                name="fatherPhone"
                value={formData.fatherPhone}
                onChange={handlePhoneChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.fatherPhone ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
                placeholder="10-digit mobile number"
                maxLength={10}
              />
              {errors.fatherPhone && <p className="mt-1 text-xs text-red-600">{errors.fatherPhone}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="motherPhone" className="block text-sm font-medium text-gray-700">
                Mother Phone No <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="motherPhone"
                name="motherPhone"
                value={formData.motherPhone}
                onChange={handlePhoneChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.motherPhone ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
                placeholder="10-digit mobile number"
                maxLength={10}
              />
              {errors.motherPhone && <p className="mt-1 text-xs text-red-600">{errors.motherPhone}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="fatherEmail" className="block text-sm font-medium text-gray-700">
                Father E-mail <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="fatherEmail"
                name="fatherEmail"
                value={formData.fatherEmail}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.fatherEmail ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
                placeholder="example@email.com"
              />
              {errors.fatherEmail && <p className="mt-1 text-xs text-red-600">{errors.fatherEmail}</p>}
            </div>
          </div>

          {/* FURTHER INFORMATION */}
          <div className="bg-blue-900 p-3 rounded">
            <h2 className="text-white text-lg font-semibold">FURTHER INFORMATION</h2>
          </div>
          <div className="space-y-4">
            <p className="text-sm font-medium text-gray-700">
              Do you have any relatives/friend who is studying or has studied at MVA:
            </p>
            {[1, 2, 3].map((i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="space-y-2">
                  <label htmlFor={`relativeFriendName${i}`} className="block text-sm font-medium text-gray-700">
                    Name {i === 1 && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    type="text"
                    id={`relativeFriendName${i}`}
                    name={`relativeFriendName${i}`}
                    value={formData[`relativeFriendName${i}` as keyof FormData]}
                    onChange={handleChange}
                    className={`mt-1 block w-full px-3 py-2 border ${errors[`relativeFriendName${i}`] ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
                    placeholder={`Relative/Friend ${i} name`}
                  />
                  {errors[`relativeFriendName${i}`] && <p className="mt-1 text-xs text-red-600">{errors[`relativeFriendName${i}`]}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor={`relativeFriendClass${i}`} className="block text-sm font-medium text-gray-700">
                    Class
                  </label>
                  <select
                    id={`relativeFriendClass${i}`}
                    name={`relativeFriendClass${i}`}
                    value={formData[`relativeFriendClass${i}` as keyof FormData]}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 sm:text-sm"
                  >
                    <option value="">Select grade</option>
                    <option value="Pre-Primary">Pre-Primary</option>
                    <option value="Primary">Primary</option>
                    <option value="Middle">Middle</option>
                    <option value="High School">High School</option>
                    <option value="Senior Secondary">Senior Secondary</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor={`relativeFriendYear${i}`} className="block text-sm font-medium text-gray-700">
                    Year
                  </label>
                  <input
                    type="text"
                    id={`relativeFriendYear${i}`}
                    name={`relativeFriendYear${i}`}
                    value={formData[`relativeFriendYear${i}` as keyof FormData]}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 sm:text-sm"
                    placeholder="Year of study"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* HEALTH DETAILS */}
          <div className="bg-blue-900 p-3 rounded">
            <h2 className="text-white text-lg font-semibold">HEALTH DETAILS</h2>
          </div>
          <div className="space-y-2">
            <label htmlFor="allergyAilments" className="block text-sm font-medium text-gray-700">
              Any Allergy/Ailments/Injuries/Physical disability <span className="text-red-500">*</span>
            </label>
            <select
              id="allergyAilments"
              name="allergyAilments"
              value={formData.allergyAilments}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border ${errors.allergyAilments ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
            >
              <option value="">Please select an option</option>
              <option value="None">None</option>
              <option value="Allergy">Allergy</option>
              <option value="Ailment">Ailment</option>
              <option value="Injury">Injury</option>
              <option value="Physical Disability">Physical Disability</option>
              <option value="Other">Other</option>
            </select>
            {errors.allergyAilments && <p className="mt-1 text-xs text-red-600">{errors.allergyAilments}</p>}
          </div>

          {/* OTHER DETAILS */}
          <div className="bg-blue-900 p-3 rounded">
            <h2 className="text-white text-lg font-semibold">OTHER DETAILS</h2>
          </div>
          <div className="space-y-2">
            <label htmlFor="hostelFacility" className="block text-sm font-medium text-gray-700">
              Whether Hostel Facility Required (Hostel from 5th onwards) <span className="text-red-500">*</span>
            </label>
            <select
              id="hostelFacility"
              name="hostelFacility"
              value={formData.hostelFacility}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border ${errors.hostelFacility ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
            >
              <option value="">Please select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            {errors.hostelFacility && <p className="mt-1 text-xs text-red-600">{errors.hostelFacility}</p>}
          </div>

          {/* PERMANENT ADDRESS */}
          <div className="bg-blue-900 p-3 rounded">
            <h2 className="text-white text-lg font-semibold">PERMANENT ADDRESS (RESIDENCE)</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address <span className="text-red-500">*</span>
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows={3}
                className={`mt-1 block w-full px-3 py-2 border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
                placeholder="Full address"
              />
              {errors.address && <p className="mt-1 text-xs text-red-600">{errors.address}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.city ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
                placeholder="City name"
              />
              {errors.city && <p className="mt-1 text-xs text-red-600">{errors.city}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                State <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.state ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
                placeholder="State name"
              />
              {errors.state && <p className="mt-1 text-xs text-red-600">{errors.state}</p>}
            </div>
            <div className="space-y-2">
              <label htmlFor="pinCode" className="block text-sm font-medium text-gray-700">
                Pin Code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="pinCode"
                name="pinCode"
                value={formData.pinCode}
                onChange={handlePinCodeChange}
                className={`mt-1 block w-full px-3 py-2 border ${errors.pinCode ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-900 sm:text-sm`}
                placeholder="6-digit pin code"
                maxLength={6}
              />
              {errors.pinCode && <p className="mt-1 text-xs text-red-600">{errors.pinCode}</p>}
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-start p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center h-5">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                checked={terms}
                onChange={handleTermsChange}
                className="focus:ring-blue-900 h-4 w-4 text-blue-900 border-gray-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="terms" className="font-medium text-gray-700">
                I agree to the Terms and Conditions <span className="text-red-500">*</span>
              </label>
              <p className="text-gray-600 mt-1">
                We hereby declare that the above mentioned details are true to the best of my/his knowledge. 
                We also understand that the management reserves the right to withhold the Admission without 
                assigning any reason.
              </p>
              {errors.terms && <p className="mt-1 text-xs text-red-600">{errors.terms}</p>}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                'Submit Admission Form'
              )}
            </button>
          </div>
        </form>

        {/* Footer Text */}
        <div className="bg-gray-100 p-4 text-xs text-gray-600">
          <p className="text-center">
            We hereby declare that the above mentioned details are true to the best of my/his knowledge. 
            We also understand that the management reserves the right to withhold the Admission in my/need 
            without assigning any reason. I/We agree that the decision of the Admission Committee will be 
            final and binding. We will not hold school responsible, if I/We do not come or communicate due 
            to reasons. Read fine mobile numbers registered in the format as given by the school. The give 
            consent is abide by the school norms and co-operate as required in respective of areas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentAdmissionForm;