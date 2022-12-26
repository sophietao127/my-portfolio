import React from 'react';
import "../styles/Home.css";

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2> Hi, My Name is Sophie! </h2>
        <div className='prompt'>
          <p> A software developer with a passion for learning and creating.</p>
        </div>
      </div>
      <div className='skills'>
        <h1> Skills </h1>
        <ol className='list'>
          <li className='item'>
            <h2> Front-End </h2>
            <span> HTML, CSS, BootStrap, NPM, MaterialUI, ReactJS </span>
          </li>
          <li className='item'>
            <h2> Back-End </h2>
            <span> NodeJS, MySQL, ExpressJS, Flask, AWS EC2 </span>
          </li>
          <li className='item'>
            <h2> Languages </h2>
            <span> Python, Java, JavaScript, C, C++ </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home;