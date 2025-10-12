import React, { useState, useEffect } from 'react';
import { ArrowRight, Users, Award, Briefcase, Target, BookOpen, CheckCircle } from 'lucide-react';

const HomePage = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const courses = [
    {
      title: 'Oil and Gas Piping Engineering',
      duration: '3 Months',
      eligibility: '+2/ Diploma/ B. Tech',
      goal: '$25000',
      link: '/courses/OilAndGasPiping.jsx'
    },
    {
      title: 'Mechanical QA/QC',
      duration: '1 Month',
      eligibility: '+2/ Diploma/ B. Tech',
      link: '/courses/MechanicalQA.jsx'
    },
    {
      title: 'Piping and Pipeline Engineering',
      duration: '1 Month',
      eligibility: '+2/ Diploma/ B. Tech',
      goal: '$25000',
      link: '/courses/PipingAndPipeline.jsx'
    },
    {
      title: 'Hospital Management',
      duration: '6 Months/ 3 Months',
      eligibility: '+2/ Any Degree',
      goal: '$25000',
      link: '/courses/HealthAndManagement.jsx'
    },
    {
      title: 'Full Stack Development',
      duration: '3 Months',
      eligibility: '+2/ Diploma/ B. Tech',
      goal: '$25000',
      link: '/courses/FullStackDevelopment.jsx'
    },
    {
      title: 'Medical Coding',
      duration: '3 Months',
      eligibility: '+2/ Any Degree',
      goal: '$25000',
      link: '/courses/MedicalCoding.jsx'
    }
  ];

  const stats = [
    { icon: Users, value: '120+', label: 'Clients' },
    { icon: BookOpen, value: '730+', label: 'Training Reg.' },
    { icon: Briefcase, value: '1,200+', label: 'Recruitment' }
  ];

  const trainingProcess = [
    {
      step: '1',
      title: 'Choose the Courses',
      description: 'We have a number of courses suitable for engineering graduates, Diploma holders and Higher secondary pass outs. The registered candidates can choose the most adequate training course provided in our institute.'
    },
    {
      step: '2',
      title: 'Experience the best training ever',
      description: 'Candidates registered in our institute can attend the training programmes (both online and regular batches) with the assistance of the best faculty members, having proper industrial as well as training experience.'
    },
    {
      step: '3',
      title: 'Discover your dream job',
      description: 'Pacs global, the best institute in Kerala and Karnataka, provides you excellent opportunities to enter into various industries like oil and gas technology fields, QA/QC civil and mechanical fields, MEP etc…'
    },
    {
      step: '4',
      title: 'Choose the best career path',
      description: 'As we provide proper assistance for your dream career, you can choose the best career path, that may lead to discover and reach success. We provide you timely updates regarding the opportunities.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Build your career path <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">with us</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Making you a professional, ready to crack the opportunities coming your way in core industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              Apply Now <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        id="stats" 
        data-animate 
        className={`py-16 bg-white transform transition-all duration-1000 ${visibleSections.has('stats') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-8 rounded-xl bg-gray-50 hover:bg-gradient-to-br hover:from-orange-50 hover:to-blue-50 transition-all duration-300 transform hover:scale-105">
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-orange-500" />
                <div className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        data-animate 
        className={`py-20 bg-gray-50 transform transition-all duration-1000 delay-100 ${visibleSections.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold text-orange-500 uppercase tracking-wider mb-2">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About us</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering students to create solutions for tomorrow's challenges.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              We are one of the best educational institution working since 2018, in Kerala and Karnataka. We provide best training & certification in the field of Mechanical, Electrical, Civil and Quality Management Engineering. We offer unique opportunities to face challenges through our enriched learning, academic excellence, professional training and corporate exposure.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We deliver courses and examinations to all major industrial sectors like oil & gas, Logistics, Mechanical, Civil and Safety. If you are interested in pursuing a career in the oil and gas industry in Kochi and Mangalore, our website can be a valuable resource. We provide information on the top companies in the region, as well as tips on how to prepare for interviews and increase your chances of landing the job of your dreams.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section 
        id="courses" 
        data-animate 
        className={`py-20 bg-white transform transition-all duration-1000 delay-200 ${visibleSections.has('courses') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-sm font-bold text-orange-500 uppercase tracking-wider mb-2">Together we do great things</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-800">Courses we offer</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-white opacity-50" />
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">{course.title}</h4>
                  <div className="space-y-2 mb-4">
                    <p className="text-gray-600"><span className="font-semibold">Duration:</span> {course.duration}</p>
                    <p className="text-gray-600"><span className="font-semibold">Eligibility:</span> {course.eligibility}</p>
                    {course.goal && (
                      <div className="flex items-center gap-2 text-orange-500 font-semibold">
                        <Target size={18} />
                        <span>Goal: {course.goal}</span>
                      </div>
                    )}
                  </div>
                  <button className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 flex items-center justify-center gap-2">
                    Read More <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEBOSH Trending Course */}
      <section 
        id="nebosh" 
        data-animate 
        className={`py-20 bg-gradient-to-br from-orange-500 to-orange-600 text-white transform transition-all duration-1000 delay-300 ${visibleSections.has('nebosh') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider mb-2 opacity-90">Trending Course</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-4">NEBOSH</h3>
              <p className="text-2xl mb-6 font-semibold">Safety doesn't happen by accident!</p>
              <p className="text-lg mb-6 opacity-90">
                In the safety and health industry, the NEBOSH course is highly employable. NEBOSH course at Pacs Global makes students possess strong knowledge and practical ability to manage workplace risks and dangers and prevent accidents and injuries…
              </p>
              <div className="space-y-2 mb-6">
                <p><span className="font-semibold">Duration:</span> 1 Month</p>
                <p><span className="font-semibold">Eligibility:</span> +2/ Diploma/ B. Tech</p>
              </div>
              <button className="px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                Read More <ArrowRight size={20} />
              </button>
            </div>
            
            {/* Image Placeholder */}
            <div className="h-96 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border-2 border-white/30">
              <Award className="w-32 h-32 text-white opacity-40" />
            </div>
          </div>
        </div>
      </section>

      {/* Training Process */}
      <section 
        id="training" 
        data-animate 
        className={`py-20 bg-gray-50 transform transition-all duration-1000 delay-400 ${visibleSections.has('training') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Training Process</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We ensure the best training to the candidates registered in our institute. We are the best institute, providing mechanical engineering jobs in Kerala, in various engineering streams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {trainingProcess.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        id="cta" 
        data-animate 
        className={`py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white transform transition-all duration-1000 delay-500 ${visibleSections.has('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-sm font-bold uppercase tracking-wider mb-2 opacity-90">Join us now</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4">Global Reach, Local Excellence</h3>
          <p className="text-2xl mb-8">Let today be our first day on a new adventure.</p>
          <button className="px-10 py-5 bg-white text-blue-600 rounded-lg font-bold text-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
            Apply Now <ArrowRight size={24} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;