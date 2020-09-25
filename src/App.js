import React from 'react';
import './output.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Heading from './Views/Heading';
import Skills from './Views/Skills';
import About from './Views/About';
import Contact from './Views/Contact'

function App() {
  return (
    <>
      <Header />
      <div className="w-full">
        <Heading />
        <About />
        <Skills />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
