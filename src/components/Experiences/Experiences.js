import React from 'react';

import { ExperienceCard } from './../ExperienceCard/ExperienceCard';

import './Experiences.css';

export const Experiences = ({ Experiences }) => {
    return (
        <div className="projects-container">
            <div className="industry-skill-container">
                {
                    Experiences.ExperienceList.map(Experiences => <ExperienceCard Experiences={Experiences} />)
                }
            </div>
        </div>
    )
}

