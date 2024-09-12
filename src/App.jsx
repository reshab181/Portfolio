import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="text-gray-800">
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;