import './ContactHeader.css'
import AboutUsPageShape from "../../../img/AboutUsPageShape.png";
import {NavLink} from "react-router-dom";

export let ContactHeader = (props) => {

    let {setRefs} = props

    return (
        <div className='ContactHeaderItem'>
            <div className='AboutUsBackgroundImg'></div>
            <div className='AboutUsBackgroundImg2'>
                <img src={AboutUsPageShape} alt=''/>
            </div>
            <div className='ContactHeaderItemCont'>
                <h2 className="anim" ref={setRefs}>Contact</h2>
                <div className='LinkItem'>
                    <NavLink to='/'>Home</NavLink> / <NavLink to='/Contact'>Contact</NavLink>
                </div>
            </div>
        </div>
    )
}