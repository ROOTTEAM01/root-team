import pattern from '../../../img/dot-pattern-1.png'
import LineBg from '../../../img/LineBg.png'
import shape from '../../../img/shape-2.png'
import './news-letter.css'

export let NewsLetter = (props) => {

    let {setRefs} = props

    return (
        <>
            <section className="newsLetter-Item">
                <div ref={setRefs} className="newsLetterCont anim">
                    <img className="newsLetterImg" src={pattern} alt=""/>
                    <img className="newsLetterImg2" src={LineBg} alt=""/>
                    <img className="newsLetterImg3" src={shape} alt=""/>
                    <div className="newsLetterContChildDiv">
                        <h4>NEWSLETTER</h4>
                        <h2>Subscribe To Our Newsletter</h2>
                    </div>
                    <div className="newsLetterContChildDiv2">
                        <h3>Be ready for the ever-changing world.</h3>
                        <p>Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra</p>
                        <form>
                            <label>
                                <input type="email" placeholder="Email address" required/>
                            </label>
                            <button>Subscribe</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}