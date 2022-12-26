import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <EmailIcon />
        <LinkedInIcon />
        <GitHubIcon />
      </div>
      <p> &copy; 2022 sophietao.com</p>
    </div>
  )
}

export default Footer;
