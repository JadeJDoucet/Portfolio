import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

export default function ProjectListItem({ project, mobile }) {
  const { name, description, coverImage, images } = project;

  const imageStyle = {
    maxHeight: '50em',
  }
  
  const hzList = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
  }

  const hzItem = {
    float: 'left',
    padding: 10,
  }

  return (
    <Grid.Row style={{ boxShadow: '0px 1px 5px grey', borderRadius: 5, marginBottom: 5 }}>
      <Grid.Column width={3} >
        <Image src={coverImage} rounded style={imageStyle} />
      </Grid.Column>
      <Grid.Column width={6}>
        <h1>{name}</h1>
        <p>{description}</p>
          {images.length ? 
              <ul style={hzList}>
            {images.map((img, i) => {
              return (
              <Image key={i} src={img} size={mobile ? 'tiny' : 'small'} rounded style={hzItem}/>
              )
            })
            }
              </ul>
            : null
          }
      </Grid.Column>
    </Grid.Row>
  );
}