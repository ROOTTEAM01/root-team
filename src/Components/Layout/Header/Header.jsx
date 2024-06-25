import {useState} from "react";
import logo from '../../../img/logo.png';
import FlagArmenia from '../../../img/ArmFlag.jpg';
import FlagAmerica from '../../../img/AmFlag.jpg';
import {useDispatch, useSelector} from "react-redux";
import {toggleBoolean, toggleBooleanF} from "../../../features/flag/flagReducer";
import {NavLink} from "react-router-dom";
import './header.css'


export let Header = (props) => {

    let flag = useSelector(state => state.flag.flag)

    let dispatch = useDispatch()

    const [bars, setBars] = useState(false);

    let StyleDiv = {
        a: {
            display: 'inline-block',
        }, b: {
            display: 'none ',
        },
        c: {
            zIndex: '1', opacity: '1', top: '103px',
        }, d: {
            zIndex: '0', opacity: '0', top: '-100px',
        }
    }

    const handleNavLinkClick = (e) => {
        window.location.href = e.target.href;
    };

    return (<>
        <header>
            <div className='header-container'>
                <div className="itemLogo">
                    <div className="HamburgerItem">
                            <span style={!bars ? StyleDiv.a : StyleDiv.b}>
                            <i onClick={() => {
                                setBars(true)
                            }} className="fa-solid fa-bars"></i>
                                </span>
                        <span style={bars ? StyleDiv.a : StyleDiv.b}>
                        <i onClick={() => {
                            setBars(false)
                        }} className="fa-solid fa-xmark"></i>
                            </span>
                    </div>
                    <a href="#">
                        <img src={logo} alt=""/>
                    </a>
                </div>
                <div className="HeaderCategory">
                    <ul className="UlHeader" style={bars ? StyleDiv.c : StyleDiv.d}>
                        <li><NavLink onClick={handleNavLinkClick} exact to='/'>Home</NavLink></li>
                        <li><NavLink onClick={handleNavLinkClick} to="/Services">Services</NavLink></li>
                        <li><NavLink onClick={handleNavLinkClick} to="/AboutUs">About</NavLink></li>
                        <li><NavLink onClick={handleNavLinkClick} to="/Blog">Blog</NavLink></li>
                        <li><NavLink onClick={handleNavLinkClick} to="/Pages">Pages</NavLink></li>
                        <li><NavLink onClick={handleNavLinkClick} to="/Contact">Contact</NavLink></li>
                        <li><NavLink onClick={handleNavLinkClick} to="/Team">Team</NavLink></li>
                    </ul>

                    <button>
                        <a href="#">
                            <b> Start a Project</b>
                        </a>
                    </button>

                    <div className="flagItem">
                        <p className="armFlagItem"
                           style={{display: flag ? 'none' : 'inline'}}
                           onClick={() => dispatch(toggleBoolean())}>
                            <img src={FlagArmenia}
                                 alt=""/></p>
                        <p className="amFlagItem" style={{display: !flag ? 'none' : 'inline'}}
                           onClick={() => dispatch(toggleBooleanF())}><img src={FlagAmerica}
                                                                           alt=""/></p>
                    </div>

                </div>
            </div>
        </header>
    </>)
}