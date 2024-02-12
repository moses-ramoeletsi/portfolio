import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ContactMe from './components/ContactMe/ContactMe';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Footer from './components/footer/Footer';


function App() {
  return (
    <>
    <Navbar />
        <div  className='container'>
            <Hero/>
            <Skills/>
            <WorkExperience />
            <ContactMe  />
        </div>
        <Footer />

    </>
  );
}

export default App;
