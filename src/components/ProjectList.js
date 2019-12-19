import React, { useState } from 'react';
import { Grid, Image } from 'semantic-ui-react'

// import components
import ProjectListItem from './ProjectListItem';

// import projects
import projects from '../project-data/projects';

export default function ProjectList() {
  
  return (
    <Grid celled="internally">
      {projects.map((project) => (
      <ProjectListItem project={project} />
        )
      )}
    </Grid>
  );
};
