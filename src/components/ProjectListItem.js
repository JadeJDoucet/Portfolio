import React, { useState } from 'react';
import { Grid, Image } from 'semantic-ui-react';

export default function ProjectListItem({ project, mobile }) {
  const { name, description, coverImage, images } = project;
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
    <Grid.Row style={{ boxShadow: '0px 1px 5px grey', borderRadius: 5, marginBottom: 5 }}>
      <Grid.Column width={3} >
        <Image src={coverImage} rounded size={'large'}/>
      </Grid.Column>
      <Grid.Column width={13}>
        <h1>{name}</h1>
        <p>{description}</p>
          {images.length ? 
              <ul style={hzList}>
            {images.map((img, i) => {
              return (
                <li>
                  <Image key={i} src={img} size={imgSize(img)} bordered style={hzItem} onClick={() => handleImageClick(img)}/>
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