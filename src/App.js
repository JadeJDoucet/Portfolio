import React from 'react';
import './App.css';

// import components
import PersonalProfile from './components/PersonalProfile';
import ProjectList from './components/ProjectList';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <div className="App">
        <PersonalProfile />
        <ProjectList />
      </div>
    </div>
  );
}

export default App;
