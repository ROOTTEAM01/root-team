import {Client} from "./Client/Client";
import {AboutUs} from "./AboutUs/AboutUs";
import {Service} from "./Service/Service";
import {LogoIpsum} from "./LogoIpsum/LogoIpsum";
import {Works} from "./Works/Works";
import {Testimonials} from "./Testimonials/Testimonials";
import {JoinUs} from "./JoinUs/JoinUs";
import '../../CSS/Respons/respons.css'
import '../../CSS/Animation/animation.css'
import './home-page.css'
import {HomeContainer} from "./HomeContainer/HomeContainer";

export let HomePage = (props) => {

    let {setRefs} = props

    return (
        <>
            <main>
                <HomeContainer setRefs={setRefs}/>
                <Client/>
                <AboutUs setRefs={setRefs}/>
                <Service setRefs={setRefs}/>
                <LogoIpsum setRefs={setRefs}/>
                <Works setRefs={setRefs}/>
                <Testimonials setRefs={setRefs}/>
                <JoinUs setRefs={setRefs}/>
            </main>
        </>
    )
}