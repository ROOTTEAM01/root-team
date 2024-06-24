import imgAboutUsTeam from '../../../img/imgAboutUsTeam.jpg'
import {NavLink} from "react-router-dom";
import './AboutUsTeam.css'

export let AboutUsTeam = (props) => {

    let {setRefs} = props

    return (<section className='AboutUsTeam2'>
        <div className="aboutUsCont AboutUsTeam">
            <div className="aboutUsImg aboutUsTeamImg"><img ref={setRefs} className="anim" src={imgAboutUsTeam} alt=""/>
            </div>
            <div className="aboutUsText aboutUsTeamText"><h4>TEAM</h4><h2 ref={setRefs} className="anim">Meet Our Team</h2><p>Commodo
                elementum, sed imperdiet nunc euismod etiam aliquet viverra
                enim. Adipiscing nunc condimentum risus id. Aquam mattis magna facilisi fermentum, euismod vitae.
                Porttitor sit tincidunt dictum facilisi eget orci velit. Nulla laoreet nunc gravida augue aenean sed
                elementum, in.</p>
                <div className='AboutUsTeam-boxName'>
                    <h2 ref={setRefs} className="anim">John William</h2>
                    <h4>OUR FOUNDER</h4>
                </div>
                <p>Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra.</p>
                <NavLink className='AboutUsTeamLinkedin' to='#'><i
                    className="fa-brands fa-linkedin"></i> Linkedin/</NavLink>
            </div>
        </div>
    </section>)
}