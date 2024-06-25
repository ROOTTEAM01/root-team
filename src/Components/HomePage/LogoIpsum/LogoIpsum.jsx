import logo1 from '../../../img/logoipsum1.png'
import logo2 from '../../../img/logoipsum2.png'
import logo3 from '../../../img/logoipsum3.png'
import logo4 from '../../../img/logoipsum4.png'
import logo5 from '../../../img/logoipsum5.png'
import './logo-ipsum.css'

export let LogoIpsum = (props) => {

    let {setRefs} = props

    return (
        <>
            <section className="LogoIpsum-item">
                <div className="ContLogoIpsum">
                    <h3 ref={setRefs} className="anim">Over 25k+ software businesses growing with Solvero</h3>
                    <div className="ContLogoIpsum-Img">
                        <img ref={setRefs} className="anim" src={logo1} alt=""/>
                        <img ref={setRefs} className="anim" src={logo2} alt=""/>
                        <img ref={setRefs} className="anim" src={logo3} alt=""/>
                        <img ref={setRefs} className="anim" src={logo4} alt=""/>
                        <img ref={setRefs} className="anim" src={logo5} alt=""/>
                    </div>
                </div>
            </section>
        </>
    )
}