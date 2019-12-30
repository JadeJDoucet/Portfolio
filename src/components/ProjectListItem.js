import React, { useState } from 'react';
import { Grid, Image } from 'semantic-ui-react';

export default function ProjectListItem({ project, mobile }) {
  const { name, description, coverImage, images, url } = project;
  const [currImage, setCurrImage] = useState(null);

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
    if (currImage === image) {
      if (mobile) {
        return 'small';
      } else {
        return 'medium';
      }
    }
  return mobile ? 'tiny' : 'small';
  };

  // handle clicking to zoom
  const handleImageClick = (img) => {
    if (img === currImage) {
      setCurrImage(null);
    } else {
      setCurrImage(img);
    }
  };

  // handles sizing for Readr images - These are smaller
  const handleReadr = (image) => {
    if (currImage === image) {
      if (mobile) {
        return 'medium';
      } else {
        return 'large';
      }
    }
    return mobile ? 'small' : 'medium';
  };

  return (
    <Grid.Row style={{ boxShadow: '0px 1px 5px grey', borderRadius: 5, marginBottom: 5, backgroundColor: 'rgba(255, 255, 255, 0.87)'}}>
      <Grid.Column width={3}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <Image src={coverImage} rounded size={'large'}/>
        </a>
      </Grid.Column>
      <Grid.Column width={13}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h1 style={{ color: '#058E3F' }}>{name}</h1>
        </a>
        <p>{description}</p>
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