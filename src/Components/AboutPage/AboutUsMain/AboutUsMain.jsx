import imgAbout from "../../../img/aboutUs.jpg";
import AboutMainImg2 from "../../../img/aboutMainImg2.jpg";
import AboutMainImg3 from "../../../img/aboutMainImg3.jpg";
import './AboutUsMain.css'


export let AboutUsMain = (props) => {

    let {setRefs} = props

    return (
        <>
            <section className="aboutUs-Item aboutUsMain">
                <div className="aboutUsCont">
                    <div className="aboutUsImg">
                        <img ref={setRefs} className="anim" src={imgAbout} alt=""/>
                    </div>
                    <div className="aboutUsText">
                        <h4>ABOUT US</h4>
                        <h2 ref={setRefs} className="anim">We’re On Mission To Help Business Grow Faster Thanever.</h2>
                        <p>Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra enim. Adipiscing nunc
                            condimentum
                            risus id. Aquam mattis magna facilisi fermentum, euismod vitae. Porttitor sit tincidunt
                            dictum
                            facilisi
                            eget orci velit. Nulla laoreet nunc gravida augue aenean sed elementum, in.</p>
                    </div>
                </div>
                <div className="aboutUsCont">
                    <div className="aboutUsText aboutUsMainItem2">
                        <h4>IDEAS</h4>
                        <h2 ref={setRefs}  className="anim">Bringing your ideas to life</h2>
                        <p>Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra enim. Adipiscing nunc
                            condimentum
                            risus id. Aquam mattis magna facilisi fermentum, euismod vitae. Porttitor sit tincidunt
                            dictum
                            facilisi
                            eget orci velit. Nulla laoreet nunc gravida augue aenean sed elementum, in.</p>
                        <p className='aboutUsMainItem2P'>Aquam mattis magna facilisi fermentum, euismod vitae. Porttitor
                            sit tincidunt dictum facilisi
                            eget orci velit. Nulla laoreet nunc gravida augue aenean sed elementum, in.</p>
                    </div>
                    <div className="aboutUsImg aboutMainImg2">
                        <img ref={setRefs} className="anim" src={AboutMainImg2} alt=""/>
                    </div>
                </div>
                <div className="aboutUsCont aboutUsMainCont">
                    <div className="aboutUsImg aboutUsMainItem3">
                        <img ref={setRefs} className="anim" src={AboutMainImg3} alt=""/>
                    </div>
                    <div className="aboutUsText aboutUsMainItem3">
                        <h4>ABOUT US</h4>
                        <h2 ref={setRefs} className="anim">Our Values</h2>
                        <p>Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra enim. Adipiscing nunc
                            condimentum
                            risus id. Aquam mattis magna facilisi fermentum, euismod vitae. Porttitor sit tincidunt
                            dictum
                            facilisi
                            eget orci velit. Nulla laoreet nunc gravida augue aenean sed elementum, in.</p>
                        <p className='aboutUsMainItem2P'>Commodo elementum, sed imperdiet nunc euismod etiam aliquet
                            viverra enim. Adipiscing nunc
                            condimentum risus id. Aquam mattis magna facilisi fermentum, euismod.</p>
                    </div>
                </div>
            </section>
        </>
    )
}