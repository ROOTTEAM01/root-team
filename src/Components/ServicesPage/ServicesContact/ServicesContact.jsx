import ServicesContactImg from '../../../img/ServicesContactImg.jpg'
import './servicesContact.css'

export let ServicesContact = (props) => {

    let {setRefs} = props

    return (
        <div className='ServicesContact'>
            <div className='ServicesContactImg'>
                <img src={ServicesContactImg} alt=''/>
            </div>
            <div className='ServicesContactBox'>
                <h4>CONTACT</h4>
                <h2>Let’s Work Together!</h2>
                <p>Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra enim. Adipiscing nunc condimentum
                    risus id. Aquam mattis magna facilisi fermentum, euismod vitae. Porttitor sit tincidunt dictum
                    facilisi eget orci velit. Nulla laoreet nunc gravida augue aenean sed elementum, in.</p>
                <div>
                    <button>
                        Contact Us Now
                    </button>
                </div>
            </div>
        </div>
    )
}