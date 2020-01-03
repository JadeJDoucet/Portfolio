import React, { useState } from 'react';
import './App.css';
import { Grid } from 'semantic-ui-react';

// import components
import PersonalProfile from './components/PersonalProfile';
import ProjectList from './components/ProjectList';
import NavBar from './components/NavBar';

function App() {
  return (
    <div style={{ backgroundColor: 'rgb(51, 51, 51)' }}>
     <PersonalProfile />
    </div>
  );
}

export default App;
