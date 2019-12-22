import React from 'react';
import './App.css';
import { Grid } from 'semantic-ui-react';

// import components
import PersonalProfile from './components/PersonalProfile';
import ProjectList from './components/ProjectList';
import NavBar from './components/NavBar';

function App() {
  const webStyle = {
    marginTop: '4%', // place items under nav bar
  }

  const mobileStyle = {
    marginTop: '25%',
  }

  const mobileView = () => (
    <Grid>
      <NavBar />
      <Grid.Row width={3} style={mobileStyle}>
        <PersonalProfile />
      </Grid.Row>
      <Grid.Row width={12}>
        <ProjectList />
      </Grid.Row>
    </Grid>
  )

  return (
    <div>
      {window.innerWidth < 1000 ? mobileView() : 
        <div>
        <NavBar />
        <div
        style={webStyle}
        >
          <Grid>
            <Grid.Column width={3}>
              <PersonalProfile />
            </Grid.Column>
            <Grid.Column width={12}>
              <ProjectList />
            </Grid.Column>
          </Grid>
        </div>
      </div>
      }
    </div>
  );
}

export default App;
