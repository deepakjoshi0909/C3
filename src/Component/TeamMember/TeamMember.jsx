import React from 'react';
import './TeamMember.css'; 
import image from '../../assets/logo.jpeg';


const teamMembers = [
  {
    id: 1,
    name: 'Deepak Joshi',
    position: 'Frontend Developer',
    image: image,
    description: 'Specializes in building responsive web applications.',
  },
  {
    id: 2,
    name: 'Vivan sharma',
    position: 'Backend Developer',
    image: image,
    description: 'Expert in server-side technologies and database management.',
  },
  {
    id: 3,
    name: 'Johnson',
    position: 'UI/UX Designer',
    image: image,
    description: 'Focused on creating intuitive and beautiful user interfaces.',
  },
  {
    id: 4,
    name: 'Brown',
    position: 'Project Manager',
    image: image,
    description: 'Ensures projects are delivered on time and meet client expectations.',
  },
];

const TeamMembers = () => {
  return (
    <div className="team-container">
      <h2 className="team-heading">Our Team</h2>
      <div className="team-cards-container">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-card">
            <img src={member.image} alt={member.name} className="team-image" />
            <div className="team-details">
              <h3 className="team-name">{member.name}</h3>
              <p className="team-position">{member.position}</p>
              <p className="team-description">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
