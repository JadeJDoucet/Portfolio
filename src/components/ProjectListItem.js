import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

export default function ProjectListItem({ project, mobile }) {
  const { name, description, coverImage, images, url } = project;

 // styles
  const hzList = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
  }

  const hzItem = { 
    float: 'left',
    margin: 5,
    borderRadius: 5,
  }

  // dynamic sizing for mobile
  const imgSize = (image) => {
    if (name === 'Readr') {
      return handleReadr(image);
    }
  return mobile ? 'tiny' : 'small';
  };

  // handle clicking to zoom
  const handleImageClick = (img) => {
    // To do: handle image clicks for horiz-scroll gallery
  };

  // handles sizing for Readr images - These are smaller
  const handleReadr = (image) => {
    return mobile ? 'small' : 'medium';
  };

  return (
    <Grid.Row style={{ boxShadow: '0px 1px 5px grey', borderRadius: 5, marginBottom: 5, backgroundColor: 'rgba(255, 255, 255, 0.60)'}}>
      <Grid.Column width={3}>
          <Image src={coverImage} rounded size={'large'}/>
      </Grid.Column>
      <Grid.Column width={13}>
          <h1 style={{ color: '#fff', fontFamily: 'Yanone Kaffeesatz', textShadow: '1px 1px 8px black' }}>{name}</h1>
        <p>{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">View the Repo</a>
          {images.length ? 
              <ul style={hzList}>
            {images.map((img, i) => {
              return (
                <li key={i}>
                  <Image src={img} size={imgSize(img)} bordered style={hzItem} onClick={() => handleImageClick(img)}/>
                </li>
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