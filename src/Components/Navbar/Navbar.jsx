import React, { useState } from 'react'
import './Navbar.css'
import BrandLogo from '../../assets/Brand Logo.svg'
import { Link } from 'react-scroll'

const Navbar = () => {

    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            {
                menuOpen === false && mobile === true ?
                    (<div className="navbar__toggleIcon" onClick={() => setMenuOpen(true)}>
                        <img src={BrandLogo} alt="brandlogo" />
                    </div>) :
                    (<div className="navbar__container">
                        <div className="brand__logo">
                            <a href="/"><img src={BrandLogo} alt="brandlogo" /></a>
                        </div>
                        <div className="navbar__links">
                            <ul className='navbar__items'>
                                <li><Link onClick={() => setMenuOpen(false)} activeClass='active' spy={true} smooth={true} duration={1000} to="home">home</Link></li>
                                <li><Link onClick={() => setMenuOpen(false)} activeClass='active' spy={true} smooth={true} duration={1000} to="about">about</Link></li>
                                <li><Link onClick={() => setMenuOpen(false)} activeClass='active' spy={true} smooth={true} duration={1000} to="skills">skills</Link></li>
                                <li><Link onClick={() => setMenuOpen(false)} activeClass='active' spy={true} smooth={true} duration={1000} to="works">works</Link></li>
                                <li><Link onClick={() => setMenuOpen(false)} activeClass='active' spy={true} smooth={true} duration={1000} to="contact">contact</Link></li>
                            </ul>
                        </div>

                    </div>)
            }
        </>
    )
}

export default Navbar

