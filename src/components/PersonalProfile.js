import React, { useState } from 'react';
import { Card, Image, Button, Visibility } from 'semantic-ui-react';
// imports
// import profilePhoto from '../../project-data/headshots/headshot-close.jpg';

export default function PersonalProfile() {
  const [toggleEmail, setToggleEmail] = useState(false);
  const [profileFixed, setFixedProfile] = useState(false);
  
  const profileStyle = {
    border: 'none',
    borderRadius: 0,
    boxShadow: 'none',
    marginBottom: '1em',
    marginTop: '4em',
    transition: 'box-shadow 0.5s ease, padding 0.5s ease',
  }

  const fixedProfileStyle = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
  }

  return (
    <Visibility
      onTopPassed={() => setFixedProfile(true)}
      onBottomVisible={() => setFixedProfile(false)}
      once={false}
    >
      <div id="profile-card">
        <Card
          fixed={profileFixed ? 'top' : undefined}
          style={profileFixed ? fixedProfileStyle : profileStyle}
        >
          <Image src={require("../project-data/headshots/headshot-close.jpg")} wrapped ui={false} />
          <Card.Content>
          <Card.Header>Jade Doucet</Card.Header>
          <Card.Meta>
              <span className='date'>Software Engineer</span>
          </Card.Meta>
            <Card.Description>I am a full-stack software engineer from New Orleans with a passion for technology.
              I'm experienced in web, mobile, and game development. 
              I've developed AR mobile apps, a variety of web apps, and video games. </Card.Description>
            <Button onClick={() => setToggleEmail(!toggleEmail)}>Contact</Button>
            {toggleEmail ? <Card.Description>jadejdoucet@gmail.com</Card.Description> : null}
          </Card.Content>
        </Card>
      </div>
    </Visibility>
  )
}