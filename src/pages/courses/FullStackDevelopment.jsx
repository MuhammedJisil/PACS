import React, { useState, useEffect } from 'react';
import { Target, Users, Award, TrendingUp, BookOpen, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import heroBg from "../../assets/jobTraining.jpeg";
import mainImage from "../../assets/fullstack.jpeg";

const FullStackDevelopment = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Other courses list (excluding current course)
  const otherCourses = [
    { title: 'Certification Business Analyst Operations', path: '/courses/certification-business-analyst-operation' },
    { title: 'Diploma Fire Safety', path: '/courses/diploma-fire-safety' },
    { title: 'Diploma Logistics SCM', path: '/courses/diploma-logistics-scm' },
    { title: 'Diploma Welding Technology', path: '/courses/diploma-welding-technology' },
    { title: 'Mechanical QA', path: '/courses/mechanical-qa-qc' },
    { title: 'NDT Level 2', path: '/courses/ndt-level-2' },
    { title: 'NEBOSH', path: '/courses/nebosh' },
    { title: 'Oil and Gas Piping', path: '/courses/oil-and-gas-piping' },
    { title: 'Piping and Pipeline', path: '/courses/piping-and-pipeline' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Full Stack Development | PACS</title>
        <meta name="description" content="Master Full Stack Web Development with comprehensive training in modern technologies and frameworks at PACS Global." />
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
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/90"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 
            className="text-4xl md:text-6xl font-bold mb-6 transition-all duration-700"
            style={{
              opacity: scrollY < 100 ? 1 : 0.9,
              transform: `translateY(${scrollY * 0.1}px)`
            }}
          >
            Full Stack Development
          </h1>
          <p 
            className="text-lg md:text-xl text-orange-300 max-w-2xl mx-auto font-medium transition-all duration-700"
            style={{
              opacity: scrollY < 100 ? 1 : 0.9,
              transform: `translateY(${scrollY * 0.15}px)`
            }}
          >
            Build powerful web applications with cutting-edge technologies
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div 
            className="transition-all duration-700"
            style={{
              opacity: scrollY > 50 ? 1 : 0,
              transform: scrollY > 50 ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            {/* Main Heading */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                Transform Into a Full Stack Developer
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mb-4"></div>
              <p className="text-xl md:text-2xl font-semibold text-orange-600 mb-6">
                Master frontend, backend, and database technologies
              </p>
            </div>

            {/* Content Paragraphs */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-base md:text-lg">
                <span className="font-bold text-gray-800">PACS Global's Full Stack Development</span> program offers comprehensive training in modern web development technologies. Learn to build complete web applications from scratch, covering both client-side and server-side development.
              </p>

              <p className="text-base md:text-lg">
                Master essential technologies including HTML5, CSS3, JavaScript, React.js, Node.js, Express.js, MongoDB, and RESTful API development. Gain hands-on experience with version control using Git and deployment on cloud platforms.
              </p>

              <p className="text-base md:text-lg">
                The curriculum covers responsive web design, modern JavaScript frameworks, database management, authentication and authorization, API integration, and best practices in software development. You'll work on real-world projects that mirror industry standards.
              </p>

              <p className="text-base md:text-lg">
                Our experienced instructors are working professionals from top tech companies. They provide mentorship, code reviews, and career guidance to ensure you're industry-ready. Learn agile methodologies, testing, debugging, and deployment strategies.
              </p>

              <p className="text-base md:text-lg font-semibold text-gray-800">
                Launch your tech career with PACS Global. Join thousands of successful developers who have transformed their careers through our comprehensive full stack development program and secure positions in leading IT companies.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div 
            className="transition-all duration-700 delay-200"
            style={{
              opacity: scrollY > 50 ? 1 : 0,
              transform: scrollY > 50 ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src={mainImage}
                  alt="Full Stack Development Coding"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg opacity-20 -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Key Learning Areas */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div 
          className="text-center mb-12 transition-all duration-700"
          style={{
            opacity: scrollY > 500 ? 1 : 0,
            transform: scrollY > 500 ? 'translateY(0)' : 'translateY(30px)'
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Technology Stack</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto"></div>
        </div>

        <div 
          className="grid md:grid-cols-3 gap-8 transition-all duration-700 delay-200"
          style={{
            opacity: scrollY > 500 ? 1 : 0,
            transform: scrollY > 500 ? 'translateY(0)' : 'translateY(30px)'
          }}
        >
          {/* Area 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Frontend Development</h3>
            <p className="text-gray-600 leading-relaxed">
              Master HTML5, CSS3, JavaScript, React.js, responsive design, and modern UI/UX principles to create stunning user interfaces.
            </p>
          </div>

          {/* Area 2 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Backend Development</h3>
            <p className="text-gray-600 leading-relaxed">
              Learn Node.js, Express.js, RESTful APIs, authentication, server-side logic, and building scalable backend systems.
            </p>
          </div>

          {/* Area 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Database & Deployment</h3>
            <p className="text-gray-600 leading-relaxed">
              Gain expertise in MongoDB, MySQL, database design, cloud deployment, Git version control, and DevOps fundamentals.
            </p>
          </div>
        </div>
      </div>

      {/* Other Courses Section */}
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div 
            className="text-center mb-12 transition-all duration-700"
            style={{
              opacity: scrollY > 800 ? 1 : 0,
              transform: scrollY > 800 ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Explore Other Courses</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">Discover more career opportunities with our diverse course offerings</p>
          </div>

          <div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-200"
            style={{
              opacity: scrollY > 800 ? 1 : 0,
              transform: scrollY > 800 ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            {otherCourses.map((course, index) => (
              <a
                key={index}
                href={course.path}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group flex items-center justify-between"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">
                    {course.title}
                  </h3>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullStackDevelopment;