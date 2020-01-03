import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function PersonalProfile({ mobile }) {
  const styles = {
    introWrapper: {
      backgroundColor: 'rgb(51, 51, 51)',
      textAlign: 'center',
      display: 'inline-block',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    },
    image: {
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 3,
      width: '23%',
      borderRadius: '50%',
    }
  }
const { image, introWrapper } = styles;
  return (
    <div id="intro" style={introWrapper}>
      <img
      src={require("../project-data/headshots/headshot-close.jpg")}
      alt="profile"
      style={image}
      />
      <h1>Jade Doucet
      </h1>
        <a href="https://github.com/JadeJDoucet" style={{ marginLeft: '25%', color: 'black', padding: '5px' }}>
          <GitHubIcon />
        </a>
          <a href="https://linkedin.com/in/jadejdoucet" style={{ color: '#0077B5' }}>
          <LinkedInIcon />
        </a>
          <span className='date'>Software Engineer</span>
        <p>I am a full-stack software engineer from New Orleans with a passion for technology.
          I've built web and mobile apps with JavaScript and Node, as well as video games within Unity. 
          I'm proficient in full stack development, whether it's designing a front-end or back-end, dealing with APIs, deploying, or constructing databases with SQL or NoSQL.
          For any questions, feel free to contact me via <a href="mailto:jadejdoucet@gmail.com">email</a>.
        </p>
    </div>
  )
}