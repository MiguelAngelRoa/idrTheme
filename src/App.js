import logo from "./logo.svg";
import "./App.css";
import ContactHeader from "./components/ContactHeader/ContactHeader.tsx";
import IdrHeader from "./components/IdrHeader/IdrHeader.tsx";
import IdrFooter from "./components/IdrFooter/IdrFooter.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.tsx";
import ServiceCalibration from "./Pages/ServiceCalibration/ServiceCalibration.tsx";

function App() {
  return (
    <>
      <ContactHeader />
      <IdrHeader />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service-calibration" element={<ServiceCalibration />} />
        </Routes>
      </BrowserRouter>
      <IdrFooter />
    </>
  );
}

export default App;
