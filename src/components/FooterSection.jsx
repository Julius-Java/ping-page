import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    const facebookIcon = <FontAwesomeIcon icon={faFacebookF} style={{color: "#4f80f3",}} />
    const twitterIcon = <FontAwesomeIcon icon={faTwitter} style={{color: "#4f80f3",}} />
    const igIcon = <FontAwesomeIcon icon={faInstagram} style={{color: "#4f80f3",}} />

    return (
        <footer className="container footer">
            <div className="icon-container">
                <a href="#">
                    <div className="icon">
                        {facebookIcon}
                    </div>
                </a>
                <a href="#">
                    <div className="icon">
                        {twitterIcon}
                    </div>
                </a>
                <a href="#">
                    <div className="icon">
                        {igIcon}
                    </div>
                </a>
            </div>
            <div>
                <p className='copyrightText'>&#169; Copyright Ping. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;