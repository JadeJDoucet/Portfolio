import React, { useState } from 'react';

// import projects
import projects from '../../project-data/projects';

export default function ProjectList() {
  
  return (
    <ul>
      {projects.map((project) => (
      <li>
        {project.projectName}
        {project.description}
      </li>
        )
      )}
    </ul>
  );
};
