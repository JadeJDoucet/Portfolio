import React, { useState } from 'react';
import { Menu } from 'semantic-ui-react';

export default function NavBar() {
  const [activeItem, setActiveItem] = useState('');

  const fixedMenuStyle = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.2)',
    borderRadius: 5,
  };

  return (
    <Menu
    borderless
    className="ui top fixed menu"
    stackable
    style={fixedMenuStyle}
    >
      <Menu.Item
      className="right item"
        active={activeItem === 'about'}
        onClick={() => setActiveItem('about')}
      >
        About Me
      </Menu.Item>
      <Menu.Item
        // className="right item"
        active={activeItem === 'contact'}
        onClick={() => setActiveItem('contact')}
      >
        Contact
      </Menu.Item>
    </Menu>
  )
}