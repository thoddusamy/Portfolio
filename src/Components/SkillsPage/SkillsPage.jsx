import React from 'react'
import './SkillsPage.css'
import HTML from '../../assets/HTML.svg'
import CSS from '../../assets/CSS.svg'
import BOOTSTRAP from '../../assets/BOOTSTRAP.svg'
import JAVASCRIPT from '../../assets/JAVASCRIPT.svg'
import REACT from '../../assets/REACT.svg'
import MONGODB from '../../assets/MONGODB.svg'
import NODEJS from '../../assets/NODEJS.svg'
import MYSQL from '../../assets/MYSQL.svg'
import EXPRESSJS from '../../assets/EXPRESSJS.svg'
import AWS from '../../assets/AWS.svg'
import NPM from '../../assets/NPM.svg'
import POSTMAN from '../../assets/POSTMAN.svg'
import HEROKU from '../../assets/HEROKU.svg'
import XD from '../../assets/XD.svg'
import PHOTOSHOP from '../../assets/PHOTOSHOP.svg'

const SkillsPage = () => {

    const techLogos = [
        {
            icon: HTML,
            alt: "html_icon"
        },
        {
            icon: CSS,
            alt: "css_icon"
        },
        {
            icon: BOOTSTRAP,
            alt: "bootstrap_icon"
        },
        {
            icon: JAVASCRIPT,
            alt: "javascript_icon"
        },
        {
            icon: REACT,
            alt: "react_icon"
        },
        {
            icon: MONGODB,
            alt: "mongodb_icon"
        },
        {
            icon: NODEJS,
            alt: "nodejs_icon"
        },
        {
            icon: MYSQL,
            alt: "mysql_icon"
        },
        {
            icon: EXPRESSJS,
            alt: "expressjs_icon"
        },
        {
            icon: AWS,
            alt: "aws_icon"
        },
    ]

    const otherLogos = [
        {
            icon: PHOTOSHOP,
            alt: "photoshop_icon"
        },
        {
            icon: XD,
            alt: "adobexd_icon"
        },
        {
            icon: HEROKU,
            alt: "heroku_icon"
        },
        {
            icon: POSTMAN,
            alt: "postman_icon"
        },
        {
            icon: NPM,
            alt: "npm_icon"
        }
    ]
    return (
        <div className='skillpage__container' id='skills'>
            <div className="what_i_know_title">
                <h1>What i know?</h1>
            </div>

            <div className="technologies">
                <div className="tech__title" data-aos="zoom-in-right">
                    <div className="tech_line1"></div>
                    <div className="tech_text">Technologies</div>
                    <div className="tech_line2"></div>
                </div>
                <div className="tech__skills">
                    {
                        techLogos.map((tech_icon) => {
                            return (
                                <div className="tech_logo" data-aos="zoom-out-up">
                                    <img src={tech_icon.icon} alt={tech_icon.alt} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="others">
                <div className="other__skills">
                    {
                        otherLogos.map((other_icon) => {
                            return (
                                <div className="other_logo" data-aos="zoom-out-down">
                                    <img src={other_icon.icon} alt={other_icon.alt} />
                                </div>
                            )
                        })
                    }
                </div>
                <div className="other__title" data-aos="zoom-in-left">
                    <div className="other_line1"></div>
                    <div className="other_text">Others</div>
                    <div className="other_line2"></div>
                </div>
            </div>
        </div>
    )
}

export default SkillsPage