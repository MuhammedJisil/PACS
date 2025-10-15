import React, { useState, useEffect } from 'react';
import { Upload, X, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import heroBg from '../assets/image-1.png';

const RegisterNow = () => {
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    qualifications: '',
    experience: '',
    willingToRelocate: '',
    idProof: null,
    sslc: null,
    highestQualification: null,
    passportPhoto: null
  });
  
  const [fileNames, setFileNames] = useState({
    idProof: '',
    sslc: '',
    highestQualification: '',
    passportPhoto: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({
          ...prev,
          [fieldName]: 'File size should not exceed 5MB'
        }));
        return;
      }

      setFormData(prev => ({
        ...prev,
        [fieldName]: file
      }));
      setFileNames(prev => ({
        ...prev,
        [fieldName]: file.name
      }));
      
      if (errors[fieldName]) {
        setErrors(prev => ({
          ...prev,
          [fieldName]: ''
        }));
      }
    }
  };

  const removeFile = (fieldName) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: null
    }));
    setFileNames(prev => ({
      ...prev,
      [fieldName]: ''
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = 'Contact number is required';
    } else if (!/^\d{10}$/.test(formData.contactNumber.replace(/\s/g, ''))) {
      newErrors.contactNumber = 'Contact number should be 10 digits';
    }

    if (!formData.qualifications.trim()) {
      newErrors.qualifications = 'Qualifications is required';
    }

    if (!formData.experience.trim()) {
      newErrors.experience = 'Experience is required';
    }

    if (!formData.willingToRelocate) {
      newErrors.willingToRelocate = 'Please select an option';
    }

    if (!formData.idProof) {
      newErrors.idProof = 'ID proof is required';
    }

    if (!formData.sslc) {
      newErrors.sslc = 'SSLC certificate is required';
    }

    if (!formData.highestQualification) {
      newErrors.highestQualification = 'Highest qualification certificate is required';
    }

    if (!formData.passportPhoto) {
      newErrors.passportPhoto = 'Passport size photo is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const submitData = new FormData();
    Object.keys(formData).forEach(key => {
      if (formData[key] !== null) {
        submitData.append(key, formData[key]);
      }
    });

    try {
      // TODO: Replace with your actual API endpoint
      // const response = await fetch('/api/register', {
      //   method: 'POST',
      //   body: submitData
      // });
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', formData);
      setSubmitSuccess(true);
      
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          contactNumber: '',
          qualifications: '',
          experience: '',
          willingToRelocate: '',
          idProof: null,
          sslc: null,
          highestQualification: null,
          passportPhoto: null
        });
        setFileNames({
          idProof: '',
          sslc: '',
          highestQualification: '',
          passportPhoto: ''
        });
        setSubmitSuccess(false);
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ submit: 'Failed to submit form. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const FileUploadBox = ({ fieldName, label, description, fileName, error }) => (
    <div className="mb-6">
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label} <span className="text-red-500">*</span>
      </label>
      <div className={`border-2 border-dashed ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg p-6 text-center hover:border-orange-500 transition-colors`}>
        {fileName ? (
          <div className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded">
            <span className="text-sm text-gray-700 truncate flex-1">{fileName}</span>
            <button
              type="button"
              onClick={() => removeFile(fieldName)}
              className="ml-2 text-red-500 hover:text-red-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <label className="cursor-pointer">
            <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
            <p className="text-sm text-gray-600 mb-1">Click to upload {label}</p>
            <p className="text-xs text-gray-500">{description}</p>
            <input
              type="file"
              onChange={(e) => handleFileChange(e, fieldName)}
              accept={fieldName === 'passportPhoto' ? '.jpg,.jpeg,.png' : '.pdf,.jpg,.jpeg,.png'}
              className="hidden"
            />
          </label>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Register Now | PACS</title>
      </Helmet>

      <div 
        className="relative text-white py-24 md:py-32 px-4 overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 to-gray-800/85"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 
            className="text-4xl md:text-6xl font-bold mb-6 transition-all duration-700"
            style={{
              opacity: scrollY < 100 ? 1 : 0.9,
              transform: `translateY(${scrollY * 0.1}px)`
            }}
          >
            Register Now
          </h1>
          <p 
            className="text-lg md:text-xl text-orange-300 max-w-2xl mx-auto font-medium transition-all duration-700"
            style={{
              opacity: scrollY < 100 ? 1 : 0.9,
              transform: `translateY(${scrollY * 0.15}px)`
            }}
          >
            Start your journey towards a successful career with PACS Global
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div 
          className="bg-white rounded-lg shadow-xl p-8 md:p-12 transition-all duration-700"
          style={{
            opacity: scrollY > 50 ? 1 : 0,
            transform: scrollY > 50 ? 'translateY(0)' : 'translateY(30px)'
          }}
        >
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Registration Form
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mb-4"></div>
            <p className="text-gray-600">
              Please fill in all the details below to complete your registration
            </p>
          </div>

          {submitSuccess && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <p className="text-green-800 font-medium">Registration submitted successfully!</p>
            </div>
          )}

          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all`}
                placeholder="Enter your full name"
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all`}
                placeholder="Enter your email address"
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="contactNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                Contact Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border ${errors.contactNumber ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all`}
                placeholder="Enter your 10-digit contact number"
              />
              {errors.contactNumber && <p className="mt-1 text-sm text-red-500">{errors.contactNumber}</p>}
            </div>

            <div>
              <label htmlFor="qualifications" className="block text-sm font-semibold text-gray-700 mb-2">
                Qualifications <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="qualifications"
                name="qualifications"
                value={formData.qualifications}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border ${errors.qualifications ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all`}
                placeholder="E.g., B.Tech, MBA, Diploma, etc."
              />
              {errors.qualifications && <p className="mt-1 text-sm text-red-500">{errors.qualifications}</p>}
            </div>

            <div>
              <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-2">
                Experience <span className="text-red-500">*</span>
              </label>
              <textarea
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                rows="4"
                className={`w-full px-4 py-3 border ${errors.experience ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all`}
                placeholder="Describe your work experience (mention years and roles)"
              ></textarea>
              {errors.experience && <p className="mt-1 text-sm text-red-500">{errors.experience}</p>}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Are you willing to relocate? <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-6">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="willingToRelocate"
                    value="yes"
                    checked={formData.willingToRelocate === 'yes'}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                  />
                  <span className="ml-2 text-gray-700">Yes</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="willingToRelocate"
                    value="no"
                    checked={formData.willingToRelocate === 'no'}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                  />
                  <span className="ml-2 text-gray-700">No</span>
                </label>
              </div>
              {errors.willingToRelocate && <p className="mt-1 text-sm text-red-500">{errors.willingToRelocate}</p>}
            </div>

            <div className="border-t border-gray-200 pt-6 mt-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Document Uploads</h3>
              <p className="text-sm text-gray-600 mb-6">All files should be in PDF, JPG, or PNG format (Max 5MB each)</p>

              <FileUploadBox
                fieldName="idProof"
                label="Upload ID Proof"
                description="Aadhaar, PAN Card, or Driving License"
                fileName={fileNames.idProof}
                error={errors.idProof}
              />

              <FileUploadBox
                fieldName="sslc"
                label="Upload SSLC Certificate"
                description="10th Standard Certificate"
                fileName={fileNames.sslc}
                error={errors.sslc}
              />

              <FileUploadBox
                fieldName="highestQualification"
                label="Upload Highest Qualification Certificate"
                description="Degree, Diploma, or PG Certificate"
                fileName={fileNames.highestQualification}
                error={errors.highestQualification}
              />

              <FileUploadBox
                fieldName="passportPhoto"
                label="Upload Passport Size Photo"
                description="Recent passport size photograph"
                fileName={fileNames.passportPhoto}
                error={errors.passportPhoto}
              />
            </div>

            {errors.submit && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800">{errors.submit}</p>
              </div>
            )}

            <div className="pt-6">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full py-4 px-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-300 transition-all duration-200 transform hover:scale-[1.02] ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  'Submit Registration'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterNow;