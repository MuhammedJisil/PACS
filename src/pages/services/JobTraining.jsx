import React, { useState, useEffect } from "react";
import {
  BookOpen,
  Target,
  Users,
  TrendingUp,
  Zap,
  GraduationCap,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import jobTraining from "../../assets/OurStory.png";
import heroBg from "../../assets/jobTraining.jpeg";

const JobTraining = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Job Training | PACS</title>
        <meta
          name="description"
          content="Get job-ready with PACS Global's comprehensive job training programs. Expert-led courses designed to match industry requirements and career goals."
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
            Job Training
          </h1>
          <p
            className="text-lg md:text-xl text-orange-300 max-w-2xl mx-auto font-medium transition-all duration-700"
            style={{
              opacity: scrollY < 100 ? 1 : 0.9,
              transform: `translateY(${scrollY * 0.15}px)`,
            }}
          >
            Industry-focused training programs to accelerate your career success
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
                Empowering Your Career Journey
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mb-4"></div>
              <p className="text-xl md:text-2xl font-semibold text-orange-600 mb-6">
                Expert training designed to match industry demands
              </p>
            </div>

            {/* Content Paragraphs */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-base md:text-lg">
                <span className="font-bold text-gray-800">
                  PACS Global's Job Training Programs
                </span>{" "}
                are meticulously designed to equip you with the exact skills
                employers are seeking. We understand the gap between education
                and employment, and our training bridges that gap effectively.
              </p>

              <p className="text-base md:text-lg">
                Our training modules are developed by industry experts who have
                extensive experience in their respective domains. Each program
                is tailored to reflect current market trends and employer
                expectations, ensuring you're always learning relevant,
                up-to-date skills.
              </p>

              <p className="text-base md:text-lg">
                We focus on both technical competencies and essential soft
                skills that make you a well-rounded professional. From
                communication and teamwork to problem-solving and leadership, we
                nurture all aspects of your professional development.
              </p>

              <p className="text-base md:text-lg">
                Our trainers are carefully selected based on their expertise and
                ability to mentor aspiring professionals. They bring real-world
                insights into the classroom, making learning practical,
                engaging, and immediately applicable to your career.
              </p>

              <p className="text-base md:text-lg font-semibold text-gray-800">
                With PACS Global's job training, you're not just learning—you're
                preparing to excel in your chosen career path.
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
                  src={jobTraining}
                  alt="Professional training session"
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

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div
          className="text-center mb-12 transition-all duration-700"
          style={{
            opacity: scrollY > 500 ? 1 : 0,
            transform: scrollY > 500 ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Our Training
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
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <GraduationCap className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Expert Trainers
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Learn from industry professionals with years of practical
              experience and proven track records.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Industry-Aligned
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Curriculum designed to meet current industry standards and
              employer expectations.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Practical Focus
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Hands-on training with real-world projects that prepare you for
              actual job scenarios.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobTraining;
