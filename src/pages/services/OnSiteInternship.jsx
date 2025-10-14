import React, { useState, useEffect } from "react";
import {
  Briefcase,
  MapPin,
  Award,
  Clock,
  CheckCircle,
  Building2,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import heroBg from "../../assets/image-1.png";
import mainImage from "../../assets/OnsiteInternship.jpeg";

const OnsiteInternship = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Onsite Internship | PACS</title>
        <meta
          name="description"
          content="Gain real-world experience with PACS Global's onsite internship programs. Bridge the gap between education and industry with hands-on training."
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
            Onsite Internship
          </h1>
          <p
            className="text-lg md:text-xl text-orange-300 max-w-2xl mx-auto font-medium transition-all duration-700"
            style={{
              opacity: scrollY < 100 ? 1 : 0.9,
              transform: `translateY(${scrollY * 0.15}px)`,
            }}
          >
            Bridge the gap between education and industry with real-world
            experience
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
                Real Experience, Real Growth
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mb-4"></div>
              <p className="text-xl md:text-2xl font-semibold text-orange-600 mb-6">
                Transform your skills into industry-ready expertise
              </p>
            </div>

            {/* Content Paragraphs */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-base md:text-lg">
                <span className="font-bold text-gray-800">
                  PACS Global's Onsite Internship Program
                </span>{" "}
                provides students with invaluable hands-on experience in real
                workplace environments. We believe that practical exposure is
                the key to building confidence and competence in your chosen
                field.
              </p>

              <p className="text-base md:text-lg">
                Our internship placements are carefully curated to match your
                skills and career aspirations. We partner with leading companies
                across various industries to ensure you gain meaningful
                experience that enhances your employability.
              </p>

              <p className="text-base md:text-lg">
                During your internship, you'll work on live projects,
                collaborate with industry professionals, and understand the
                dynamics of a professional workplace. This exposure helps you
                apply theoretical knowledge to practical scenarios, making you
                job-ready.
              </p>

              <p className="text-base md:text-lg">
                We provide end-to-end support throughout your internship
                journey, from placement to completion. Our dedicated team
                ensures that you have a smooth and enriching experience that
                contributes significantly to your career growth.
              </p>

              <p className="text-base md:text-lg font-semibold text-gray-800">
                With PACS Global, your internship is not just a requirement—it's
                a stepping stone to your dream career.
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
                  src={mainImage}
                  alt="Interns working in professional environment"
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

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div
          className="text-center mb-12 transition-all duration-700"
          style={{
            opacity: scrollY > 500 ? 1 : 0,
            transform: scrollY > 500 ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Internship Benefits
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
          {/* Benefit 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Real Workplace
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Experience authentic work environments and understand professional
              workplace culture firsthand.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Skill Development
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Enhance your technical and soft skills through hands-on projects
              and professional mentorship.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Career Advantage
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Build your resume with practical experience and gain a competitive
              edge in the job market.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnsiteInternship;
