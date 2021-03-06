import React from 'react'; // Import the Component component from React
// import { Link } from 'react-router-dom'; // Import the Link component
// import './Pages/App.css';
import './style.css';
import { FaGithub } from 'react-icons/fa';



function Thumbnail(props) {
    return (
        <div className="project">
            <div className="project-image">
                <a className="aLinks" href={props.link} rel="noreferrer" target="_blank">
                    <img className="projectImages" src={props.image} alt={props.image} />
                </a>
            </div>
            <div className="project-title">
                <a className="aLinks" href={props.link} rel="noreferrer" target="_blank">
                    {props.title}
                </a>
            </div>
            <div className="project-category">{props.category}</div>
            <div className="project-repo">
            <a href={props.github} rel="noreferrer" target="_blank">
                <h3 className="githubLogo">
                <FaGithub/>
                </h3>
                </a>
                </div>

        </div>
    );
}

export default Thumbnail;