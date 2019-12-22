import React from 'react';
import { Card, Image } from 'semantic-ui-react';

export default function PersonalProfile() {
  // const [toggleEmail, setToggleEmail] = useState(false);
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
      <Card.Header>Jade Doucet
        <a href="https://github.com/JadeJDoucet" style={{ marginLeft: '25%', color: 'black', fontSize: 25 }}>
          <i className="github icon"></i>
        </a>
          <a href="https://linkedin.com/in/jadejdoucet" style={{ color: '#0077B5', fontSize: 25 }}>
          <i className="linkedin icon"></i>
        </a>
      </Card.Header>
      <Card.Meta>
          <span className='date'>Software Engineer</span>
      </Card.Meta>
        <Card.Description>I am a full-stack software engineer from New Orleans with a passion for technology.
          I'm experienced in web, mobile, and game development. 
          I've developed AR mobile apps, a variety of web apps, and video games.
        </Card.Description>
      </Card.Content>
    </Card>
  )
}