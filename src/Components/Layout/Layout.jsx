import {Header} from "./Header/Header";
import {Outlet, useLocation} from "react-router-dom";
import {NewsLetter} from "./NewsLetter/NewsLetter";
import {Footer} from "./Footer/Footer";
import '../../CSS/Respons/respons.css'

export let Layout = (props) => {

    const location = useLocation();
    const isHomePage = location.pathname === '/';


    let {setRefs, handleNavLinkClick} = props

    return (
        <>
            {!isHomePage && <Header handleNavLinkClick={handleNavLinkClick} setRefs={setRefs}/>}

            <Outlet/>

            <NewsLetter setRefs={setRefs}/>
            <Footer setRefs={setRefs}/>

        </>
    )
}