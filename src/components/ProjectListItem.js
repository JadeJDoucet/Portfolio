import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

export default function ProjectListItem({ project }) {
  const { name, description } = project;

  return (
    <Grid.Row>
      <Grid.Column width={3}>
        <Image src={require('../headshots/headshot-close.jpg')} />
      </Grid.Column>
      <Grid.Column>
        <h4>{name}</h4>
        <p>{description}</p>
        <p></p>
      </Grid.Column>
    </Grid.Row>
  );
}