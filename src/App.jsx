import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from "react-helmet-async";
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import OurStory from './pages/OurStory';
import SuccessStories from './pages/SuccessStories';
import ContactUs from './pages/ContactUs';
import RegisterNow from './pages/RegisterNow';

// Course Pages
import OilAndGasPiping from './pages/courses/OilAndGasPiping';
import MechanicalQA from './pages/courses/MechanicalQA';
import PipingAndPipeline from './pages/courses/PipingAndPipeline';
import NDTLevel2 from './pages/courses/NDTLevel2';
import FullStackDevelopment from './pages/courses/FullStackDevelopment';
import DiplomaFireSafety from './pages/courses/DiplomaFireSafety';
import Nebosh from './pages/courses/Nebosh';

// Service Pages
import OnSiteInternship from './pages/services/OnSiteInternship';
import JobTraining from './pages/services/JobTraining';
import HRRecruitment from './pages/services/HRRecruitment';

const App = () => {
  return (
    <HelmetProvider>
    <Router>
      <Header />
      <main className="flex-grow">
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path='/register-now' element={<RegisterNow />}></Route>

          {/* Course Routes */}
          <Route path="/courses/oil-and-gas-piping" element={<OilAndGasPiping />} />
          <Route path="/courses/mechanical-qa-qc" element={<MechanicalQA />} />
          <Route path="/courses/piping-and-pipeline" element={<PipingAndPipeline />} />
          <Route path="/courses/ndt-level-2" element={<NDTLevel2 />} />
          <Route path="/courses/full-stack-development" element={<FullStackDevelopment />} />
          <Route path="/courses/diploma-fire-safety" element={<DiplomaFireSafety />} />
          <Route path="/courses/nebosh" element={<Nebosh />} />

          {/* Service Routes */}
          <Route path="/services/onsite-internship" element={<OnSiteInternship />} />
          <Route path="/services/job-training" element={<JobTraining />} />
          <Route path="/services/hr-recruitment" element={<HRRecruitment />} />
        </Routes>
      </main>
      <Footer />
    </Router>
    </HelmetProvider>
  );
};

export default App;