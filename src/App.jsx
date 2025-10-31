import '../src/index.css'
import Navbar from './components/Navbar'
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Services from './pages/Services.jsx'
import Projects from './pages/Projects.jsx'
import Blog from './pages/Blog.jsx'
import Career from './pages/Career.jsx'
import GetQuote from './pages/GetQuote.jsx'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    
    <Router>
      <Navbar />
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/career" element={<Career />} />
       <Route  path="/quote" element={<GetQuote />}/>
        
      </Routes>
       <Footer />
    </Router>

  )
}

