import {React, useEffect, useState} from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { motion } from 'framer-motion';

// Project Imports
import Home from "./pages/Home";
import CallForPapers from "./pages/CallForPapers";
import Committee from "./pages/Committee";
import Header from "./components/Header";
import ContactUs from "./pages/ContactUs";
import ImportantDates from "./pages/ImportantDates";
import Registration from "./pages/Registration";
import Program from "./pages/Program";
import RegularPaperSubmission from "./pages/RegularPaperSubmission";
import Sponsorship from "./pages/Sponsorship";
import Schedule from "./pages/Schedule";
import Footer from "./components/Footer";
import PhotoGallary from "./pages/PhotoGallary";
import Brochure from "./pages/Brochure";
import KeynoteSpeakers from "./pages/KeynoteSpeakers";
import OnlinePresentation from "./pages/OnlinePresentation";
import OfflinePresentation from "./pages/OfflinePresentation";
import programSchedule from "/documents/ConferenceSchedule_E2A2023.pdf"
import { useNavigate } from "react-router-dom";


const DownloadDocument = () => {
  const navigate = useNavigate();

  const handleDownload = () => {
    window.location.href = programSchedule;
  };
  React.useEffect(() => {
    handleDownload();
    navigate('/');
  }, [navigate]);
  return <div />;
};

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/call-for-papers" exact element={<CallForPapers />} />
          <Route path="/committee" exact element={<Committee />} />
          <Route path="/contact-us" exact element={<ContactUs />} />
          <Route path="/important-dates" exact element={<ImportantDates />} />
          <Route path="/author-registration" exact element={<Registration />} />
          <Route path="/author-instructions-online" exact element={<OnlinePresentation />} />
          <Route path="/author-instructions-offline" exact element={<OfflinePresentation />} />
          <Route path="/author-regular-paper-submission" exact element={<RegularPaperSubmission />} />
          <Route path="/program" exact element={<Program />} />
          <Route path="/keynote-speakers" exact element={<KeynoteSpeakers />} />
          <Route path="/sponsorship" exact element={<Sponsorship />} />
          <Route path="/program-schedule" exact element={<DownloadDocument/>} />
          <Route path="/program-brochure" exact element={<Brochure />} />
          <Route path="/gallary" exact element={<PhotoGallary />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
