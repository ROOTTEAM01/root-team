import './servicesHeader.css'
import AboutUsPageShape from "../../../img/AboutUsPageShape.png";
import {NavLink} from "react-router-dom";

export let ServicesHeader = (props) => {

    let {setRefs} = props

    return (
        <div className='ContactHeaderItem ServicesHeader' >
            <div className='AboutUsBackgroundImg'></div>
            <div className='AboutUsBackgroundImg2'>
                <img src={AboutUsPageShape} alt=''/>
            </div>
            <div className='ContactHeaderItemCont'>
                <h2 className="anim" ref={setRefs}>Services</h2>
                <div className='LinkItem'>
                    <NavLink to='/'>Home</NavLink> / <NavLink to='/Services'>Services</NavLink>
                </div>
            </div>
        </div>
    )
}