import  { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);


 return (
    <header className="w-full bg-gray-900 relative z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src={logo} 
              alt="PACS Logo" 
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link 
              to="/our-story" 
              className="px-3 xl:px-4 py-2 text-white text-xs xl:text-sm font-medium hover:text-[#FF5722] transition-colors duration-200 whitespace-nowrap"
            >
              OUR STORY
            </Link>

            <div className="relative group">
              <button 
                className="px-3 xl:px-4 py-2 text-white text-xs xl:text-sm font-medium hover:text-[#FF5722] transition-colors duration-200 flex items-center gap-1 whitespace-nowrap"
              >
                COURSES <ChevronDown className="w-3 h-3 xl:w-4 xl:h-4" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 rounded-md overflow-hidden">
                <Link to="/courses/oil-and-gas-piping" className="block px-5 py-3 text-[#2C2C2C] hover:bg-[#FF5722] hover:text-white transition-colors duration-200">
                  Oil and Gas Piping Engineering
                </Link>
                <Link to="/courses/mechanical-qa-qc" className="block px-5 py-3 text-[#2C2C2C] hover:bg-[#FF5722] hover:text-white transition-colors duration-200">
                  Mechanical QA/QC
                </Link>
                <Link to="/courses/piping-and-pipeline" className="block px-5 py-3 text-[#2C2C2C] hover:bg-[#FF5722] hover:text-white transition-colors duration-200">
                  Piping and Pipeline Engineering
                </Link>
                <Link to="/courses/ndt-level-2" className="block px-5 py-3 text-[#2C2C2C] hover:bg-[#FF5722] hover:text-white transition-colors duration-200">
                  NDT Level-II
                </Link>
                <Link to="/courses/full-stack-development" className="block px-5 py-3 text-[#2C2C2C] hover:bg-[#FF5722] hover:text-white transition-colors duration-200">
                  Full Stack Development
                </Link>
                <Link to="/courses/diploma-fire-safety" className="block px-5 py-3 text-[#2C2C2C] hover:bg-[#FF5722] hover:text-white transition-colors duration-200">
                  Diploma in Fire & Safety
                </Link>
                <Link to="/courses/nebosh" className="block px-5 py-3 text-[#2C2C2C] hover:bg-[#FF5722] hover:text-white transition-colors duration-200">
                  NEBOSH
                </Link>
              </div>
            </div>

            <div className="relative group">
              <button 
                className="px-3 xl:px-4 py-2 text-white text-xs xl:text-sm font-medium hover:text-[#FF5722] transition-colors duration-200 flex items-center gap-1 whitespace-nowrap"
              >
                SERVICES <ChevronDown className="w-3 h-3 xl:w-4 xl:h-4" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-56 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 rounded-md overflow-hidden">
                <Link to="/services/onsite-internship" className="block px-5 py-3 text-[#2C2C2C] hover:bg-[#FF5722] hover:text-white transition-colors duration-200">
                  On-Site Internship
                </Link>
                <Link to="/services/job-training" className="block px-5 py-3 text-[#2C2C2C] hover:bg-[#FF5722] hover:text-white transition-colors duration-200">
                  Job Training
                </Link>
                <Link to="/services/hr-recruitment" className="block px-5 py-3 text-[#2C2C2C] hover:bg-[#FF5722] hover:text-white transition-colors duration-200">
                  HR Recruitment
                </Link>
              </div>
            </div>

          

            <Link 
              to="/success-stories" 
              className="px-3 xl:px-4 py-2 text-white text-xs xl:text-sm font-medium hover:text-[#FF5722] transition-colors duration-200 whitespace-nowrap"
            >
              SUCCESS STORIES
            </Link>

            <Link 
              to="/contact-us" 
              className="px-3 xl:px-4 py-2 text-white text-xs xl:text-sm font-medium hover:text-[#FF5722] transition-colors duration-200 whitespace-nowrap"
            >
              CONTACT US
            </Link>

            <button className="ml-2 xl:ml-4 px-4 xl:px-6 py-2 xl:py-2.5 bg-[#FF5722] text-white text-xs xl:text-sm font-bold rounded hover:bg-[#FF4B00] hover:shadow-lg hover:scale-105 transition-all duration-200 whitespace-nowrap">
              Register Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2 hover:text-[#FF5722] transition-colors flex-shrink-0"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
     <div 
  className={`lg:hidden bg-gray-800 transition-all duration-300 ease-in-out overflow-hidden ${
    isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
  }`}
>
        <nav className="px-4 py-4 space-y-2">
          <Link 
            to="/our-story" 
            className="block px-4 py-3 text-white font-medium hover:bg-[#FF5722] hover:pl-6 transition-all duration-200 rounded"
            onClick={() => setIsMenuOpen(false)}
          >
            OUR STORY
          </Link>

          <div>
            <button 
              onClick={() => setOpenDropdown(openDropdown === 'courses' ? null : 'courses')}
              className="w-full flex items-center justify-between px-4 py-3 text-white font-medium hover:bg-[#3C3C3C] transition-all duration-200 rounded"
            >
              COURSES <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'courses' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-200 ${openDropdown === 'courses' ? 'max-h-[500px]' : 'max-h-0'}`}>
              <Link to="/courses/oil-and-gas-piping" className="block px-8 py-2 text-gray-300 hover:text-[#FF5722] hover:pl-10 transition-all" onClick={() => setIsMenuOpen(false)}>
                Oil and Gas Piping Engineering
              </Link>
              <Link to="/courses/mechanical-qa-qc" className="block px-8 py-2 text-gray-300 hover:text-[#FF5722] hover:pl-10 transition-all" onClick={() => setIsMenuOpen(false)}>
                Mechanical QA/QC
              </Link>
              <Link to="/courses/piping-and-pipeline" className="block px-8 py-2 text-gray-300 hover:text-[#FF5722] hover:pl-10 transition-all" onClick={() => setIsMenuOpen(false)}>
                Piping and Pipeline Engineering
              </Link>
              <Link to="/courses/ndt-level-2" className="block px-8 py-2 text-gray-300 hover:text-[#FF5722] hover:pl-10 transition-all" onClick={() => setIsMenuOpen(false)}>
                NDT Level-II
              </Link>
              <Link to="/courses/health-and-management" className="block px-8 py-2 text-gray-300 hover:text-[#FF5722] hover:pl-10 transition-all" onClick={() => setIsMenuOpen(false)}>
                Health and Management
              </Link>
              <Link to="/courses/full-stack-development" className="block px-8 py-2 text-gray-300 hover:text-[#FF5722] hover:pl-10 transition-all" onClick={() => setIsMenuOpen(false)}>
                Full Stack Development
              </Link>
              <Link to="/courses/medical-coding" className="block px-8 py-2 text-gray-300 hover:text-[#FF5722] hover:pl-10 transition-all" onClick={() => setIsMenuOpen(false)}>
                Medical Coding
              </Link>
              <Link to="/courses/diploma-fire-safety" className="block px-8 py-2 text-gray-300 hover:text-[#FF5722] hover:pl-10 transition-all" onClick={() => setIsMenuOpen(false)}>
                Diploma in Fire & Safety
              </Link>
              <Link to="/courses/nebosh" className="block px-8 py-2 text-gray-300 hover:text-[#FF5722] hover:pl-10 transition-all" onClick={() => setIsMenuOpen(false)}>
                NEBOSH
              </Link>
            </div>
          </div>

          <div>
            <button 
              onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')}
              className="w-full flex items-center justify-between px-4 py-3 text-white font-medium hover:bg-[#3C3C3C] transition-all duration-200 rounded"
            >
              SERVICES <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-200 ${openDropdown === 'services' ? 'max-h-48' : 'max-h-0'}`}>
              <Link to="/services/onsite-internship" className="block px-8 py-2 text-gray-300 hover:text-[#FF5722] hover:pl-10 transition-all" onClick={() => setIsMenuOpen(false)}>
                On-Site Internship
              </Link>
              <Link to="/services/job-training" className="block px-8 py-2 text-gray-300 hover:text-[#FF5722] hover:pl-10 transition-all" onClick={() => setIsMenuOpen(false)}>
                Job Training
              </Link>
              <Link to="/services/hr-recruitment" className="block px-8 py-2 text-gray-300 hover:text-[#FF5722] hover:pl-10 transition-all" onClick={() => setIsMenuOpen(false)}>
                HR Recruitment
              </Link>
            </div>
          </div>

          <Link 
            to="/certificate-verification" 
            className="block px-4 py-3 text-white font-medium hover:bg-[#FF5722] hover:pl-6 transition-all duration-200 rounded"
            onClick={() => setIsMenuOpen(false)}
          >
            CERTIFICATE VERIFICATION
          </Link>

          <Link 
            to="/success-stories" 
            className="block px-4 py-3 text-white font-medium hover:bg-[#FF5722] hover:pl-6 transition-all duration-200 rounded"
            onClick={() => setIsMenuOpen(false)}
          >
            SUCCESS STORIES
          </Link>

          <Link 
            to="/contact-us" 
            className="block px-4 py-3 text-white font-medium hover:bg-[#FF5722] hover:pl-6 transition-all duration-200 rounded"
            onClick={() => setIsMenuOpen(false)}
          >
            CONTACT US
          </Link>

          <button 
            className="w-full mt-4 px-6 py-3 bg-[#FF5722] text-white font-bold rounded hover:bg-[#FF4B00] hover:shadow-lg transition-all duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Register Now
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;