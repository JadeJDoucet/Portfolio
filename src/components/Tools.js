import React from 'react';
import { Grid, List, ListItem, ListItemText, Typography } from '@material-ui/core';

export default function Tools() {
  return (
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
  )
}