import React from 'react'
import './AboutPage.css'
import Lottie from 'lottie-react'
import DeveloperYoga from '../../assets/developer yoga.json'
import GraduateIcon from '../../assets/graduate_icon.svg'
import SchoolIcon1 from '../../assets/school_icon.svg'
import SchoolIcon2 from '../../assets/school_icon2.svg'
import OfficeBagIcon from '../../assets/officeBag_icon.svg'

const AboutPage = () => {
    const style = {
        height: 400,
        width: 400
    }

    const qualifications = [
        {
            icon: GraduateIcon,
            title: "B.Sc Mathematics",
            university: "Mahendra Arts & Science College (2016-2019)",
            alt: "graduate_icon"
        },
        {
            icon: SchoolIcon1,
            title: "Higher Secondary School",
            university: "The Gugai Higher Secondary School (2014)",
            alt: "school_icon"
        },
        {
            icon: SchoolIcon2,
            title: "Secondary School Leaving Certificate",
            university: "The Gugai Higher Secondary School (2012)",
            alt: "school_icon"
        },
    ]
    return (
        <div className='aboutpage__container' id='about'>
            <div className='aboutme_title'>
                <h1>About Me</h1>
            </div>
            <div className='aboutme__content'>
                <div className='aboutme__anime'>
                    <Lottie animationData={DeveloperYoga} loop={true} style={style} />
                </div>
                <div className='aboutme__text' data-aos="fade-left">
                    Hi, I'm Thoddusamy and I'm a Front-end & Back-end developer
                    based in India. I have a keen interest in web applications,
                    animations, UI effects (and occasionally designing). I am
                    interested in developing dynamic applications and Curiosity to
                    learn new technologies. Then I am well-organized person,
                    independent worker with high attention to detail, self-motivated
                    person and quick learner.
                </div>
            </div>
            <div className='qualifi__experience'>
                <div className='aca_qualifi'>
                    <h1 data-aos="zoom-in-down">Academic <span>Qualification</span></h1>
                    {
                        qualifications.map((qualifi) => {
                            return (
                                <div className="qualification" data-aos="zoom-in">
                                    <img src={qualifi.icon} alt={qualifi.alt} />
                                    <div className="qualifi_text">
                                        <h1>{qualifi.title}</h1>
                                        <h4>{qualifi.university}</h4>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='job_exp'>
                    <h1 data-aos="zoom-in-down">Job <span>Experience</span></h1>

                    <div className="Job_experience" data-aos="zoom-in">
                        <div className="job_exp_icon">
                            <img src={OfficeBagIcon} alt="officeBag_icon" />
                        </div>
                        <div className="job_desc">
                            <div className="job_text">
                                <h1>Trainee Executive</h1>
                                <h4>Mahendra Next Wealth IT India Pvt. Ltd. (Oct-2020 to Mar-2022)</h4>
                            </div>
                            <p>I worked as a Verification Expert and Subject Matter Expert at Mahendra Next
                                Wealth IT India Pvt. Ltd. As a verification expert, I have done the work of
                                verifying documents of many countries like Passport, Visa, DL, National ID Cards
                                and as a subject matter expert, I have helped others to clear their doubts on how
                                to verify documents and detect fraudsters.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
