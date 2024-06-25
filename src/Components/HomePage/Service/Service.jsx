import ProgrammingFonImg from '../../../img/ProgrammingFonImg.png';
import ProgrammingFonImg2 from '../../../img/ProgrammingFonImg2.png';
import mobile from '../../../img/mobile.png';
import dns from '../../../img/dns.png';
import dashboard from '../../../img/dashboard.png';
import blur from '../../../img/blur.png';
import view from '../../../img/view_in_ar.png';
import groups from '../../../img/groups.png';
import './service.css'

export let Service = (props) => {

    let {setRefs} = props

    return (
        <>
            <section className="Services-Item">
                <img className="ItemProgramming" src={ProgrammingFonImg} alt=""/>
                <img className="ItemProgramming2" src={ProgrammingFonImg2} alt=""/>
                <div className="ServicesCont">
                    <div className="ServicesTitle">
                        <h4>SERVICES</h4>
                        <h2 className="anim" ref={setRefs}>Our Services</h2>
                        <p>Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra enim. Adipiscing nunc
                            condimentum
                            risus id. Aquam mattis magna facilisi</p>
                    </div>
                    <div className="ProgramingItems">
                        <div ref={setRefs} className="programingLanguageItems anim">
                            <div className="nameProgrammingItem">
                                <h3>Mobile Development</h3>
                                <img src={mobile} alt=""/>
                            </div>
                            <p>Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra enim. Adipiscing nunc
                                condimentum
                                risus id. Aquam mattis magna facilisi</p>
                            <div className="btnLgProgramming">
                                <button>Discover More</button>
                            </div>
                        </div>
                        <div className="ContAnimate">
                            <div ref={setRefs} className="programingLanguageItems BackendItems anim">
                                <div className="nameProgrammingItem">
                                    <h3>Back-end Development</h3>
                                    <img src={dns} alt=""/>
                                </div>
                                <p>Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra enim. Adipiscing
                                    nunc
                                    condimentum
                                    risus id. Aquam mattis magna facilisi</p>
                                <div className="btnLgProgramming">
                                    <button>Discover More</button>
                                </div>
                            </div>
                        </div>
                        <div ref={setRefs} className="programingLanguageItems frontItem anim">
                            <div className="nameProgrammingItem">
                                <h3>Front-end Development</h3>
                                <img src={dashboard} alt=""/>
                            </div>
                            <p>Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra enim. Adipiscing nunc
                                condimentum
                                risus id. Aquam mattis magna facilisi</p>
                            <div className="btnLgProgramming">
                                <button>Discover More</button>
                            </div>
                        </div>
                        <div className="ContAnimate">
                            <div ref={setRefs} className="programingLanguageItems AI-Item anim">
                                <div className="nameProgrammingItem">
                                    <h3>AI Development</h3>
                                    <img src={blur} alt=""/>
                                </div>
                                <p>Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra enim. Adipiscing
                                    nunc
                                    condimentum
                                    risus id. Aquam mattis magna facilisi</p>
                                <div className="btnLgProgramming">
                                    <button>Discover More</button>
                                </div>
                            </div>
                        </div>
                        <div ref={setRefs} className="programingLanguageItems anim">
                            <div className="nameProgrammingItem">
                                <h3>Computer Development</h3>
                                <img src={view} alt=""/>
                            </div>
                            <p>Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra enim. Adipiscing nunc
                                condimentum
                                risus id. Aquam mattis magna facilisi</p>
                            <div className="btnLgProgramming">
                                <button>Discover More</button>
                            </div>
                        </div>
                        <div className="ContAnimate">
                            <div ref={setRefs} className=" programingLanguageItems BackendItems anim">
                                <div className="nameProgrammingItem">
                                    <h3>Team Augmentation</h3>
                                    <img src={groups} alt=""/>
                                </div>
                                <p>Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra enim. Adipiscing
                                    nunc
                                    condimentum
                                    risus id. Aquam mattis magna facilisi</p>
                                <div className="btnLgProgramming">
                                    <button>Discover More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}