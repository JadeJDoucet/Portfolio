import React, { useState } from 'react';
import { Card, Image, Button } from 'semantic-ui-react';

export default function PersonalProfile() {
  const [toggleEmail, setToggleEmail] = useState(false);
  // const [profileFixed, setFixedProfile] = useState(false);
  
  const fixedProfileStyle = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
  }

  return (
    <Card
      style={fixedProfileStyle}
    >
      <Image
      src={require("../project-data/headshots/headshot-close.jpg")}
      wrapped
      ui={false}
      />
      <Card.Content>
      <Card.Header>Jade Doucet</Card.Header>
      <Card.Meta>
          <span className='date'>Software Engineer</span>
      </Card.Meta>
        <Card.Description>I am a full-stack software engineer from New Orleans with a passion for technology.
          I'm experienced in web, mobile, and game development. 
          I've developed AR mobile apps, a variety of web apps, and video games.
        </Card.Description>
        <a href="https://github.com/JadeJDoucet">
          <i class="github icon"></i>
        </a>
        <a href="https://linkedin.com/in/jadejdoucet">
          <i class="linkedin icon"></i>
        </a>
      </Card.Content>
    </Card>
  )
}