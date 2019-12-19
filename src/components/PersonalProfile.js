import React, { useState } from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
// imports
// import profilePhoto from '../../project-data/headshots/headshot-close.jpg';

export default function PersonalProfile() {
  const [toggleEmail, setToggleEmail] = useState(false);

  return (
    <div id="profile-card">
      <Card>
        <Image src={require("../headshots/headshot-close.jpg")} wrapped ui={false} />
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
  )
}