import LineBg from '../../../img/LineBg.png'
import shape from '../../../img/shape-2-1.png'
import users from '../../../img/users.jpg'
import users2 from '../../../img/users2.jpg'
import './testimonials.css'
import '../../../CSS/Respons/respons.css'
import '../../../CSS/Animation/animation.css'

export let Testimonials = (props) => {

    let {setRefs} = props

    return (<>
        <section className="Testimonials-Item">
            <div className="backLineImg">
                <img src={LineBg} alt=""/>
            </div>
            <div className="backLineImg2">
                <img src={shape} alt=""/>
            </div>
            <div className="TestimonialsCont">
                <div className="TestimonialsTittleItem">
                    <div className="works-ItemTittle">
                        <h4>TESTIMONIALS</h4>
                        <div className="WorksTitleBtn">
                            <h2 ref={setRefs} className="anim">Testimonials</h2>
                            <div>
                                <button>View All</button>
                            </div>
                        </div>
                        <p>Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra enim. Adipiscing nunc
                            condimentum
                            risus id. Aquam mattis magna facilisi</p>
                    </div>
                </div>
                <div className="TestimonialsBox">
                    <div ref={setRefs} className="TestimonialsBoxChildDiv anim">
                        <div className="TestimonialsBoxCont">
                            <h2>The site is interactive and easier</h2>
                            <span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                            </span>
                            <p>Tincidunt consequat sed volutpat facilisis urna magna. Vitae, urna aliquet non
                                phasellus.
                                Vitae
                                enim semper non elementum donec at. Sem velit amet aliquet velit. Risus fermentum
                                proin.</p>
                        </div>
                        <div className="TestimonialsBoxCont2">
                            <img src={users} alt=""/>
                            <div className="TestimonialsNameSurname">
                                <h3>Jhon William</h3>
                                <h4>FOUNDER FURNITI</h4>
                            </div>
                        </div>
                    </div>
                    <div className="TestimonialsBoxChildDivAnim">
                        <div ref={setRefs} className="TestimonialsBoxChildDiv anim">
                            <div className="TestimonialsBoxCont">
                                <h2>The site is interactive and easier</h2>
                                <span>
                                     <i className="fa-solid fa-star"></i>
                                     <i className="fa-solid fa-star"></i>
                                     <i className="fa-solid fa-star"></i>
                                     <i className="fa-solid fa-star"></i>
                                     <i className="fa-solid fa-star"></i>
                                </span>
                                <p>Tincidunt consequat sed volutpat facilisis urna magna. Vitae, urna aliquet non
                                    phasellus.
                                    Vitae
                                    enim semper non elementum donec at. Sem velit amet aliquet velit. Risus
                                    fermentum
                                    proin.</p>
                            </div>
                            <div className="TestimonialsBoxCont2">
                                <img src={users2} alt=""/>
                                <div className="TestimonialsNameSurname">
                                    <h3>Samantha William</h3>
                                    <h4>FOUNDER FURNITI</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)
}