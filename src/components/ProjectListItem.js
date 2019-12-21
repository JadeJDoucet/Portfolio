import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

export default function ProjectListItem({ project }) {
  const { name, description, coverImage } = project;

  const imageStyle = {
    maxHeight: '80%',
  }

  const rowStyle = {
    // marginTop: '4.05%',
    // marginBottom: '5%',
  }

  return (
    <Grid.Row style={rowStyle}>
      <Grid.Column width={3}>
        <Image src={coverImage} rounded style={imageStyle}/>
      </Grid.Column>
      <Grid.Column width={6}>
        <h1>{name}</h1>
        <p>{description}</p>
      </Grid.Column>
    </Grid.Row>
  );
}