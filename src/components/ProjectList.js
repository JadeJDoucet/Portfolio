import React from 'react';
import { Grid } from 'semantic-ui-react'

// import components
import ProjectListItem from './ProjectListItem';

// import projects
import projects from '../project-data/projects';

export default function ProjectList() {
  const gridStyle = {
    marginLeft: '17%', // aligns next to profile card
    // zIndex: 800
  };

  return (
    <Grid style={gridStyle} className="float">
      {projects.map((project, i) => (
      <ProjectListItem key={i} project={project} />
        )
      )}
    </Grid>
  );
};
