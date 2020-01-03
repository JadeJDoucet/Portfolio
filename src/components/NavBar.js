import React, { useState } from 'react';

export default function NavBar() {
  const styles = {
    navWrapper: {
      height: '2em',
      width: '100%',
      display: 'inline-block',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      position: 'absolute',
    },
    logo: {
      marginTop: '0.5%',
      marginLeft: '1%'
    },
  };

  const { navWrapper, logo } = styles;
  return (
    <div style={navWrapper}>
      <h5 style={logo}>jadejdoucet.dev</h5>
    </div>
  );
}