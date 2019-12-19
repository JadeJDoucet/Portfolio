import React, { useState } from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
// imports
// import profilePicture from

export default function PersonalProfile() {
  const [toggleEmail, setToggleEmail] = useState(false);

  return (
    <div id="profile-card">
      <Card>
        <Card.Content>
        <Card.Header>Jade Doucet</Card.Header>
        <Card.Meta>
            <span className='date'>Software Engineer</span>
        </Card.Meta>
          <Button onClick={() => setToggleEmail(!toggleEmail)}>Email</Button>
          <Card.Description>I am a full-stack software engineer from New Orleans</Card.Description>
          {toggleEmail ? <Card.Description>jadejdoucet@gmail.com</Card.Description> : null}
        </Card.Content>
      </Card>
    </div>
  )
}