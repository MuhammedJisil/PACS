import { useState, useEffect } from "react";
import { Target, Users, Award, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import heroBg from "../../assets/jobTraining.jpeg";
import mainImage from "../../assets/fireandsafety.jpg";

const DiplomaFireSafety = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Other courses list (excluding current course)
  const otherCourses = [
    {
      title: "Certification Business Analyst Operations",
      path: "/courses/certification-business-analyst-operation",
    },
    { title: "Diploma Logistics SCM", path: "/courses/diploma-logistics-scm" },
    {
      title: "Diploma Welding Technology",
      path: "/courses/diploma-welding-technology",
    },
    {
      title: "Full Stack Development",
      path: "/courses/full-stack-development",
    },
    { title: "Mechanical QA", path: "/courses/mechanical-qa" },
    { title: "NDT Level 2", path: "/courses/ndt-level2" },
    { title: "NEBOSH", path: "/courses/nebosh" },
    { title: "Oil and Gas Piping", path: "/courses/oil-and-gas-piping" },
    { title: "Piping and Pipeline", path: "/courses/piping-and-pipeline" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Diploma in Fire Safety | PACS</title>
        <meta
          name="description"
          content="Become a certified Fire Safety professional with comprehensive training in fire prevention, protection, and emergency response at PACS Global."
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
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/90"></div>

        <div className="relative max-w-7xl mx-auto text-center">
          <h1
            className="text-4xl md:text-6xl font-bold mb-6 transition-all duration-700"
            style={{
              opacity: scrollY < 100 ? 1 : 0.9,
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          >
            Diploma in Fire Safety
          </h1>
          <p
            className="text-lg md:text-xl text-orange-300 max-w-2xl mx-auto font-medium transition-all duration-700"
            style={{
              opacity: scrollY < 100 ? 1 : 0.9,
              transform: `translateY(${scrollY * 0.15}px)`,
            }}
          >
            Protect lives and property with professional fire safety expertise
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
                Professional Fire Safety Diploma
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mb-4"></div>
              <p className="text-xl md:text-2xl font-semibold text-orange-600 mb-6">
                Comprehensive training in fire prevention and protection
              </p>
            </div>

            {/* Content Paragraphs */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-base md:text-lg">
                <span className="font-bold text-gray-800">
                  PACS Global's Diploma in Fire Safety
                </span>{" "}
                program provides extensive training in fire prevention,
                protection systems, emergency response, and safety management.
                Our curriculum is designed to meet National Fire Protection
                Association (NFPA) and national fire safety standards.
              </p>

              <p className="text-base md:text-lg">
                Learn fire chemistry, hazard identification, risk assessment,
                fire detection and alarm systems, fire suppression systems,
                emergency evacuation planning, and incident command. Master the
                use of fire safety equipment and firefighting techniques.
              </p>

              <p className="text-base md:text-lg">
                The program covers fire safety regulations, building codes,
                industrial fire safety, hazardous materials handling, fire
                investigation, and safety auditing. You'll gain practical
                experience through hands-on training with fire extinguishers,
                fire hydrants, and other firefighting equipment.
              </p>

              <p className="text-base md:text-lg">
                Our expert instructors bring real-world experience from fire
                departments, industrial safety, oil & gas, and construction
                sectors. Students receive comprehensive training in both
                theoretical knowledge and practical firefighting skills.
              </p>

              <p className="text-base md:text-lg font-semibold text-gray-800">
                Join PACS Global and become a certified fire safety
                professional. Our graduates secure positions as fire safety
                officers, safety managers, and fire consultants in industries
                worldwide.
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
                  alt="Fire Safety Training"
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
            transform: scrollY > 500 ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Key Learning Areas
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
          {/* Area 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Fire Prevention & Protection
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Master fire chemistry, hazard analysis, fire detection systems,
              suppression systems, and building fire safety design principles.
            </p>
          </div>

          {/* Area 2 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Emergency Response
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Learn firefighting techniques, rescue operations, emergency
              evacuation procedures, and incident command systems.
            </p>
          </div>

          {/* Area 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Safety Management
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Gain expertise in safety auditing, risk assessment, fire
              investigation, compliance with regulations, and safety program
              management.
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
              transform: scrollY > 800 ? "translateY(0)" : "translateY(30px)",
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Explore Other Courses
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              Discover more career opportunities with our diverse course
              offerings
            </p>
          </div>

          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-200"
            style={{
              opacity: scrollY > 800 ? 1 : 0,
              transform: scrollY > 800 ? "translateY(0)" : "translateY(30px)",
            }}
          >
            {otherCourses.map((course, index) => (
              <Link
                key={index}
                to={course.path}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group flex items-center justify-between"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">
                    {course.title}
                  </h3>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiplomaFireSafety;
