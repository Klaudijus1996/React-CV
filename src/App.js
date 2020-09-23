import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './output.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
// import Home from './Views/Home';
import Heading from './Views/Heading'
import About from './Views/About';
import Contact from './Views/Contact'


// import Header from './Components/Header';

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