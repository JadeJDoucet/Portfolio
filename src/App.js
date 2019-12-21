import React from 'react';
import './App.css';
import { Grid } from 'semantic-ui-react';

// import components
import PersonalProfile from './components/PersonalProfile';
import ProjectList from './components/ProjectList';
import NavBar from './components/NavBar';

function App() {
  const appStyle = {
    marginTop: '4%',
  }

  return (
    <div>
      <NavBar />
      <div
      style={appStyle}
      >
        <Grid className="stackable">
          <Grid.Row>
            <PersonalProfile />
          </Grid.Row>
          <Grid.Row>
            <ProjectList />
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
}

export default App;
