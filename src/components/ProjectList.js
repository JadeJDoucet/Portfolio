import React from 'react';
import { Grid } from 'semantic-ui-react'

// import components
import ProjectListItem from './ProjectListItem';

// import projects
import projects from '../project-data/projects';

export default function ProjectList() {
  
  return (
    <Grid>
      {projects.map((project, i) => (
      <ProjectListItem key={i} project={project} />
        )
      )}
    </Grid>
  );
};
