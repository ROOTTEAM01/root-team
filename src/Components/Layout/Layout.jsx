import {Header} from "./Header/Header";
import {Outlet} from "react-router-dom";
import {NewsLetter} from "./NewsLetter/NewsLetter";
import {Footer} from "./Footer/Footer";
import '../../CSS/Respons/respons.css'

export let Layout = (props) => {

    let {setRefs, handleNavLinkClick} = props

    return (
        <>
            <Header handleNavLinkClick={handleNavLinkClick} setRefs={setRefs}/>

            <Outlet/>

            <NewsLetter setRefs={setRefs}/>
            <Footer setRefs={setRefs}/>

        </>
    )
}