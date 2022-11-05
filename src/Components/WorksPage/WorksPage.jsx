import React from 'react'
import './WorksPage.css'
import GmailCloneScreenShot from '../../assets/gmail_clone.png'
import SocitalkScreenShot from '../../assets/socitalk_chatapp.png'
import MenZeeScreenShot from '../../assets/menzee.png'
import BlogspotScreenShot from '../../assets/blogspot.png'

const WorksPage = () => {

    const projects = [
        {
            proj_img: GmailCloneScreenShot,
            proj_title: 'Gmail Clone',
            proj_desc: 'User can interact with mails. user can add & remove mails to starred, snoozed, deleted, archived, spam and so on.',
            proj_demo_link: 'https://gmail-clone-reactapp.netlify.app',
            proj_frontend_link: 'https://github.com/thoddusamy/Gmail-Clone-Frontend',
            proj_backend_link: 'https://github.com/thoddusamy/Gmail-Clone-Backend'
        },
        {
            proj_img: SocitalkScreenShot,
            proj_title: 'SOCITALK',
            proj_desc: "Socitalk is a chat application for user can chat with friends and family's.",
            proj_demo_link: 'https://socitalk-chatapp.netlify.app',
            proj_frontend_link: 'https://github.com/thoddusamy/Socitalk-Client',
            proj_backend_link: 'https://github.com/thoddusamy/Socitalk-Server'
        },
        {
            proj_img: MenZeeScreenShot,
            proj_title: 'MenZee',
            proj_desc: 'MenZee is a Ecommerce app for mens. user can buy cloths and pay amount through online or cash on delivery.',
            proj_demo_link: 'https://menzee.netlify.app',
            proj_frontend_link: 'https://github.com/thoddusamy/Menzee-Ecommerce-Frontend',
            proj_backend_link: 'https://github.com/thoddusamy/Menzee-Ecommerce-Backend'
        },
        {
            proj_img: BlogspotScreenShot,
            proj_title: 'Blog Spot',
            proj_desc: 'Blogspot is a blog app. User can read a interesting blogs and create,update and delete a blogs.',
            proj_demo_link: 'https://blogspotapp.netlify.app',
            proj_frontend_link: 'https://github.com/thoddusamy/Blogspot-Frontend',
            proj_backend_link: 'https://github.com/thoddusamy/Blogspot-Backend'
        },
    ]

    return (
        <div className='workspage__container' id='works'>
            <div className='workspage_title'>
                <h1>Projects</h1>
            </div>
            <div className='projects_box'>
                {
                    projects.map((proj) => {
                        return (
                            <div className='project' data-aos="flip-left">
                                <img src={proj.proj_img} alt="project_image" />
                                <div className="proj_desc">
                                    <h1>{proj.proj_title}</h1>
                                    <p>
                                        {proj.proj_desc}
                                    </p>
                                    <div className="proj_btns">
                                        <div className='github_btns'>
                                            <a href={proj.proj_frontend_link} target="_blank">Frontend</a>
                                            <a href={proj.proj_backend_link} target="_blank">Backend</a>
                                        </div>
                                        <a href={proj.proj_demo_link} target="_blank">Demo</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default WorksPage
