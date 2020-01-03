import React, { useState } from 'react';

export default function NavBar() {
  const styles = {
    navWrapper: {
      height: '2em',
      display: 'inline-block',
    },
  };

  const { navWrapper } = styles;
  return (
    <div style={navWrapper}>
      <h5>jadejdoucet.dev</h5>
    </div>
  );
}