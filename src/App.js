import logo from "./logo.svg";
import "./App.css";
import ContactHeader from "./components/ContactHeader/ContactHeader.tsx";
import IdrHeader from "./components/IdrHeader/IdrHeader.tsx";
import IdrFooter from "./components/IdrFooter/IdrFooter.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.tsx";

function App() {
  return (
    <>
      <ContactHeader />
      <IdrHeader />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <IdrFooter />
    </>
  );
}

export default App;
