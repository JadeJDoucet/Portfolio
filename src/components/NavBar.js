import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

function handleClick(loc) {
  /* switch this for deployment */
  window.location = 'jadejdoucet.dev' + loc;
  // window.location = 'localhost:3000' + loc;
}

export default function NavBar() {
  const styles = {
    bar: {
      padding: '0.5%',
      paddingLeft: '1%',
      alignText: 'right',
      position: 'sticky'
    },
  };

  const { bar } = styles;

  return (
    <Breadcrumbs aria-label="breadcrumb" style={bar}>
      <Link color="textPrimary" href="#about">
        About
      </Link>
      <Link color="inherit" onClick={() => handleClick('#about')}>
        Projects
      </Link>
      <Link color="inherit" onClick={() => handleClick('#contact')}>
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
  //     // position: 'absolute',
  //   },
  //   logo: {
  //     marginTop: '0.5%',
  //     marginLeft: '1%'
  //   },
  // };

  // const { navWrapper, logo, navStartBox } = styles;
  // return (
  //   <div style={navWrapper}>
  //     <div style={navStartBox}>
  //     </div>
  //       <h5 style={logo}>jadejdoucet.dev</h5>
  //     </div>
  // );
}