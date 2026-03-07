import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

// Pages
import About from "./pages/About";
import Collections from "./pages/Collections";
import Crafts from "./pages/Crafts";
import Contact from "./pages/Contact";
import GetEnquiry from "./pages/GetEnquiry";
import ExploreStore from "./pages/ExploreStore";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/FooterWithCTA";
import HeroSection from "./components/HeroSection"; // Yahan import kar

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Yahan Home ki jagah HeroSection component use kar */}
        <Route path="/" element={<HeroSection />} />

        <Route path="/about" element={<About />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/crafts" element={<Crafts />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />
        <Route path="/enquiry" element={<GetEnquiry />} />
        <Route path="/store" element={<ExploreStore />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
