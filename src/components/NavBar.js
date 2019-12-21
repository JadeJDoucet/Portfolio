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
        active={activeItem === 'blog'}
        onClick={() => setActiveItem('blog')}
      >
        Blog
      </Menu.Item>
      <Menu.Item
        active={activeItem === 'about'}
        onClick={() => setActiveItem('about')}
      >
        About Me
      </Menu.Item>
    </Menu>
  )
}