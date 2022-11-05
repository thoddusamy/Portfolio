import React, { useState } from 'react'
import './Navbar.css'
import BrandLogo from '../../assets/Brand Logo.svg'
import { Link } from 'react-scroll'
import { useEffect } from 'react'
import { useRef } from 'react'

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const handleShowHidePopup = () => {
        menuOpen ? setMenuOpen(false) : setMenuOpen(true)
    }

    const ref = useRef()

    useEffect(() => {
        document.addEventListener("click", handleDetectOutsideClick1, true)
    }, [])

    const handleDetectOutsideClick1 = (e) => {
        if (!ref.current.contains(e.target)) {
            setMenuOpen(false)
        }
    }

    return (
        <>
            {
                menuOpen === false ? <div className="navbar__toggleIcon" onClick={handleShowHidePopup}>
                    <img src={BrandLogo} alt="brandlogo" />
                </div> : <div className="navbar__container_mobile" ref={ref}>
                    <div className="navbar__links_mobile">
                        <ul className='navbar__items_mobile'>
                            <li><Link onClick={() => setMenuOpen(false)} activeClass='active' spy={true} smooth={true} duration={1000} to="home">home</Link></li>
                            <li><Link onClick={() => setMenuOpen(false)} activeClass='active' spy={true} smooth={true} duration={1000} to="about">about</Link></li>
                            <li><Link onClick={() => setMenuOpen(false)} activeClass='active' spy={true} smooth={true} duration={1000} to="skills">skills</Link></li>
                            <li><Link onClick={() => setMenuOpen(false)} activeClass='active' spy={true} smooth={true} duration={1000} to="works">projects</Link></li>
                            <li><Link onClick={() => setMenuOpen(false)} activeClass='active' spy={true} smooth={true} duration={1000} to="contact">contact</Link></li>
                        </ul>
                    </div>
                </div>
            }
            <div className="navbar__container">
                <div className="brand__logo">
                    <Link to='home' spy={true} smooth={true} duration={1000}><img src={BrandLogo} alt="brandlogo" /></Link>
                </div>
                <div className="navbar__links">
                    <ul className='navbar__items'>
                        <li><Link activeClass='active' spy={true} smooth={true} duration={1000} to="home">home</Link></li>
                        <li><Link activeClass='active' spy={true} smooth={true} duration={1000} to="about">about</Link></li>
                        <li><Link activeClass='active' spy={true} smooth={true} duration={1000} to="skills">skills</Link></li>
                        <li><Link activeClass='active' spy={true} smooth={true} duration={1000} to="works">projects</Link></li>
                        <li><Link activeClass='active' spy={true} smooth={true} duration={1000} to="contact">contact</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar

