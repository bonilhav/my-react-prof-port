import React from 'react';
import resumeOne from '../images/resume1.png';
import resumeTwo from '../images/resume2.png';


export default function MediaCard() {
    return (
        <div class="min-vh-100 d-flex justify-content-center">
            <div>
            <a id="vb-css" href="https://docs.google.com/document/d/1ET3d8wq2aJT3a8vKwoDQ4cGhQVUUsgtOfDO5TVEwGms/edit?usp=sharing" class="nav-link lead nav-link d-flex justify-content-center" target="_blank">Resume</a>
                <img src={resumeOne} alt="Resume"/>
                <img src={resumeTwo} alt="Resume"/>
            </div>
        </div>
    )
}