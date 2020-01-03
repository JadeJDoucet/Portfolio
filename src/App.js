import React from 'react';
import './App.css';

// import components
import PersonalProfile from './components/PersonalProfile';
// import ProjectList from './components/ProjectList';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
    <NavBar />
    <PersonalProfile />
    </div>
  );
}

export default App;
