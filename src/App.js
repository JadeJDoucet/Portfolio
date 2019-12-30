import React, { useState } from 'react';
import './App.css';
import { Grid } from 'semantic-ui-react';

// import components
import PersonalProfile from './components/PersonalProfile';
import ProjectList from './components/ProjectList';
import NavBar from './components/NavBar';

function App() {
  const [contact, setContact] = useState(false);

  const styles = {
    webStyle: {
      marginTop: '3.8%', // place items under nav bar
    },
    mobileStyle: {
      marginTop: '14%', // place items under nav bar
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

  const mobileViewMain = () => (
    <Grid>
      <NavBar mobile setContact={setContact}/>
      <Grid.Row width={5} style={mobileStyle}>
        <PersonalProfile mobile/>
      </Grid.Row>
      <Grid.Row width={12}>
        <ProjectList mobile/>
      </Grid.Row>
    </Grid>
  )

  const desktopViewMain = () => (
    <div>
      <NavBar setContact={setContact}/>
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
  )

const toRender = () => {
  if (contact) {
    // To do: Add dynamic contact page
    return <div>contact page</div>
  } else {
    return window.innerWidth < 1000 ? mobileViewMain() : desktopViewMain();
  }
}

  return (
    <div>
      {toRender()}
    </div>
  );
}

export default App;
