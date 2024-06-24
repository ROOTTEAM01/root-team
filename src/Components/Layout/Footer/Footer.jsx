import ProgrammingFonImg from "../../../img/ProgrammingFonImg.png"
import pattern from "../../../img/dot-pattern-2.png"
import logo from "../../../img/logo.png"
import './footer.css'

export let Footer = (props) => {

    let {setRefs} = props

    return (
        <>
            <footer>
                <img className="footerBg" src={ProgrammingFonImg} alt="#"/>
                <img className="footerBg2" src={pattern} alt="#"/>
                <div className="footerItem">
                    <div ref={setRefs} className="footerBox anim">
                        <img src={logo} alt=""/>
                        <p>Commodo elementum, sed imperdiet nunc <br/> euismod etiam aliquet viverra enim.
                            Adipiscing <br/> nunc
                            condimentum risus id. Aquam mattis</p>
                        <h3>Payment Method</h3>
                        <div className="footerCardBox">
                            <i className="fa-brands fa-cc-mastercard"></i>
                            <i className="fa-brands fa-cc-paypal"></i>
                            <i className="fa-brands fa-cc-stripe"></i>
                            <i className="fa-brands fa-cc-visa"></i>
                            <i className="fa-brands fa-cc-apple-pay"></i>
                            <i className="fa-brands fa-cc-discover"></i>
                            <i className="fa-brands fa-cc-amazon-pay"></i>
                            <i className="fa-brands fa-cc-jcb"></i>
                        </div>
                    </div>
                    <div ref={setRefs} className="footerBox anim">
                        <h3>Contact Us</h3>
                        <p>768 Market Street San <br/> Francisco, CA 64015, <br/> United States</p>
                        <p>customer@solvero.com</p>
                        <p>(+021) 345 678 910</p>
                        <div className="footerCardBox2 ">
                            <a href="https://www.facebook.com/rootteamllc">
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a href="https://t.me/rootteamllc">
                                <i className="fa-brands fa-telegram"></i>
                            </a>
                            <a href="https://www.instagram.com/rootteam_it/?hl=ru">
                                <i className="fa-brands fa-square-instagram"></i>
                            </a>
                            <a href="https://www.youtube.com/@rootteam">
                                <i className="fa-brands fa-square-youtube"></i>
                            </a>
                            <a href="https://www.tiktok.com/@rootteam_it?_t=8mVCId0fW52&_r=1">
                                <i className="fa-brands fa-tiktok"></i>
                            </a>
                        </div>
                    </div>
                    <div ref={setRefs} className="footerBox anim">
                        <h3>Information</h3>
                        <a href="#">
                            <p>About</p>
                        </a>
                        <a href="#">
                            <p>Customer Service</p>
                        </a>
                        <a href="#">
                            <p>Services</p>
                        </a>
                        <a href="#">
                            <p>Privacy Policy</p>
                        </a>
                        <a href="#">
                            <p>Terms & Condition</p>
                        </a>
                        <a href="#">
                            <p>Blog</p>
                        </a>
                    </div>
                    <div ref={setRefs} className="footerBox anim">
                        <h3>Customer Service</h3>
                        <a href="#">
                            <p>Search Terms</p>
                        </a>
                        <a href="#">
                            <p>Advanced Search</p>
                        </a>
                        <a href="#">
                            <p>Orders and Returns</p>
                        </a>
                        <a href="#">
                            <p>Contact Us</p>
                        </a>
                        <a href="#">
                            <p>Store Locations</p>
                        </a>
                    </div>

                </div>
                <div className="footerItem2">
                    <p>© 2022 Solvero. Powered by ThemeWarrior</p>
                    <div className="footerEndTextDiv">
                        <a href="#"><p>Support</p></a>
                        <a href="#"><p>Privacy Statement</p></a>
                        <a href="#"><p>Terms of use</p></a>
                        <a href="#"><p>Cookies</p></a>
                    </div>
                </div>
            </footer>
        </>
    )
}