import imgAbout from '../../../img/aboutUs.jpg'
import './about-us.css'

export let AboutUs = (props) => {

    let {setRefs} = props

    return (
        <section className="aboutUs-Item">
            <div className="aboutUsCont">
                <div className="aboutUsImg">
                    <img ref={setRefs} className="anim" src={imgAbout} alt=""/>
                </div>
                <div className="aboutUsText">
                    <h4>ABOUT US</h4>
                    <h2 ref={setRefs} className="anim">We’re On Mission To Help Business Grow Faster Thanever.</h2>
                    <p>Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra enim. Adipiscing nunc
                        condimentum
                        risus id. Aquam mattis magna facilisi fermentum, euismod vitae. Porttitor sit tincidunt dictum
                        facilisi
                        eget orci velit. Nulla laoreet nunc gravida augue aenean sed elementum, in.</p>
                    <div>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}