import React, { useState, useEffect } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import heroBg from '../assets/image-1.png';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    course: '',
    message: ''
  });

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const courses = [
    'Oil and Gas Piping Engineering',
    'Mechanical QA/QC',
    'Piping and Pipeline Engineering',
    'NDT Level-II',
    'Health and Management',
    'Full Stack Development',
    'Medical Coding',
    'Diploma in Fire & Safety',
    'NEBOSH'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = `Inquiry from ${formData.name} - ${formData.course || 'General Inquiry'}`;
    const body = `
Name: ${formData.name}
Mobile Number: ${formData.mobile}
Email: ${formData.email}
Course Interested: ${formData.course || 'Not specified'}

Message:
${formData.message}
    `.trim();

    const mailtoLink = `mailto:career@pacsglobal.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
 <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Contact Us | PACS</title>
        <meta name="description" content="Get in touch with PACS for making you into a professional and fine-tune your aptitude and communication skills and make you ready to crack any opportunity coming your way in core industries." />
      </Helmet>
      {/* Hero Section */}
      <div 
        className="relative text-white py-24 md:py-32 px-4 overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 to-gray-800/85"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 
            className="text-4xl md:text-6xl font-bold mb-6 transition-all duration-700"
            style={{
              opacity: scrollY < 100 ? 1 : 0.9,
              transform: `translateY(${scrollY * 0.1}px)`
            }}
          >
            Contact Us
          </h1>
          <p 
            className="text-lg md:text-xl text-orange-300 max-w-2xl mx-auto font-medium transition-all duration-700"
            style={{
              opacity: scrollY < 100 ? 1 : 0.9,
              transform: `translateY(${scrollY * 0.15}px)`
            }}
          >
            We'd love to hear from you! Reach out and let's start your journey to success.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Contact Form */}
          <div 
            className="transition-all duration-700"
            style={{
              opacity: scrollY > 50 ? 1 : 0,
              transform: scrollY > 50 ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Send Us A Message</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mb-4"></div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-gray-700 placeholder-gray-400"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-gray-700 placeholder-gray-400"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email ID"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-gray-700 placeholder-gray-400"
                />
              </div>

              <div>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-gray-700 appearance-none bg-white"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    backgroundSize: '1.5em 1.5em'
                  }}
                >
                  <option value="">Select A Course</option>
                  {courses.map((course, index) => (
                    <option key={index} value={course}>{course}</option>
                  ))}
                </select>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                  className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors text-gray-700 placeholder-gray-400 resize-none"
                ></textarea>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-gray-500 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-gray-600 transition-all duration-200 shadow-lg flex items-center justify-center gap-2"
              >
                Send
              </button>
            </div>
          </div>

          {/* Right Column - Contact Info & Map */}
          <div 
            className="space-y-6 transition-all duration-700 delay-200"
            style={{
              opacity: scrollY > 50 ? 1 : 0,
              transform: scrollY > 50 ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            {/* Map */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="w-full h-80 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.6589377374815!2d74.86025731482235!3d12.869368890897157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35b24a5c5c161%3A0x401f2e7ce55c92c4!2sPACS%20GLOBAL!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="PACS Global Location"
                ></iframe>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-700 mb-4 uppercase text-center">Reach Us Through</h3>
              
              <div className="space-y-4 max-w-md mx-auto">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-700 font-semibold">Address:</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      PACS GLOBAL First floor, Geekay tower, Opp. Omega hospital, Pumpwell, Mangalore.
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <div className="space-y-1">
                      <a href="tel:+918867240600" className="block text-gray-600 hover:text-orange-600 transition-colors text-sm">
                        +918867240600
                      </a>
                      <a href="tel:+918943333342" className="block text-gray-600 hover:text-orange-600 transition-colors text-sm">
                        +918943333342
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <a 
                      href="mailto:career@pacsglobal.in"
                      className="text-gray-600 hover:text-orange-600 transition-colors text-sm"
                    >
                      career@pacsglobal.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;