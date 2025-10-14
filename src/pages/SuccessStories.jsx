import React, { useState, useEffect } from 'react';
import { Award, Briefcase, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import heroBg from '../assets/image-1.png';

const SuccessStories = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sample data structure - Replace with actual data
  const successCandidates = [
    { id: 1, name: "AKHIL PS", position: "Mechanical Technician", image: "/assets/Akhil_PS.jpg" },
    { id: 2, name: "ASLAM N", position: "Mechanical Technician", image: "/assets/Aslam_N.png" },
    { id: 3, name: "SACHIN SAJU", position: "Mechanical Technician", image: "/assets/Sachin_Saju.png" },
    { id: 4, name: "VAISHAK K", position: "Mechanical Technician", image: "/assets/Vaishak_K.jpg" },
    
    { id: 5, name: "AMAL JAMES TOM", position: "Trainee Engineer in Saudi Arabia", image: "/assets/Amal_James_Tom.jpg" },
    { id: 6, name: "HASEEBUDDIN", position: "Trainee Engineer in Saudi Arabia", image: "/assets/Haseebuddin.jpg" },
    { id: 7, name: "ARJUN TV", position: "QC Inspector at Nashik", image: "/assets/Arjun_Tv.jpg" },
    { id: 8, name: "AMAL THOMAS ", position: "Trainee Engineer in Saudi Arabia", image: "/assets/Amal_Thomas.jpg" },
    
      { id: 9, name: "SILJO SAJU", position: "Trainee Engineer in Saudi Arabia", image: "/assets/Siljo_Saju.jpg" },
  { id: 10, name: "ANUKUTTAN", position: "Stand by Man in Saudi", image: "/assets/Anukuttan.jpg" },
  { id: 11, name: "ROYMON JOHNSON", position: "Trainee Engineer in Saudi Arabia", image: "/assets/Roymon_Johnson.jpg" },
  { id: 12, name: "SHIJIN TP", position: "Mechanical Technician", image: "/assets/Shijin_TP.jpg" },
  { id: 13, name: "MUBARIS", position: "Trainee Engineer in Saudi Arabia", image: "/assets/Mubaris.jpg" },
  { id: 14, name: "NIBIN", position: "Trainee Engineer in Saudi Arabia", image: "/assets/Nibin.jpg" },
  { id: 15, name: "ANANDHU SASIDHARAN", position: "Mechanical Technician in Saudi", image: "/assets/Anandhu_Sasidharan.jpg" },
  { id: 16, name: "ALVIN JOSEPH", position: "Trainee Engineer in Saudi", image: "/assets/Alvin_Joseph.jpg" },
  { id: 17, name: "AMAL", position: "Trainee Engineer in Saudi", image: "/assets/Amal.jpg" },
  { id: 18, name: "MOHAMMAD ZAMIL", position: "Mechanical Engineer in Saudi", image: "/assets/Mohammad_Zamil.jpg" },
  { id: 19, name: "SHERIF AHAMED SHIBAZ", position: "QC Supervisor in Mangalore", image: "/assets/Sherif_Ahamed_Shibaz.jpg" },
  { id: 20, name: "JOEL SANTHMAYOR", position: "QC Instructor in Mangalore", image: "/assets/Joel_Santhmayor.jpg" },
  { id: 21, name: "MIDHUN KB", position: "QC Engineer in Chennai", image: "/assets/Midhun_KB.jpg" },
  { id: 22, name: "RAHUL POOJARY", position: "Trainee Engineer in Saudi Arabia", image: "/assets/Rahul_Poojary.jpg" },
  { id: 23, name: "SHEIK SUHAN SAHEB", position: "Trainee Engineer in Saudi Arabia", image: "/assets/Sheik_Suhan_Saheb.jpg" },
  { id: 24, name: "MOHAMMED RILWAN", position: "QC Supervisor in Mangalore", image: "/assets/Mohammed_Rilwan.jpg" },
  { id: 25, name: "VISHNU P", position: "QC Instructor in Chennai", image: "/assets/Vishnu_P.jpg" },
  { id: 26, name: "MUBAHIL", position: "QC Engineer in Mumbai", image: "/assets/Mubahil.jpg" },
  { id: 27, name: "MUHAMMED MUSTHAQ", position: "Mechanical Technician in Saudi", image: "/assets/Muhammed_Musthaq.jpg" },
  { id: 28, name: "SANDESH", position: "Mechanical Engineer in Saudi Arabia", image: "/assets/Sandesh.jpg" },
  { id: 29, name: "MOHAMMED SHAKEEB", position: "QC Supervisor in Qatar", image: "/assets/Mohammed_Shakeeb.jpg" },
  { id: 30, name: "SURAJ KUMAR", position: "QC Inspector in Bangalore", image: "/assets/Suraj_Kumar.jpg" },
  { id: 31, name: "ASHITH A", position: "Mechanical Engineer at JBM Auto", image: "/assets/Ashith_A.jpg" },
  { id: 32, name: "ANAND RATNAKAR", position: "Mechanical Engineer at HPCL", image: "/assets/Anand_Ratnakar_1.jpg" },
  { id: 33, name: "SAHADUDHEEN", position: "Mechanical Engineer at Mass Engineers", image: "/assets/Sahadudheen_1.jpg" },
  { id: 34, name: "AMAL SHANKAR", position: "QC Engineer at QACA Chennai", image: "/assets/Amal_Shankar.jpg" },
  { id: 35, name: "ASHIRWAD", position: "Mechanical Engineer at Crystal Industries", image: "/assets/Ashirwad.jpg" },
  { id: 36, name: "AKHIL KURIAN", position: "QC Inspector at Royal Enfield", image: "/assets/Akhil_Kurian.jpg" },
  { id: 37, name: "SREEHARI", position: "Engineering Trainee at Sharada Motors", image: "/assets/Sreehari.jpg" },
  { id: 38, name: "BILAL", position: "QC Inspector at QACA Chennai", image: "/assets/Bilal.jpg" },
  { id: 39, name: "JAYASHANKAR", position: "Mechanical Engineer at Tenneco Bangalore", image: "/assets/Jayashankar.jpg" },
  { id: 40, name: "MASHOOD ALI", position: "Mechanical Engineer at Tenneco Bangalore", image: "/assets/Mashood_Ali.jpg" },
  { id: 41, name: "MIDHUN KJ", position: "Design Engineer in Bangalore", image: "/assets/Midhun_KJ.jpg" },
  { id: 42, name: "NIKESH", position: "Mechanical Engineer at Neels Auto", image: "/assets/Nikesh.jpg" },
  { id: 43, name: "RAMEES", position: "Engineer at SIGMA NDT Surat", image: "/assets/Ramees.jpg" },
  { id: 44, name: "RAFI", position: "Mechanical Engineer at Lohatec Mangalore", image: "/assets/Rafi.jpg" },
  { id: 45, name: "WARID", position: "Mechanical Engineer at Tenneco Bangalore", image: "/assets/Warid.jpg" },
  { id: 46, name: "SHIKHIL M", position: "Mechanical Engineer at Mass Engineers", image: "/assets/Shikhil_M.jpg" },
  { id: 47, name: "HISHAM", position: "Mechanical Engineer at Lohatech", image: "/assets/Hisham.jpg" },
  { id: 48, name: "ABOOBACKER SALMAN", position: "Mechanical Engineer at Lohatec Mangalore", image: "/assets/Aboobacker_Salman.jpg" },
  { id: 49, name: "JOMON", position: "QC Inspector at Pioneer Bangalore", image: "/assets/Jomon.jpg" },
  { id: 50, name: "BINU DAVIS", position: "QC Inspector at LGB Coimbatore", image: "/assets/Binu_Davis.jpg" },
  { id: 51, name: "AKHIL NR", position: "Mechanical Engineer at Mass Engineers", image: "/assets/Akhil_NR.jpg" },
  { id: 52, name: "JOSEPH", position: "QC Inspector at Pioneer Chennai", image: "/assets/Joseph.jpg" },
  { id: 53, name: "ANAND RATNAKAR", position: "Mechanical Engineer at HPCL", image: "/assets/Anand_Ratnakar_2.jpg" },
  { id: 54, name: "SAHADUDHEEN", position: "Mechanical Engineer at Mass Engineers", image: "/assets/Sahadudheen_2.jpg" },

  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Success Stories | PACS</title>
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
          <div 
            className="inline-flex items-center justify-center w-20 h-20 bg-orange-500/20 rounded-full mb-6"
            style={{
              opacity: scrollY < 100 ? 1 : 0.9,
              transform: `translateY(${scrollY * 0.05}px)`
            }}
          >
            <Star className="w-10 h-10 text-orange-400" />
          </div>
          <h1 
            className="text-4xl md:text-6xl font-bold mb-6 transition-all duration-700"
            style={{
              opacity: scrollY < 100 ? 1 : 0.9,
              transform: `translateY(${scrollY * 0.1}px)`
            }}
          >
            Our Success Stories
          </h1>
          <p 
            className="text-lg md:text-xl text-orange-300 max-w-2xl mx-auto font-medium transition-all duration-700"
            style={{
              opacity: scrollY < 100 ? 1 : 0.9,
              transform: `translateY(${scrollY * 0.15}px)`
            }}
          >
            Celebrating the achievements of our talented students
          </p>
        </div>
      </div>

      {/* Candidates Section Header */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div 
          className="text-center mb-12 transition-all duration-700"
          style={{
            opacity: scrollY > 50 ? 1 : 0,
            transform: scrollY > 50 ? 'translateY(0)' : 'translateY(30px)'
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Candidates Who Made Us Proud
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet our exceptional alumni who have achieved remarkable success in their careers. 
            Their dedication and hard work continue to inspire us every day.
          </p>
        </div>

        {/* Candidates Grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 transition-all duration-700"
          style={{
            opacity: scrollY > 100 ? 1 : 0,
            transform: scrollY > 100 ? 'translateY(0)' : 'translateY(30px)'
          }}
        >
          {successCandidates.map((candidate, index) => (
            <div 
              key={candidate.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              style={{
                animationDelay: `${index * 50}ms`
              }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-gradient-to-br from-orange-100 to-blue-100 aspect-square">
                <img 
                  src={candidate.image}
                  alt={candidate.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-gray-800 text-base mb-2 line-clamp-1">
                  {candidate.name}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2 leading-snug">
                  {candidate.position}
                </p>
                {/* Success Badge */}
                <div className="mt-3 flex items-center space-x-1">
                  <Award className="w-4 h-4 text-orange-500" />
                  <span className="text-xs text-orange-600 font-medium">Success Story</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};

export default SuccessStories;