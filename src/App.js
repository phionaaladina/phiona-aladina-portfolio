// import React from "react";
// import './App.css';

// import Navbar from "./components/Navbar";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import Footer from "./components/Footer";
// import Home from "./pages/Home";

// function App() {
//   return (
//     <div className="d-flex flex-column min-vh-100">
//       {/* Other components here */}
//       <Navbar />
//       <Home />
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import MyStory from "./pages/MyStory";
// import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-story" element={<MyStory />} />
           <Route path="/skills" element={<Skills />} />
           <Route path="/contact" element={<Contact />} /> 
           <Route path="/projects" element={<Projects />} />
           <Route path="/gallery" element={<Gallery />} />
          {/* <Route path="/skills" element={<Skills />} /> */}
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
