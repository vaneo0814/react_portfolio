import React from "react";
import ParticlesBg from 'particles-bg'
import './style.css';
import {FaGithub } from 'react-icons/fa';


function About() {
  return (
    <div className="aboutPage">
      <ParticlesBg type="cobweb" color="#000033" bg={true} />
      {/* <div className="aboutContainer">
        <h1 className="aboutHeader">
          About me
      </h1>
        <p className="aboutme">
          A full-stack developer, well-organized person with high attention to detail. I am a traveler, a music enthusiast, with hobbies such as oil painting, practicing the art of Jiu Jitsu, and cruising on my longboard. I am fueled by high energy levels and enthusiasm. I am interested in the entire front-end spectrum of programming and working on ambitious projects with positive people. I like to create unique projects challenging myself to achieving my visionary goals as well as learning the many languages of programming.
      </p>

        <div className="skillsContainer">
          <h1 className="aboutHeader">
            Skills & <br />Experience
      </h1>
          <p className="aboutme">
            HTML, CSS, Vanilla JS, JQuery, React, Express, building small and medium web applications with these languages as well as APIs, MongoDB, MySQL. I have both Frontend and Backend Technology with many projects to show the skills that I attain and make it a priority to continue to perfect my craft.<br />
        Visit my <a className="skillsContact" href="https://www.linkedin.com/in/vanessa-orellana-36769986/">linkedin</a> for more details or feel free to <a className="skillsContact" href="mailto:vorellana814@gmail.com">contact me.</a>
          </p>
        </div>
      </div> */}


      <div className="row div">
        <div className="col-lg">
        <h1 className="aboutHeader">
          About me
      </h1>
        <p className="aboutme">
          A full-stack developer, well-organized person with high attention to detail. I went on to pursue programming by attending Rutgers Universities Full Stack Coding Bootcamp, completing other online courses, and spending countless hours learning the art. I am a traveler, a music enthusiast, with hobbies such as oil painting, practicing the art of Jiu Jitsu, and cruising on my longboard. I am fueled by high energy levels and enthusiasm. I am interested in the entire front-end spectrum of programming and working on ambitious projects with positive people. I like to create unique projects challenging myself to achieving my visionary goals as well as learning the many languages of programming.
      </p>

        </div>
        <div className="col-lg">
        <h1 className="aboutHeader">
            Skills & Experience
      </h1>
          <p className="skills">
            HTML, CSS, Vanilla JS, JQuery, React, Express, building small and medium web applications with these languages as well as APIs, MongoDB, MySQL. I have both Frontend and Backend Technology with many projects to show the skills that I attain and make it a priority to continue to perfect my craft.<br />
        Visit my <a className="skillsContact" href="https://www.linkedin.com/in/vanessa-orellana-36769986/">linkedin</a> for more details or feel free to <a className="skillsContact" href="mailto:vorellana814@gmail.com">contact me.</a>
          </p>
          <a href="https://github.com/vaneo0814" target="__blank" rel="noreferrer">
          <h1 className="githubLogo">
          <FaGithub/>
          </h1>
          </a>
        </div>
        </div>


    </div>
  )
}

export default About;