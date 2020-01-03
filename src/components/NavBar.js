import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function NavBar() {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Typography color="textPrimary">jadejdoucet.dev</Typography>
      <Link color="inherit" href="#about" onClick={handleClick}>
        About
      </Link>
      <Link color="inherit" href="#projects" onClick={handleClick}>
        Projects
      </Link>
      <Link color="inherit" href="#" component="PersonalProfile"onClick={handleClick}>
        Contact
      </Link>
    </Breadcrumbs>
  )

  // const styles = {
  //   navStartBox: {
  //     backgroundColor: '#fff',
  //     padding: 'auto',
  //     display: 'inline'
  //   },
  //   navWrapper: {
  //     height: '2em',
  //     width: '100%',
  //     display: 'inline-block',
  //     boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  //     position: 'absolute',
  //   },
  //   logo: {
  //     marginTop: '0.5%',
  //     marginLeft: '1%'
  //   },
  // };

  // const { navWrapper, logo, navStartBox } = styles;
  // return (
  //   <div style={navStartBox}>
  //     <div style={navWrapper}>
  //       <h5 style={logo}>jadejdoucet.dev</h5>
  //     </div>
  //   </div>
  // );
}