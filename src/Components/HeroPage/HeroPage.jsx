import React from 'react'
import './HeroPage.css'
import 'animate.css'
import HeroImage from '../../assets/heropic.svg'
import Github from '../../assets/github.svg'
import Gmail from '../../assets/gmail.svg'
import LinkedIn from '../../assets/linkedin.svg'
import Twitter from '../../assets/twitter.svg'
import { Link } from 'react-scroll'

const HeroPage = () => {
    return (
        <div className='heropage__container' id='home'>
            <div className='heropage__leftside'>
                <div className='leftside__top'>
                    <h1 data-aos="zoom-in-up">Hey, Hello</h1>
                    <h4 data-aos="zoom-in-down">I'm</h4>
                </div>
                <div className='leftside__bottom'>
                    <h1 className='animate__animated animate__rubberBand'>Thoddusamy.</h1>
                    <p data-aos="fade-up">
                        I'm a passionate web developer. I love coding
                        and developing a dynamic web applications,
                        user interface and more...
                    </p>
                    <div className='hero__btns'>
                        <Link activeClass='active' spy={true} smooth={true} duration={1000} to="about" className='aboutme_btn'>About Me</Link>
                        <a href='https://drive.google.com/file/d/1JLp4Is6E2TYRzZz7gKw2h524BVUWGLvP/view?usp=sharing' className='downloadCV_btn' target={'_blank'}>Download CV</a>
                    </div>
                </div>
            </div>

            <div className='heropage__rightside'>
                <div className='hero__image'>
                    <img src={HeroImage} alt='hero_image' />
                </div>
                <div className='social_icons'>
                    <a href='https://github.com/thoddusamy' target={'_blank'}>
                        <span>Github</span>
                        <img src={Github} alt='github' />
                    </a>
                    <a href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBnptrntKtFlsSRjnFshnSlzphKpDpklThjkzRtsvxsvpGZMmxHWMBJLjFxDlvtdmzcxPTj' target={"_blank"}>
                        <span>Gmail</span>
                        <img src={Gmail} alt='gmail' />
                    </a>
                    <a href='https://www.linkedin.com/in/thoddusamy-g-449b26180' target={'_blank'}>
                        <span>LinkedIn</span>
                        <img src={LinkedIn} alt='linkedin' />
                    </a>
                    <a href='https://twitter.com/ArunThoddusamy?t=rIhcc8hcTf5qXfObMlbjHg&s=08' target={'_blank'}>
                        <span>Twitter</span>
                        <img src={Twitter} alt='twitter' />
                    </a>
                    <div className="line"></div>
                </div>
            </div>
        </div>
    )
}

export default HeroPage
