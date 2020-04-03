import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';



function App() {
  return (
    <Router >
    <div className="App">
    <Navbar />
    <Route exact path={process.env.PUBLIC_URL + '/'}>
    <Home />
    </Route>
    <Route path={process.env.PUBLIC_URL+ "/about"}>
    <About />
    </Route>
    <Route path={process.env.PUBLIC_URL+ "/education"}>
    <Education />
    </Route>
    <Route path={process.env.PUBLIC_URL+ "/skills"}>
    <Skills />
    </Route>
    <Route path={process.env.PUBLIC_URL+ "/contact"}>
    <Contact />
    </Route>
    </div>
    </Router>
    );
  }
  
  export default App;
  