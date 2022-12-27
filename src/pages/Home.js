import React from 'react';
import "../styles/Home.css";
import myself from '../assets/me.jpg';

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2> Hi, My Name is Sophie! </h2>
        <div className='prompt'>
          <div>
            <p> I am currently a master's student at UW in the Electrical and Computer Program
              with a passion for learning and creating!
            </p>
          </div>
          <img src={myself} alt='myself'/>
        </div>
      </div>

      <div className='total'>
        <div className='skills'>
          <h1> Skills </h1>
          <ol className='list'>
            <li className='item'>
              <h2> Front-End </h2>
              <span> HTML, CSS, BootStrap, NPM, MaterialUI, ReactJS, JQuery </span>
            </li>
            <li className='item'>
              <h2> Back-End </h2>
              <span> NodeJS, ExpressJS, Flask, MySQL, PostgreSQL, SQLite, AWS, Linux, Git, Docker </span>
            </li>
            <li className='item'>
              <h2> Languages </h2>
              <span> Python, Java, JavaScript, C, C++ </span>
            </li>
          </ol>
        </div>
        <div className='courses'>
          <h1> Classes I Have Taken </h1>
          <ul>
            <li> CSE 142 </li>
            <li> CSE 154 </li>
            <li> CSE 163 </li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Home;