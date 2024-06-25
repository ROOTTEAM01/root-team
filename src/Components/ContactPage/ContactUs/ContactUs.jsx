import './ContactUs.css'

export let ContactUS = () => {
    return (
        <div className="contact-us">
            <div className='ItemContactUsBg'></div>
            <div className='contact-us-container'>
                <div className='contact-us-item'>
                    <h4>CONTACT</h4>
                    <h2>Let’s Scale Your Brand, Together</h2>
                    <p>Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra enim. Adipiscing nunc
                        condimentum risus id. Aquam mattis magna facilisi</p>
                    <h3>Contact Us</h3>
                    <span>768 Market Street San Francisco, CA 64015, United States</span>
                    <span>customer@solvero.com</span>
                    <span>(+021) 345 678 910</span>
                    <div className='ContactUsLink'>
                        <div className="footerCardBox2 "><a href="https://www.facebook.com/rootteamllc">
                            <i className="fa-brands fa-facebook" aria-hidden="true"></i></a>
                            <a href="https://t.me/rootteamllc"><i className="fa-brands fa-twitter"></i></a>
                            <a href="https://www.instagram.com/rootteam_it/?hl=ru"><i
                                className="fa-brands fa-square-instagram" aria-hidden="true"></i></a>
                            <a href="https://www.youtube.com/@rootteam"><i className="fa-brands fa-square-youtube"
                                                                           aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
                <div className='contact-us-box'>
                    <h5>Contact Us</h5>
                    <p>Commodo elementum, sed imperdiet nunc euismod etiam aliquet viverra</p>
                    <form>
                        <input size="1" type="text" name="form_fields[name]" id="form-field-name"
                               className="elementor-field elementor-size-sm  elementor-field-textual"
                               placeholder="Your Name"/>
                        <input size="1" type="email" name="form_fields[email]" id="form-field-email"
                               className="elementor-field elementor-size-sm  elementor-field-textual"
                               placeholder="Email address" required="required" aria-required="true"/>
                        <textarea name="form_fields[message]" id="form-field-message" rows="5"
                                  placeholder="Message"></textarea>
                        <div>
                            <button><b> Start a Project</b></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}