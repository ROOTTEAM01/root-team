import joinImg1 from '../../../img/join1.jpg'
import joinImg2 from '../../../img/join2.jpg'
import './join-us.css'

export let JoinUs = (props) => {

    let {setRefs} = props

    return(
        <>
            <section className="JoinUs-Item">
                <div className="JoinUsCont">
                    <div className="JoinUsContImgItem">
                        <div ref={setRefs} className="aboutUsItemImg ImgPsAbsolute anim"><img src={joinImg1} alt=""/></div>
                        <div className="aboutUsItemImgAnim">
                            <div ref={setRefs} className="aboutUsItemImg anim"><img src={joinImg2} alt=""/></div>
                        </div>
                    </div>

                    <div className="JoinUsContChildDiv">
                        <h4>JOIN US</h4>
                        <h2 ref={setRefs} className="anim">Several Things Define Us As a Company</h2>
                        <p>Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra enim. Adipiscing nunc
                            condimentum
                            risus iquam.</p>
                        <div>
                            <button>Join Us Now</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}