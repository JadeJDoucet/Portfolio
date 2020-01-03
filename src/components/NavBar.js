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
  };

  const { bar } = styles;

  return (
    <Breadcrumbs aria-label="breadcrumb" style={bar}>
      <Link color="textPrimary" href="#about">
        About
      </Link>
      <Link color="inherit" href="#projects">
        Projects
      </Link>
      <Link color="inherit" href="#contact">
        Contact
      </Link>
    </Breadcrumbs>
  )
}