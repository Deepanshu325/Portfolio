
import React from 'react'
import Home from "../src/Pages/Home"
import Header from './Components/Common/Header'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import Resume from './Pages/Resume'
import Footer from './Components/Common/Footer'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

const App = () => {


  useEffect(() => {
  AOS.init({
    duration: 2000, // animation duration
    once: true,     // whether animation should happen only once
  });
}, []);


  return (
    <div>
   
     <HashRouter>
     <Header/>
     <ToastContainer/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/resume" element={<Resume/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/>
     </Routes>
     <Footer/>
     </HashRouter>
    </div>
  )
}

export default App
