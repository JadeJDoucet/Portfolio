import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

//import project data
import projects from '../project-data/projects.js';

const Readr = projects[2];
// const ScannarBusiness = projects[1];

export default function ReadrProject() {
  const style = {
    image: {
      width: '93.5%',
      borderRadius: 5,
      position: 'static',
      right: '16.61%',
      top: '115%'
    },
    iphone: {
      display: 'inline-block',
      width: '19%',
      position: 'absolute',
      zIndex: 100,
      right: '16.61%',
      top: '115%'
    },
    noShow: {
      display: 'none'
    },
    gridWrapper: {
      justifyContent: 'center',
      backgroundColor: '#fff',
      marginTop: '1%',
      borderRadius: 5,
      boxShadow: '0px 0px 5px black',
      flexWrap: 'wrap-reverse',
    },
    carouselItem: {
      backgroundColor: 'rgba(255, 255, 255, 0.75)',
    },
  };
  
  const { image, gridWrapper, carouselItem } = style;

  return (
  <Grid container spacing={2} style={gridWrapper}>
    <Grid container style={{ justifyContent: 'center' }}>
      <Grid item xs={12}>
        <Typography variant="body2" style={{ textAlign: 'justify', padding: '2%', paddingLeft: '20%', paddingRight: '20%' }}>
          Readr is a reading suggestion application which also offers an in-browser reading experience for open source books.
          Our books are sourced from Open library, and Readr has a custom algorithm for book reccomendations based users swiping left or right on books they like or dislike.
        </Typography>
        <Typography variant="body1" style={{ paddingTop: '1%' }}>View on <a href={Readr.url}>GitHub</a></Typography>
      </Grid>
    </Grid>
    <Grid container style={{ justifyContent: 'center' }}>
      <Grid item xs={12} lg={6} style={{ paddingTop: '1%' }}>
        <Typography variant="h4" style={{ textAlign: 'center', padding: '1%' }}>ScannAR</Typography>
        <Carousel
          swipeable
          dynamicHeight
          showThumbs={false}
          showStatus={false}
        >
            <div style={carouselItem}>
              <img src={Readr.coverImage} alt="Project" style={image}></img>
              <p className="legend">Readr Landing</p>
            </div>
            {Readr.images.map((imgSource, i)=>(
              <div style={carouselItem} key={i}>
                <img src={imgSource} alt="screenshot" style={image}></img>
              </div>
            ))}
        </Carousel>
      </Grid>
    </Grid>
  </Grid>
  )
}