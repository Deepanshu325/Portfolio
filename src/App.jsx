
import React from 'react'
import Home from "../src/Pages/Home"
import Header from './Components/Common/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Resume from './Pages/Resume'
import Footer from './Components/Common/Footer'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div>
   
     <BrowserRouter>
     <Header/>
     <ToastContainer/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/resume" element={<Resume/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  )
}

export default App
