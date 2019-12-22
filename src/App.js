import React from 'react';
import './App.css';
import { Grid } from 'semantic-ui-react';

// import components
import PersonalProfile from './components/PersonalProfile';
import ProjectList from './components/ProjectList';
import NavBar from './components/NavBar';

function App() {
  const styles = {
    webStyle: {
      marginTop: '4%', // place items under nav bar
    },
    mobileStyle: {
      marginTop: '25%', // place items under nav bar
    },
    listCol: {
      marginLeft: '17.5%',
      marginTop: '-1.6%'
    },
    profileCol: {
      marginLeft: 5,
    }
  }
  const { webStyle, mobileStyle, listCol, profileCol } = styles;

  const mobileView = () => (
    <Grid>
      <NavBar />
      <Grid.Row width={5} style={mobileStyle}>
        <PersonalProfile mobile/>
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
          <Grid columns={2}>
            <Grid.Column width={4} style={profileCol}>
              <PersonalProfile />
            </Grid.Column>
            <Grid.Column width={14} style={listCol}>
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
