import React from 'react';
import './App.css';

// import components
import PersonalProfile from './components/PersonalProfile';
import ProjectList from './components/ProjectList';

function App() {
  return (
    <div className="App" style={{ flexDirection: 'row' }}>
      <PersonalProfile />
      <ProjectList />
    </div>
  );
}

export default App;
