import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
// Pages
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import "./App.css";
// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
