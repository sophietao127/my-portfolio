import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <a href="mailto:sophietao127@gmail.com">
          <EmailIcon />
        </a>
        <a href='http://www.linkedin.com/in/sophie-tao'>
          <LinkedInIcon />
        </a>
        <a href='https://github.com/sophietao127'>
          <GitHubIcon />
        </a>
      </div>
      <p> &copy; 2022 sophietao.net</p>
    </div>
  )
}

export default Footer;
