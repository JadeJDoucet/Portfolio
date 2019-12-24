import React, { useState } from 'react';
import { Grid, Image } from 'semantic-ui-react';

export default function ProjectListItem({ project, mobile }) {
  const { name, description, coverImage, images } = project;
  const [currImage, setCurrImage] = useState(null);

  // to do: add onClick to images to blow them up

  const imageStyle = {
    // maxHeight: '50em',
  }
  
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
  const imgSize = (image) => {
    if (currImage === image) {
      if (mobile) {
        return 'small';
      } else {
        return 'medium';
      }
    }
  return mobile ? 'tiny' : 'small'
  };

  const handleImageClick = (img) => {
    if (img === currImage) {
      setCurrImage(null);
    } else {
      setCurrImage(img);
    }
  }

  return (
    <Grid.Row style={{ boxShadow: '0px 1px 5px grey', borderRadius: 5, marginBottom: 5 }}>
      <Grid.Column width={3} >
        <Image src={coverImage} rounded size={mobile ? 'large' : 'medium'} />
      </Grid.Column>
      <Grid.Column width={10}>
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