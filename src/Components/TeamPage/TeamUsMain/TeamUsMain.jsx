import React from 'react';
import imgAbout from "../../../img/Team1.jpg";
import "./TeamUsMain.css";


const TeamUsMain = ({setRefs}) => {
  return (
    <div className="aboutUsCont teamUsMain">
        <div className="aboutUsImg imgTeam">
            <img ref={setRefs} className="anim" src={imgAbout} alt=""/>
        </div>
        <div className="aboutUsText teamUsText">
            <h4>TEAM</h4>
            <h2 ref={setRefs} className="anim">Meet Our Team</h2>
            <p>Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra. Adipiscing nunc condimentum risus id. Aquam mattis magna facilisi fermentum, euismod. Porttitor sit tincidunt dictum facilisi eget orci velit. Nulla laoreet nunc gravida augue aenean sed elementum, in.</p>
            <h3>John William</h3>
            <h4>OUR FOUNDER</h4>
            <p>Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra.</p>
            <ul className='linkedinUL'>
                <li>
                    <a href="#" className='linkedinLink'>
                        <i class="fa-brands fa-linkedin" style={{color: "#74C0FC"}}></i>
                        <span >Linkedin/johnwilliam</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default TeamUsMain
