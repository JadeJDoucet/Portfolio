import React from 'react';
import './App.css';

// import components
import PersonalProfile from './components/PersonalProfile';
// import ProjectList from './components/ProjectList';
import NavBar from './components/NavBar';

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
    </div>
  );
}

export default App;
