import React from 'react';
import { Typography } from '@material-ui/core';

export default function About({ mobile }) {
    const styles = {
        introWrapper: {
            textAlign: 'center',
            display: 'inline-block',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            padding: '5%',
            paddingRight: '10%',
            paddingLeft: '10%',
        },
    }
    const { introWrapper } = styles;
    return (
        <section id="about" style={introWrapper}>
            <Typography variant="h4">About Me</Typography>
            <p>I am a full-stack software engineer from New Orleans with a passion for technology.
              I've built web and mobile apps with JavaScript and Node, as well as video games within Unity.
              I'm proficient in full stack development, whether it's designing a front-end or back-end, dealing with APIs, deploying, or constructing databases with SQL or NoSQL.
          For any questions, feel free to contact me via <a href="mailto:jadejdoucet@gmail.com">email</a>.
        </p>
        </section>
    )
}