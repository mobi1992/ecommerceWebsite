import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import { Image } from 'react-bootstrap'
import './index.css'
const Footer = () => {
    return (
        <>
        <div className = 'footer-display-on-large-screens'>
            <div className='footer-con'>
                <div className='footer-left'>
                    <h1 style={{ paddingLeft: '1vw' }}>LEO.</h1>
                    <p style={{ padding: '0 1vw' }}>There are many variations of passages of Lorem Ipsum available, but
                        the majority have suffered alteration in some form, by injected
                        humour, or randomised words which don’t look even slightly believable.</p>
                    <div className='social-con'>
                        <div className='social-icon' style={{ background: '#3B5999' }}>
                            <Facebook />
                        </div>
                        <div className='social-icon' style={{ background: '#E4405F' }}>
                            <Instagram />
                        </div>
                        <div className='social-icon' style={{ background: '#55ACEE' }}>
                            <Twitter />
                        </div>
                        <div className='social-icon' style={{ background: '#E60023' }}>
                            <Pinterest />
                        </div>
                    </div>
                </div>
                <div className='footer-center'>
                    <h3 style={{ margin: '5vh 3vh 3vh 5vh' }}>Useful Links</h3>
                    <ul className='footer-ul'>
                        <li className='footer-li'>Home</li>
                        <li className='footer-li'>Cart</li>
                        <li className='footer-li'>Man Fashion</li>
                        <li className='footer-li'>Woman Fashion</li>
                        <li className='footer-li'>Accessories</li>
                        <li className='footer-li'>My Account</li>
                        <li className='footer-li'>Order Tracking</li>
                        <li className='footer-li'>Wishlist</li>
                        <li className='footer-li'>Wishlist</li>
                        <li className='footer-li'>Terms</li>
                    </ul>
                </div>
                <div className='footer-right'>
                    <h3 style={{ margin: '5vh 3vh 3vh 5vh' }}>Contact</h3>
                    <div className='contact-item'><Room style={{ marginRight: '0.5vh' }} />622 Dixie Path , South Tobinchester 98336</div>
                    <div className='contact-item'><Phone style={{ marginRight: '0.5vh' }} />+1 234 56 78</div>
                    <div className='contact-item'><MailOutline style={{ marginRight: '0.5vh' }} />contact@lama.dev
                    </div>
                    <Image style = {{width : '50%'}} src='https://i.ibb.co/Qfvn4z6/payment.png'/>
                </div>
            </div>
            </div>
            <div className='footer-display-on-medium-screens'>
            <div className='footer-con'>
                <div className='footer-left'>
                    <h1 style={{ paddingLeft: '1vw' }}>LEO.</h1>
                    <p style={{ padding: '0 1vw' }}>There are many variations of passages of Lorem Ipsum available, but
                        the majority have suffered alteration in some form, by injected
                        humour, or randomised words which don’t look even slightly believable.</p>
                    <div className='social-con'>
                        <div className='social-icon' style={{ background: '#3B5999' }}>
                            <Facebook />
                        </div>
                        <div className='social-icon' style={{ background: '#E4405F' }}>
                            <Instagram />
                        </div>
                        <div className='social-icon' style={{ background: '#55ACEE' }}>
                            <Twitter />
                        </div>
                        <div className='social-icon' style={{ background: '#E60023' }}>
                            <Pinterest />
                        </div>
                    </div>
                </div>
                <div className='footer-right'>
                    <h3 style={{ margin: '5vh 3vh 3vh 5vh' }}>Contact</h3>
                    <div className='contact-item'><Room style={{ marginRight: '0.5vh' }} />622 Dixie Path , South Tobinchester 98336</div>
                    <div className='contact-item'><Phone style={{ marginRight: '0.5vh' }} />+1 234 56 78</div>
                    <div className='contact-item'><MailOutline style={{ marginRight: '0.5vh' }} />contact@lama.dev
                    </div>
                    <Image style = {{width : '50%'}} src='https://i.ibb.co/Qfvn4z6/payment.png'/>
                </div>
                </div>
                <div className='footer-con-medium-screens'>
                    <h3 style={{ margin: '5vh 3vh 3vh 5vh' }}>Useful Links</h3>
                    <ul className='footer-ul'>
                        <li className='footer-li-med-screens'>Home</li>
                        <li className='footer-li-med-screens'>Cart</li>
                        <li className='footer-li-med-screens'>Man Fashion</li>
                        <li className='footer-li-med-screens'>Woman Fashion</li>
                        <li className='footer-li-med-screens'>Accessories</li>
                        <li className='footer-li-med-screens'>My Account</li>
                        <li className='footer-li-med-screens'>Order Tracking</li>
                        <li className='footer-li-med-screens'>Wishlist</li>
                        <li className='footer-li-med-screens'>Wishlist</li>
                        <li className='footer-li-med-screens'>Terms</li>
                    </ul>
                </div>
            </div>
            <div className = 'footer-display-on-small-screens'>
            <div className='footer-con-small-screens'>
                <div className='footer-left'>
                    <h1 style={{ paddingLeft: '1vw' }}>LEO.</h1>
                    <p style={{ padding: '0 1vw' }}>There are many variations of passages of Lorem Ipsum available, but
                        the majority have suffered alteration in some form, by injected
                        humour, or randomised words which don’t look even slightly believable.</p>
                    <div className='social-con'>
                        <div className='social-icon' style={{ background: '#3B5999' }}>
                            <Facebook />
                        </div>
                        <div className='social-icon' style={{ background: '#E4405F' }}>
                            <Instagram />
                        </div>
                        <div className='social-icon' style={{ background: '#55ACEE' }}>
                            <Twitter />
                        </div>
                        <div className='social-icon' style={{ background: '#E60023' }}>
                            <Pinterest />
                        </div>
                    </div>
                </div>
                <div className='footer-center'>
                    <h3 style={{ margin: '5vh 3vh 3vh 5vh' }}>Useful Links</h3>
                    <ul className='footer-ul'>
                        <li className='footer-li'>Home</li>
                        <li className='footer-li'>Cart</li>
                        <li className='footer-li'>Man Fashion</li>
                        <li className='footer-li'>Woman Fashion</li>
                        <li className='footer-li'>Accessories</li>
                        <li className='footer-li'>My Account</li>
                        <li className='footer-li'>Order Tracking</li>
                        <li className='footer-li'>Wishlist</li>
                        <li className='footer-li'>Wishlist</li>
                        <li className='footer-li'>Terms</li>
                    </ul>
                </div>
                <div className='footer-right'>
                    <h3 style={{ margin: '5vh 3vh 3vh 5vh' }}>Contact</h3>
                    <div style = {{marginLeft : '2vh'}}>
                    <div className='contact-item'><Room style={{ marginRight: '0.5vh' }} />622 Dixie Path , South Tobinchester 98336</div>
                    <div className='contact-item'><Phone style={{ marginRight: '0.5vh' }} />+1 234 56 78</div>
                    <div className='contact-item'><MailOutline style={{ marginRight: '0.5vh' }} />contact@lama.dev
                    </div>
                    <Image style = {{width : '50%'}} src='https://i.ibb.co/Qfvn4z6/payment.png'/>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Footer
