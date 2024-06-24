import AboutUsPageShape from "../../../img/AboutUsPageShape.png";
import {NavLink} from "react-router-dom";
import './AboutUsHeader.css'

export let AboutUsHeader = (props) => {

    let {setRefs} = props

    return (
        <>
            <div className='AboutUsHeaderItem ContactHeaderItem'>
                <div className='AboutUsBackgroundImg'></div>
                <div className='AboutUsBackgroundImg2'>
                    <img src={AboutUsPageShape} alt=''/>
                </div>
                <div className='AboutUsHeaderItemCont ContactHeaderItemCont'>
                    <h2 className="anim" ref={setRefs}>About Us</h2>
                    <div className='LinkItem'>
                        <NavLink to='/'>Home</NavLink> / <NavLink to='/AboutUs'>About</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}