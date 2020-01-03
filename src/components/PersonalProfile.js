import React from 'react';

export default function PersonalProfile({ mobile }) {
  // const fixedProfileStyle = {
  //   position: mobile ? null : 'fixed',
  //   margin: mobile? 'auto' : null,
  //   backgroundColor: 'rgba(255, 255, 255, 0.90)',
  //   border: '1px solid #ddd',
  //   boxShadow: '0px 1px 2px #fff',
  // }
  
  const styles = {
    image: {
      margin: 'auto',
    },
    intro: {
      flex: 1,
      alignContent: 'center',
    },
  }
const { image, intro } = styles;
  return (
    <div id="intro" style={intro}>
      <img
      src={require("../project-data/headshots/headshot-close.jpg")}
      alt="profile"
      width="20%"
      style={image}
      />
      <h1>Jade Doucet
        <a href="https://github.com/JadeJDoucet" style={{ marginLeft: '25%', color: 'black', fontSize: 25 }}>
          <i className="github icon"></i>
        </a>
          <a href="https://linkedin.com/in/jadejdoucet" style={{ color: '#0077B5', fontSize: 25 }}>
          <i className="linkedin icon"></i>
        </a>
      </h1>
          <span className='date'>Software Engineer</span>
        <p>I am a full-stack software engineer from New Orleans with a passion for technology.
          I've built web and mobile apps with JavaScript and Node, as well as video games within Unity. 
          I'm proficient in full stack development, whether it's designing a front-end or back-end, dealing with APIs, deploying, or constructing databases with SQL or NoSQL.
          For any questions, feel free to contact me via <a href="mailto:jadejdoucet@gmail.com">email</a>.
        </p>
    </div>
  )
}