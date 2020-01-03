import React from 'react';
import { Typography, Grid, List, ListItem, ListItemText } from '@material-ui/core';

export default function About({ mobile }) {
  const styles = {
    introWrapper: {
      textAlign: 'center',
      display: 'inline-block',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      padding: '5%',
      paddingRight: '10%',
      paddingLeft: '10%',
    },
  }
  const { introWrapper } = styles;
  return (
    <section id="about" style={introWrapper}>
      <Typography variant="h4" style={{ marginTop: '-3%', paddingBottom: '3%' }}>About Me</Typography>
      <Typography variant="body1">I am a full-stack software engineer from New Orleans with a passion for technology.
        I've built web and mobile apps with JavaScript and Node, as well as video games within Unity.
        I'm proficient in full stack development, whether it's designing a front-end or back-end, dealing with APIs, deploying, or constructing databases with SQL or NoSQL.
        For any questions, feel free to contact me via <a href="mailto:jadejdoucet@gmail.com">email</a>.
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} style={{ paddingTop: '3%' }}>
          <Typography variant="h5">My Tools </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" style={{ textDecoration: 'underline' }}>Front-End</Typography> 
          <List>
            <ListItem>
            <ListItemText variant="body1">- HTML / CSS</ListItemText>
            </ListItem>
            <ListItem>
            <ListItemText variant="body1">- JavaScript</ListItemText>
            </ListItem>
            <ListItem>
            <ListItemText variant="body1">- React</ListItemText>
            </ListItem>
            <ListItem>
            <ListItemText variant="body1">- React Native</ListItemText>
            </ListItem>
            <ListItem>
            <ListItemText variant="body1">- AngularJS</ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" style={{ textDecoration: 'underline' }}>Back-End</Typography>
          <List>
            <ListItem>
              <ListItemText variant="body1">- Node.js</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="body1">- Express</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="body1">- SQL / NoSQL</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="body1">- MySQL / PostgreSQL</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText variant="body1">- MongoDB / Mongoose</ListItemText>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </section>
  )
}