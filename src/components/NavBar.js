import React, { useState } from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';

export default function NavBar({ mobile, setContact }) {
  const [activeItem, setActiveItem] = useState('');

  const fixedMenuStyle = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.2)',
    borderRadius: 5,
  };
  const toRender = () => {
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
                <Dropdown.Item>Contact</Dropdown.Item>
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
        onClick={() => setActiveItem('')}
        >
          <Menu.Item
          className="right item"
            active={activeItem === 'contact'}
            onClick={() => {setActiveItem('contact'); window.location.href="mailto:'jadejdoucet@gmail.com';"}}
          >
            Email
          </Menu.Item>
        </Menu>
      )
    }
  }
return toRender();
}