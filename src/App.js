import React from 'react';
import './App.css';
import { Grid } from 'semantic-ui-react';

// import components
import PersonalProfile from './components/PersonalProfile';
import ProjectList from './components/ProjectList';
import NavBar from './components/NavBar';

function App() {
  const appStyle = {
    marginTop: '4%', // place items under nav bar
  }
  let RowOrCol = Grid.Column;
  if (window.innerWidth < 1000) {
    RowOrCol = Grid.Row;
  }

  return (
    <div>
      <NavBar />
      <div
      style={appStyle}
      >
        <Grid>
          <RowOrCol width={3}>
            <PersonalProfile />
          </RowOrCol>
          <RowOrCol width={12}>
            <ProjectList />
          </RowOrCol>
        </Grid>
      </div>
    </div>
  );
}

export default App;
