import React, { useState, useEffect } from 'react';
import { Target, Users, Award, TrendingUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import heroBg from '../assets/image-1.png';
import ourStory from '../assets/OurStory.png';

const OurStory = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
     <div className="min-h-screen bg-gray-50">
      <Helmet>
              <title>Our Story | PACS</title>
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
            Our Story
          </h1>
          <p 
            className="text-lg md:text-xl text-orange-300 max-w-2xl mx-auto font-medium transition-all duration-700"
            style={{
              opacity: scrollY < 100 ? 1 : 0.9,
              transform: `translateY(${scrollY * 0.15}px)`
            }}
          >
            Building futures through education and skill development
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
                We Stand For Greatness
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mb-4"></div>
              <p className="text-xl md:text-2xl font-semibold text-orange-600 mb-6">
                We strive to change the world with education
              </p>
            </div>

            {/* Content Paragraphs */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-base md:text-lg">
                <span className="font-bold text-gray-800">PACS Global</span> is a great place for everyone who wants to succeed to build their skills, without a doubt. We have determined which precise skill sets will help job applicants find employment in both India and abroad.
              </p>

              <p className="text-base md:text-lg">
                Our original plan was to find places with a large number of open opportunities and then create a skill-oriented programme to help people get those positions quickly.
              </p>

              <p className="text-base md:text-lg">
                We at <span className="font-bold text-gray-800">PACS Global</span> are dedicated to shaping and enhancing students' talents so they may land their career goal. The curriculum for each course is created by professionals and subject matter experts who have achieved success in respective fields.
              </p>

              <p className="text-base md:text-lg">
                Students' skills are nurtured in a way that makes finding employment simple. Faculty members have been chosen based on how well-versed they are in their fields of study and how effectively they are able to impart that knowledge to aspirants.
              </p>

              <p className="text-base md:text-lg font-semibold text-gray-800">
                You get a good deal on your education at PACS Global. We are competent at what we do and feel that the quality of the profiles is more important than the number.
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
                  src={ourStory}
                  alt="Students learning together"
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

      {/* Stats Section */}
      <div 
        className="bg-white py-16 px-4 transition-all duration-700"
        style={{
          opacity: scrollY > 300 ? 1 : 0,
          transform: scrollY > 300 ? 'translateY(0)' : 'translateY(30px)'
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stat 1 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">120+</h3>
              <p className="text-gray-600 font-medium">Clients</p>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">730+</h3>
              <p className="text-gray-600 font-medium">Training Reg.</p>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">1,200+</h3>
              <p className="text-gray-600 font-medium">Recruitment</p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div 
          className="text-center mb-12 transition-all duration-700"
          style={{
            opacity: scrollY > 500 ? 1 : 0,
            transform: scrollY > 500 ? 'translateY(0)' : 'translateY(30px)'
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto"></div>
        </div>

        <div 
          className="grid md:grid-cols-3 gap-8 transition-all duration-700 delay-200"
          style={{
            opacity: scrollY > 500 ? 1 : 0,
            transform: scrollY > 500 ? 'translateY(0)' : 'translateY(30px)'
          }}
        >
          {/* Value 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Excellence</h3>
            <p className="text-gray-600 leading-relaxed">
              We strive for excellence in everything we do, ensuring the highest quality education and training for our students.
            </p>
          </div>

          {/* Value 2 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Student-Centric</h3>
            <p className="text-gray-600 leading-relaxed">
              Our students are at the heart of everything we do. We are committed to their success and career growth.
            </p>
          </div>

          {/* Value 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Quality</h3>
            <p className="text-gray-600 leading-relaxed">
              Quality over quantity is our motto. We focus on creating competent professionals, not just numbers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;