import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
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
      {/* <Home /> */}
      <Router>
        <Header />
        <div className="w-full">
          <Switch>
            <Route exact path="/">
              <Heading />
              <About />
              <Skills />
              <Contact />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
