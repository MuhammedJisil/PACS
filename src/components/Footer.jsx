import React from 'react';
import { MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png';

const Footer = () => {
  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/our-story' },
    { name: 'Courses', path: '/#courses' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'Contact Us', path: '/contact-us' }
  ];

  const courses = [
    { name: 'Oil and Gas Piping', path: '/courses/oil-and-gas-piping' },
    { name: 'Mechanical QA/QC', path: '/courses/mechanical-qa-qc' },
    { name: 'Piping & Pipeline', path: '/courses/piping-and-pipeline' },
    { name: 'NDT Level 2', path: '/courses/ndt-level-2' },
    { name: 'Full Stack Development', path: '/courses/full-stack-development' },
    { name: 'Diploma Fire Safety', path: '/courses/diploma-fire-safety' },
    { name: 'NEBOSH', path: '/courses/nebosh' },
    { name: 'Diploma Welding Technology', path: '/courses/diploma-welding-technology' },
    { name: 'Certification Business Analyst Operation', path: '/courses/certification-business-analyst-operation' },
    { name: 'Diploma Logistics & SCM', path: '/courses/diploma-logistics-scm' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Logo and Description Section */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="mb-6">
              <img 
                src={logo}
                alt="PACS Global Logo" 
                className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
              />
            </div>
            
            <p className="text-gray-400 leading-relaxed text-sm">
              Making you into a professional and fine-tune your aptitude and communication skills and make you ready to crack any opportunity coming your way in core industries.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block pb-2">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-orange-500 to-orange-600"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => {
                
                const isHashLink = link.path.includes('#');
                
                if (isHashLink) {
                  return (
                    <li key={index}>
                      <a 
                        href={link.path}
                        className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm flex items-center gap-2 group"
                        onClick={(e) => {
                          const hash = link.path.split('#')[1];
                          if (hash && window.location.pathname === '/') {
                            e.preventDefault();
                            const element = document.getElementById(hash);
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            }
                          } else {
                            scrollToTop();
                          }
                        }}
                      >
                        <span className="w-0 group-hover:w-2 h-0.5 bg-orange-500 transition-all duration-300"></span>
                        {link.name}
                      </a>
                    </li>
                  );
                } else {
                  return (
                    <li key={index}>
                      <Link 
                        to={link.path}
                        onClick={scrollToTop}
                        className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm flex items-center gap-2 group"
                      >
                        <span className="w-0 group-hover:w-2 h-0.5 bg-orange-500 transition-all duration-300"></span>
                        {link.name}
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block pb-2">
              Our Courses
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-orange-500 to-orange-600"></span>
            </h3>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index}>
                  <Link 
                    to={course.path}
                    onClick={scrollToTop}
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-orange-500 transition-all duration-300"></span>
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
           <h3 className="text-white font-bold text-lg mb-6 relative inline-block pb-2">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-orange-500 to-orange-600"></span>
            </h3>
            <div className="space-y-4">
              {/* Location */}
              <div className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-semibold text-sm mb-1">PACS GLOBAL</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    First floor, Geekay tower, Opp. Omega hospital, Pumpwell, Mangalore
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <a 
                  href="mailto:career@pacsglobal.in"
                  className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-sm"
                >
                  career@pacsglobal.in
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 group">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <div className="text-sm">
                  <a 
                    href="tel:+918867240600"
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300 block mb-1"
                  >
                    +91 8867240600
                  </a>
                  <a 
                    href="tel:+918943333342"
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300 block"
                  >
                    +91 8943333342
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 transition-all duration-300 group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 transition-all duration-300 group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 transition-all duration-300 group">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 PACS GLOBAL. All rights reserved.
            </p>
            
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-400">Sited by:</span>
              <a 
                href="#" 
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center gap-1 font-semibold"
              >
                Accelerate
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;