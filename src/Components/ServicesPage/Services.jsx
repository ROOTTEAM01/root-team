import {ServicesHeader} from "./ServicesHeader/ServicesHeader";
import {Service} from "../HomePage/Service/Service";
import './services.css'
import {ServicesContact} from "./ServicesContact/ServicesContact";

export let Services = (props) => {

    let {setRefs} = props

    return (
        <div className='Services'>
            <ServicesHeader setRefs={setRefs}/>
            <Service setRefs={setRefs}/>
            <ServicesContact setRefs={setRefs}/>
        </div>
    )
}