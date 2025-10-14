import React, { useState, useEffect } from "react";
import {
  Briefcase,
  Users,
  Target,
  Search,
  CheckCircle,
  UserCheck,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import heroBg from "../../assets/image-1.png";
import hrImage from "../../assets/HR_recruitment.jpeg";

const HRRecruitment = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>HR Recruitment | PACS</title>
        <meta
          name="description"
          content="Connect with top talent through PACS Global's comprehensive HR recruitment services. We match the right candidates with the right opportunities."
        />
      </Helmet>

      {/* Hero Section */}
      <div
        className="relative text-white py-24 md:py-32 px-4 overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/85 to-gray-800/85"></div>

        <div className="relative max-w-7xl mx-auto text-center">
          <h1
            className="text-4xl md:text-6xl font-bold mb-6 transition-all duration-700"
            style={{
              opacity: scrollY < 100 ? 1 : 0.9,
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          >
            HR Recruitment
          </h1>
          <p
            className="text-lg md:text-xl text-orange-300 max-w-2xl mx-auto font-medium transition-all duration-700"
            style={{
              opacity: scrollY < 100 ? 1 : 0.9,
              transform: `translateY(${scrollY * 0.15}px)`,
            }}
          >
            Connecting exceptional talent with outstanding opportunities
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
              transform: scrollY > 50 ? "translateY(0)" : "translateY(30px)",
            }}
          >
            {/* Main Heading */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
                Your Partner in Talent Acquisition
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mb-4"></div>
              <p className="text-xl md:text-2xl font-semibold text-orange-600 mb-6">
                Strategic recruitment solutions for business success
              </p>
            </div>

            {/* Content Paragraphs */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-base md:text-lg">
                <span className="font-bold text-gray-800">
                  PACS Global's HR Recruitment Services
                </span>{" "}
                specialize in identifying, attracting, and placing the right
                talent for your organization. We understand that hiring the
                right people is crucial to your business success, and we're
                committed to making that process seamless and effective.
              </p>

              <p className="text-base md:text-lg">
                Our recruitment approach is data-driven and personalized. We
                take time to understand your company culture, specific
                requirements, and long-term goals to ensure we find candidates
                who not only have the right skills but also fit perfectly with
                your organizational values.
              </p>

              <p className="text-base md:text-lg">
                We maintain an extensive network of pre-screened, qualified
                candidates across various industries and domains. Our rigorous
                screening process evaluates technical competencies, soft skills,
                cultural fit, and career aspirations to present you with only
                the most suitable candidates.
              </p>

              <p className="text-base md:text-lg">
                From initial consultation to final placement and beyond, we
                provide comprehensive support throughout the recruitment
                journey. Our team handles everything from job posting and
                candidate sourcing to interviews, negotiations, and onboarding
                assistance.
              </p>

              <p className="text-base md:text-lg font-semibold text-gray-800">
                Partner with PACS Global for recruitment solutions that drive
                organizational growth and success.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div
            className="transition-all duration-700 delay-200"
            style={{
              opacity: scrollY > 50 ? 1 : 0,
              transform: scrollY > 50 ? "translateY(0)" : "translateY(30px)",
            }}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={hrImage}
                  alt="HR recruitment and hiring process"
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

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div
          className="text-center mb-12 transition-all duration-700"
          style={{
            opacity: scrollY > 500 ? 1 : 0,
            transform: scrollY > 500 ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Recruitment Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto"></div>
        </div>

        <div
          className="grid md:grid-cols-3 gap-8 transition-all duration-700 delay-200"
          style={{
            opacity: scrollY > 500 ? 1 : 0,
            transform: scrollY > 500 ? "translateY(0)" : "translateY(30px)",
          }}
        >
          {/* Service 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Talent Sourcing
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Comprehensive candidate search and identification using advanced
              tools and our extensive network.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Screening Process
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Rigorous evaluation of candidates to ensure they meet your
              technical and cultural requirements.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <UserCheck className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              End-to-End Support
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Complete recruitment support from job posting to onboarding,
              ensuring a smooth hiring process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRRecruitment;
