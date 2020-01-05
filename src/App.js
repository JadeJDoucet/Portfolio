import React from 'react';
import './App.css';

// import components
import PersonalProfile from './components/PersonalProfile';
import Projects from './components/Projects.js';
import NavBar from './components/NavBar.js';
import About from './components/About.js';
import Tools from './components/Tools.js';
import Contact from './components/Contact.js';

function App() {
  // To do: add clickable links to sections of page
  const styles = {
    appWrapper: {
      display: 'inline',
    },
  };

  const { appWrapper } = styles;

  return (
    <div style={appWrapper}>
      <NavBar />
      <PersonalProfile />
      <About />
      <Projects />
      <Tools />
    </div>
  );
}

export default App;
