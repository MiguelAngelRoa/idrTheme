import logo from "./logo.svg";
import "./App.css";
import ContactHeader from "./components/ContactHeader/ContactHeader.tsx";
import IdrHeader from "./components/IdrHeader/IdrHeader.tsx";
import IdrFooter from "./components/IdrFooter/IdrFooter.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.tsx";
import ServiceCalibration from "./Pages/ServiceCalibration/ServiceCalibration.tsx";
import Training from "./Pages/Training/Training.tsx";
import ContactUs from "./Pages/ContactUs/ContactUs.tsx";


function App() {
  return (
    <>
      <BrowserRouter>
        <ContactHeader />
        <IdrHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service-calibration" element={<ServiceCalibration />} />
          <Route path="/training" element={<Training />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
      <IdrFooter />
    </>
  );
}

export default App;
