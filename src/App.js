import React from 'react';
import './App.css';

// import components
import PersonalProfile from './components/PersonalProfile';
import Projects from './components/Projects.js';
import NavBar from './components/NavBar.js';
import About from './components/About.js';
import Tools from './components/Tools.js';
// import Contact from './components/Contact.js';

function App() {
  const styles = {
    appWrapper: {
      display: 'inline',
      overflowX: 'hidden'
    },
  };

  const { appWrapper } = styles;

  return (
    <div style={appWrapper}>
      <NavBar />
      <h3 style={{ position: 'absolute', color: '#fff' }}>This is currently under construction</h3>
      <PersonalProfile />
      <About />
      <Projects />
      <Tools />
    </div>
  );
}

export default App;
