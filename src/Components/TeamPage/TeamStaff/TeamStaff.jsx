import React from 'react';
import './TeamStaff.css';
import staff1 from "../../../img/staff1.jpg";
import staff2 from "../../../img/staff2.jpg";
import staff3 from "../../../img/staff3.jpg";
import staff4 from "../../../img/staff4.jpg";
import staff5 from "../../../img/staff5.jpg";
import staff6 from "../../../img/staff6.jpg";
import staff7 from "../../../img/staff7.jpg";
import staff8 from "../../../img/staff8.jpg";
import line from "../../../img/staff-line.png"

const staffMembers = [
  { name: 'Thomas Eaton', position: 'CEO Solvero', image: staff1, line: line },
  { name: 'Thomas Eaton', position: 'Manager Project', image: staff2, line: line },
  { name: 'Thomas Eaton', position: 'Marketing Manager', image: staff3, line: line },
  { name: 'Thomas Eaton', position: 'IT Manager', image: staff4, line: line },
  { name: 'Thomas Eaton', position: 'Software Engineer', image: staff5, line: line },
  { name: 'Thomas Eaton', position: 'Web Designer', image: staff6, line: line },
  { name: 'Thomas Eaton', position: 'XU/UI Developer', image: staff7, line: line },
  { name: 'Thomas Eaton', position: 'Web Developer', image: staff8, line: line },
];

const TeamStaff = ({setRefs}) => {
  return (
    <div className="staff-grid">
        <div className='staff-title'>
            <p className='staff-team'>TEAM</p>
            <h2 className="team-title">Meet Our Staff</h2>
            <p className="team-description">
                Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra enim. 
                Adipiscing nunc condimentum risus id. A quam mattis magna facilisi.
            </p>
        </div>
      <div ref={setRefs} className="staff-members anim">
        {staffMembers.map((member, index) => (
          <div ref={setRefs} key={index} className="staff-member anim">
            <img ref={setRefs} src={member.image} alt={member.name} className="staff-photo anim" />
            <div className='img-line'>
              <img src={member.line} alt={member.name}/>
            </div>
            <h3 className="staff-name">{member.name}</h3>
            <p className="staff-position">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamStaff
