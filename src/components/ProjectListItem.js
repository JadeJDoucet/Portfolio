import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

export default function ProjectListItem() {

  return (
    <Grid.Row>
      <Grid.Column width={3}>
        <Image src={require('../headshots/headshot-close.jpg')} />
      </Grid.Column>
      <Grid.Column>
        Something about my project here
      </Grid.Column>
    </Grid.Row>
  );
}