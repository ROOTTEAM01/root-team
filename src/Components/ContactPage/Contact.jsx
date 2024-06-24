import './Contact.css'
import {ContactHeader} from "./ContactHeader/ContactHeader";
import {ContactUS} from "./ContactUs/ContactUs";
import {Map} from "./Map/Map";

export let ContactPage = (props) => {

    let {setRefs} = props

    return (<section className="ContactItem">
        <ContactHeader setRefs={setRefs}/>
        <ContactUS setRefs={setRefs} />
        <Map setRefs={setRefs} />
    </section>)
}