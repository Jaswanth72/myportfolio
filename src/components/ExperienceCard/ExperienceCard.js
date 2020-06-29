import React from 'react'

import './experience-card.css';

export const ExperienceCard = ({ experiences }) => {
    return (
        <div className="experiences-card">
            <p><b>Company Name:</b> {experiences.companyName}</p>
            <p><b>Role:</b> {experiences.role}</p>
            <p><b>Link:</b> <a href={experiences.about}>{experiences.about}</a> </p>
        </div>
    )
}