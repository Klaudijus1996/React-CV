import React from 'react';
import './output.css';
import Page from 'react-page-loading';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Heading from './Views/Heading';
import Skills from './Views/Skills';
import About from './Views/About';
import Contact from './Views/Contact'

function App() {
  return (
    <>
      <Page
        loader={"bar"}
        color={"#A9A9A9"}
        size={4}
        duration={1}
      >
        <Header />
        <div className="w-full">
          <Heading />
          <About />
          <Skills />
          <Contact />
        </div>
        <Footer />
      </Page>
    </>
  );
}

export default App;
