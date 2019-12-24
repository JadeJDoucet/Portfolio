import React, { useState } from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';

export default function NavBar({ mobile }) {
  const [activeItem, setActiveItem] = useState('');

  const fixedMenuStyle = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.2)',
    borderRadius: 5,
  };
  // const whichBar = () => {
if (mobile) {
  return (
    <Menu
      borderless
      className="ui top fixed menu header"
      stackable
      style={fixedMenuStyle}
    >
      <Dropdown item icon='bars' /*removed 'simple' here*/>
          <Dropdown.Menu>
            <Dropdown.Item>Document</Dropdown.Item>
            <Dropdown.Item>Image</Dropdown.Item>
          </Dropdown.Menu>
      </Dropdown>
    </Menu>
  )
} else {
  return (
    <Menu
    borderless
    className="ui top fixed menu header"
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
        active={activeItem === 'contact'}
        onClick={() => setActiveItem('contact')}
      >
        Contact
      </Menu.Item>
    </Menu>
  )
}
}