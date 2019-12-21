import React from 'react';
import { Menu } from 'semantic-ui-react';

export default function NavBar() {

  const fixedMenuStyle = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.2)',
    borderRadius: 5,
  };

  return (
    <Menu
    borderless
    attached="top"
    style={fixedMenuStyle}
    >
      <Menu.Item>
        Blog
      </Menu.Item>
    </Menu>
  )
}