import worksImg1 from "../../../img/worksImg1.jpg"
import worksImg2 from "../../../img/worksImg2.jpg"
import worksImg3 from "../../../img/worksImg3.jpg"
import patternImg from "../../../img/dot-pattern-2.png"
import './works.css'

export let Works = (props) => {

    let {setRefs} = props

    return (
        <>
            <section className="works-Items">
                <div className="worksBG">
                    <img src={patternImg} alt=""/>
                </div>
                <div className="worksCont">
                    <div className="works-ItemTittle">
                        <h4>WORKS</h4>
                        <div className="WorksTitleBtn">
                            <h2 ref={setRefs} className="anim">Our Works</h2>
                            <div>
                                <button>All Our Work</button>
                            </div>

                        </div>
                        <p>Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra enim. Adipiscing nunc
                            condimentum
                            risus id. Aquam mattis magna facilisi</p>
                    </div>
                    <div className="boxWorks">
                        <div ref={setRefs} className="boxWorksChildDiv boxImgWorks anim">
                            <img src={worksImg1} alt=""/>
                        </div>
                        <div className="animContWorks">
                            <div ref={setRefs} className="boxWorksChildDiv anim">
                                <h4>DELIVERY SERVICE - ECOMMERCE</h4>
                                <h2>We have developed an Android app for fast grocery delivery</h2>
                                <p>Commodo element sed imperdiet nunc euismod etiam aliquet viverra enim ipiscing nun
                                    condimen
                                    risus
                                    id.
                                    Aquam mattis</p>
                                <div>
                                    <button>See Case Study</button>
                                </div>
                            </div>
                        </div>
                        <div className="boxWorksChildDivCont">
                            <div ref={setRefs} className="boxWorksChildDiv WorksBoxBg anim" id="div1">
                                <h4>AI - DEVELOPMENT</h4>
                                <h2>We have developed an audio platform with smart advertising</h2>
                                <p>Commodo element sed imperdiet nunc euismod etiam aliquet viverra enim ipiscing nun
                                    condimen
                                    risus
                                    id.
                                    Aquam mattis</p>
                                <div>
                                    <button>See Case Study</button>
                                </div>
                            </div>
                            <div className="animContWorks" id="div2">
                                <div ref={setRefs} className="boxWorksChildDiv boxImgWorks anim">
                                    <img src={worksImg2} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div ref={setRefs} className="boxWorksChildDiv boxImgWorks anim">
                            <img src={worksImg3} alt=""/>
                        </div>
                        <div className="animContWorks">
                            <div ref={setRefs} className="boxWorksChildDiv anim">
                                <h4>DELIVERY SERVICE - ECOMMERCE</h4>
                                <h2>We have developed an Android app for fast grocery delivery</h2>
                                <p>Commodo element sed imperdiet nunc euismod etiam aliquet viverra enim ipiscing nun
                                    condimen
                                    risus
                                    id.
                                    Aquam mattis</p>
                                <div>
                                    <button>See Case Study</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}