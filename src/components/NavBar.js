import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

export default function NavBar() {
  const styles = {
    bar: {
      padding: '0.5%',
      paddingLeft: '1%',
      alignText: 'right',
    },
    barWrapper: {
      position: 'sticky',
      zIndex: 100,
      top: 0,
      // backgroundColor: '#fff'
      backgroundColor: 'rgba(255, 255, 255, 0.97)'
    }
  };

  const { bar, barWrapper } = styles;

  return (
    <header style={barWrapper}>
      <Breadcrumbs aria-label="breadcrumb" style={bar}>
        <Link color="textPrimary" href="#about">
          About
        </Link>
        <Link color="inherit" href="#projects">
          Projects
        </Link>
        <Link color="inherit" href="#tools">
          Skills
        </Link>
        <Link color="inherit" href="mailto:jadejdoucet@gmail.com">
          Contact
        </Link>
      </Breadcrumbs>
    </header>
  )
}