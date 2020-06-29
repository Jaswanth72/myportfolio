import React from 'react';

import './sidenav.css';

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img
                src="https://avatars2.githubusercontent.com/u/55351107?s=400&u=cbd45f43066025f73a0f9c8d9889c3b4e6637ca9&v=4"
                className="avatar"
                alt="avatar"
            />
            <h2 className="main-name">Jaswanth Sai</h2>
            <p className="subtitle">"A Cadet Who Codes"</p>
            <div className="sections-list">
                <p className="section-list-element" onClick={() => handleSectionClick("about")}>About Me</p>
                <p className="section-list-element" onClick={() => handleSectionClick("skills")}>Skills</p>
                <p className="section-list-element" onClick={() => handleSectionClick("projects")}>Projects</p>
                
            </div>
        </div>
    );
};