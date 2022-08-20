import React from 'react'
import './WorksPage.css'

const WorksPage = () => {
    const projects = [
        {
            proj_img: 'https://www.migso-pcubed.com/wp-content/uploads/2020/05/W%E2%80%8Bhat-is-a-PMO-Your-Guide-to-the-Project-Management-Office-thumbnail.jpg',
            proj_title: 'project 1',
            proj_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            proj_demo_link: '',
            proj_github_link: ''
        },
        {
            proj_img: 'https://www.migso-pcubed.com/wp-content/uploads/2020/05/W%E2%80%8Bhat-is-a-PMO-Your-Guide-to-the-Project-Management-Office-thumbnail.jpg',
            proj_title: 'project 2',
            proj_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            proj_demo_link: '',
            proj_github_link: ''
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
        {
            proj_img: 'https://www.migso-pcubed.com/wp-content/uploads/2020/05/W%E2%80%8Bhat-is-a-PMO-Your-Guide-to-the-Project-Management-Office-thumbnail.jpg',
            proj_title: 'project 5',
            proj_desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            proj_demo_link: '',
            proj_github_link: ''
        },
        {
            proj_img: 'https://www.migso-pcubed.com/wp-content/uploads/2020/05/W%E2%80%8Bhat-is-a-PMO-Your-Guide-to-the-Project-Management-Office-thumbnail.jpg',
            proj_title: 'project 6',
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
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </p>
                                    <div className="proj_btns">
                                        <a href="#">Demo</a>
                                        <a href="#">Github</a>
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
