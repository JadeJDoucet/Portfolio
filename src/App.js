import React from 'react';
import './App.css';

// import components
import PersonalProfile from './components/PersonalProfile';
import Projects from './components/Projects';
import NavBar from './components/NavBar';
import About from './components/About.js';

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
    </div>
  );
}

export default App;
