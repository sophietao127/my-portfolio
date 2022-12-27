import React from 'react';
import DropdownButton from '../components/DropdownButton';

import "../styles/Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import myself from '../assets/me.jpg';
import food from '../assets/food.jpg';
import dog from '../assets/dog1.jpg';
import seattle from '../assets/Sea.jpg';
import sandiego from '../assets/San.jpg';

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
          <h1> Classes I Have Taken at UW</h1>
          <section>
            <DropdownButton course={'CSE 414'} name={'Database Systems'}/>
            <DropdownButton course={'EEP 596'} name={'Advanced Topics in Signal and Image Processing'}/>
            <DropdownButton course={'CSE 333'} name={'Systems Programming'}/>
            <DropdownButton course={'CSE 417'} name={'Algorithm & Computational Complexity'}/>
            <DropdownButton course={'EE 598'} name={'Special Topics in Electrical Engineering'}/>
            <DropdownButton course={'CSE 163'} name={'Intermediate Data Programming'}/>
            <DropdownButton course={'CSE 373'} name={'Data Structures and Algorithms'}/>
            <DropdownButton course={'CSE 391'} name={'Software Tools'}/>
            <DropdownButton course={'EEP 599'} name={'Research in Electrical Engineering'}/>
            <DropdownButton course={'CSE 142'} name={'Programming language II (Java)'}/>
            <DropdownButton course={'CSE 154'} name={'Web Programming'}/>
            <DropdownButton course={'EEP 500'} name={'Graduate Seminar'}/>
          </section>
        </div>

        <div className='aboutme'>
          <h1>Some fun facts about me!</h1>
          <div>
            <ul>
              <li>
                I love photography especially nature landscape and street scenery!
              The following pictures were caputured from Seattle, WA and San Diego, CA.
              </li>
              <li> I enjoy traveling with friends </li>
              <li> I like doing yoga at home when I'm stressed.</li>
              <li> I love chocolate and BBQ! </li>
              <li> My favorite American drama television is <a href='https://www.nbc.com/this-is-us'>This Is US!</a></li>
              <li>
                My favorite movie is <a href='https://en.wikipedia.org/wiki/Howl%27s_Moving_Castle_(film)'>Howl's Moving Castle</a>.
                I admire the female heroine Sophie Hatter. She is full of bravery and wisdom.
                The theme song of this movie is wondeful (Merry go round of Life), created by Joe Hisaishi. I really like this <a href='https://youtu.be/J6qIzKxmW8Y'>version</a> on Youtube!
                Cover by Grissini Project.
              </li>
            </ul>
          </div>
          <section>
            <img src={food} alt='bbq food'/>
            <img src={dog} alt='dog at UW'/>
            <img src={seattle} alt='Seattle'/>
            <img src={sandiego} alt='San Diego'/>
          </section>
        </div>
      </div>

    </div>
  )
}

export default Home;