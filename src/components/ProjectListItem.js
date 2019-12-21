import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

export default function ProjectListItem({ project }) {
  const { name, description, coverImage } = project;

  return (
    <Grid.Row style={{ marginTop: '4%' }}>
      <Grid.Column width={3}>
        <Image src={coverImage} rounded />
      </Grid.Column>
      <Grid.Column width={6}>
        <h4>{name}</h4>
        <p>{description}</p>
      </Grid.Column>
    </Grid.Row>
  );
}