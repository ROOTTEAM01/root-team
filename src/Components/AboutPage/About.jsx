import './About.css'
import {AboutUsHeader} from "./AboutUsHedaer/AboutUsHeader";
import {AboutUsMain} from "./AboutUsMain/AboutUsMain";
import {Testimonials} from "../HomePage/Testimonials/Testimonials";
import {AboutUsTeam} from "./AboutUsTeam/AboutUsTeam";

export let About = (props) => {

    let {setRefs} = props

    return (
        <section className='About_Item'>
            <AboutUsHeader setRefs={setRefs}/>
            <AboutUsMain setRefs={setRefs}/>
            <Testimonials setRefs={setRefs}/>
            <AboutUsTeam setRefs={setRefs}/>
        </section>
    )
}