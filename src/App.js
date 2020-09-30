import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Heading from './Views/Heading';
import Skills from './Views/Skills';
import About from './Views/About';
import Contact from './Views/Contact';
import './styles/app.css';
import './styles/custom.css';
import './styles/heading.css';


function App() {
  return (
    <>
      <div className="hidden sm:w-1/5 md:w-2/5 lg:w-3/5 xl:w-4/5">x</div>
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
