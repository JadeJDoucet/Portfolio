import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

export default function ProjectListItem({ project }) {
  const { name, description, coverImage } = project;

  return (
    <Grid.Row>
      <Grid.Column width={3}>
        <Image src={coverImage} />
      </Grid.Column>
      <Grid.Column>
        <h4>{name}</h4>
        <p>{description}</p>
      </Grid.Column>
    </Grid.Row>
  );
}