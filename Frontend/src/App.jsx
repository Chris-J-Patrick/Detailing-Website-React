import Scroll from "./components/Scroll";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Services from "./components/Services/Services";
import Header from "./components/Header/Header";
import Testimonials from "./components/Testimonials/Testimonials";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import HomePage from "./components/HomePage/HomePage";
import Rewards from "./components/Rewards/Rewards";
import ServiceCompare from "./components/ServiceCompare/ServiceCompare";

function App() {
  return (
    <Router>
      <Scroll />
      <div className="AppContainer">
        <div className="NavContainer">
          <Header />
        </div>

        <div className="ContentContainer">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/services" element={<Services />} />
            <Route path="/rewards" element={<Rewards />} />
          </Routes>
        </div>
        <div className="FooterContainer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
