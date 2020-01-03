import React from 'react';
import './App.css';

// import components
import PersonalProfile from './components/PersonalProfile';
// import ProjectList from './components/ProjectList';
// import NavBar from './components/NavBar';

function App() {
  return (
    <div style={{ backgroundColor: 'rgb(51, 51, 51)', display: 'flex', margin: 'auto' }}>
     <PersonalProfile />
    </div>
  );
}

export default App;
