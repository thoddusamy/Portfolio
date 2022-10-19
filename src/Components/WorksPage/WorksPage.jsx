import React from 'react'
import './WorksPage.css'
import GmailCloneScreenShot from '../../assets/gmail_clone.png'
import SocitalkScreenShot from '../../assets/socitalk_chatapp.png'

const WorksPage = () => {
    const projects = [
        {
            proj_img: GmailCloneScreenShot,
            proj_title: 'Gmail Clone',
            proj_desc: 'User can interact with mails. user can add & remove mails to starred, snoozed, deleted, archived, spam and so on.',
            proj_demo_link: 'https://gmail-clone-reactapp.netlify.app',
            proj_github_link: 'https://github.com/thoddusamy/Gmail-Clone-Frontend'
        },
        {
            proj_img: SocitalkScreenShot,
            proj_title: 'SOCITALK',
            proj_desc: "Socitalk is a chat application for user can chat with friends and family's.",
            proj_demo_link: 'https://socitalk-chatapp.netlify.app',
            proj_github_link: 'https://github.com/thoddusamy/Socitalk-Client'
        },
        {
            proj_img: 'https://www.migso-pcubed.com/wp-content/uploads/2020/05/W%E2%80%8Bhat-is-a-PMO-Your-Guide-to-the-Project-Management-Office-thumbnail.jpg',
            proj_title: 'project 3',
            proj_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            proj_demo_link: '',
            proj_github_link: ''
        },
        {
            proj_img: 'https://www.migso-pcubed.com/wp-content/uploads/2020/05/W%E2%80%8Bhat-is-a-PMO-Your-Guide-to-the-Project-Management-Office-thumbnail.jpg',
            proj_title: 'project 4',
            proj_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            proj_demo_link: '',
            proj_github_link: ''
        },
    ]
    return (
        <div className='workspage__container' id='works'>
            <div className='workspage_title'>
                <h1>Works</h1>
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
                                        <a href={proj.proj_demo_link} target="_blank">Demo</a>
                                        <a href={proj.proj_github_link} target="_blank">Github</a>
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
