import { useState, useEffect } from "react";
import { Target, Users, Award, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import heroBg from "../../assets/jobTraining.jpeg";
import mainImage from "../../assets/mechanicalqaqc.jpeg";

const MechanicalQA = () => {
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
    { title: "Diploma Fire Safety", path: "/courses/diploma-fire-safety" },
    { title: "Diploma Logistics SCM", path: "/courses/diploma-logistics-scm" },
    {
      title: "Diploma Welding Technology",
      path: "/courses/diploma-welding-technology",
    },
    {
      title: "Full Stack Development",
      path: "/courses/full-stack-development",
    },
    { title: "NDT Level 2", path: "/courses/ndt-level-2" },
    { title: "NEBOSH", path: "/courses/nebosh" },
    { title: "Oil and Gas Piping", path: "/courses/oil-and-gas-piping" },
    { title: "Piping and Pipeline", path: "/courses/piping-and-pipeline" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Mechanical QA/QC | PACS</title>
        <meta
          name="description"
          content="Excel in Mechanical Quality Assurance and Quality Control with comprehensive training and certification programs at PACS Global."
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
            Mechanical QA/QC
          </h1>
          <p
            className="text-lg md:text-xl text-orange-300 max-w-2xl mx-auto font-medium transition-all duration-700"
            style={{
              opacity: scrollY < 100 ? 1 : 0.9,
              transform: `translateY(${scrollY * 0.15}px)`,
            }}
          >
            Master quality assurance and quality control in mechanical
            engineering
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
                Comprehensive QA/QC Training Program
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mb-4"></div>
              <p className="text-xl md:text-2xl font-semibold text-orange-600 mb-6">
                Ensure excellence in mechanical quality standards
              </p>
            </div>

            {/* Content Paragraphs */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-base md:text-lg">
                <span className="font-bold text-gray-800">
                  PACS Global's Mechanical QA/QC
                </span>{" "}
                program is meticulously designed to provide you with in-depth
                knowledge of quality assurance and quality control processes in
                mechanical engineering. Our curriculum encompasses industry best
                practices and international quality standards.
              </p>

              <p className="text-base md:text-lg">
                Learn inspection techniques, quality management systems,
                documentation procedures, and compliance with ISO standards. Our
                expert faculty brings extensive experience from manufacturing,
                oil & gas, construction, and heavy engineering sectors.
              </p>

              <p className="text-base md:text-lg">
                The course covers material testing, welding inspection,
                dimensional inspection, equipment calibration, audit procedures,
                and non-conformance management. You'll gain practical exposure
                through hands-on training with inspection instruments and
                quality control tools.
              </p>

              <p className="text-base md:text-lg">
                Our training methodology emphasizes real-world applications and
                industry scenarios. Students work on actual inspection reports,
                quality plans, and control procedures, ensuring they are
                job-ready from day one.
              </p>

              <p className="text-base md:text-lg font-semibold text-gray-800">
                Join PACS Global and become a certified QA/QC professional. Our
                strong industry connections ensure excellent placement
                opportunities with leading manufacturing and construction
                companies worldwide.
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
                  alt="Mechanical QA/QC Quality Control"
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
              Quality Management Systems
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Master ISO 9001 standards, quality planning, documentation
              control, and implementation of effective QMS in organizations.
            </p>
          </div>

          {/* Area 2 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Inspection & Testing
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Learn various inspection techniques, material testing methods,
              welding inspection, and use of precision measuring instruments.
            </p>
          </div>

          {/* Area 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Compliance & Auditing
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Understand regulatory compliance, audit procedures,
              non-conformance handling, and corrective action implementation.
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

export default MechanicalQA;
