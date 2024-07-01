import BackgroundVideo from '../../BackgroundVideo/BackgroundVideo'
import './home-container.css'


export let HomeContainer = (props) => {

    let {setRefs} = props

    return (
        <>
                <BackgroundVideo setRefs={setRefs}/>
            {/* <section className="Header-Item">
                <section className="ItemCont"> */}
                    {/* <div className="child-itemCont">
                        <h1 className="anim" ref={setRefs}>Quality Digital Services You Really
                            Need!</h1>
                        <p>We build and transform businesses by launching market-leading digital products, platforms,
                            and
                            experiences that fuel their growth.</p>
                        <div>
                            <button>Explore Our Services</button>
                        </div>
                    </div> */}
                {/* </section>
            </section> */}
        </>
    )
}