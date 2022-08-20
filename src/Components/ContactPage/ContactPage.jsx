import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactPage.css'
import TwitterIcon from '../../assets/twitter_icon.svg'
import InstagramIcon from '../../assets/instagram_icon.svg'
import GithubIcon from '../../assets/github_icon.svg'
import FacebookIcon from '../../assets/facebook_icon.svg'
import LinkedinIcon from '../../assets/linkedin_icon.svg'
import { Link } from 'react-scroll'
import { Toaster, toast } from 'react-hot-toast';

const ContactPage = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vkwyx7u', 'template_gqerfhp', form.current, 'A6HP0LNu5mFV7PRv7')
            .then((result) => {
                console.log(result.text);
                toast.success('Message Send')
                e.target.reset()
            }, (error) => {
                console.log(error.text);
                toast.error("Message Not Send")
            });
    };

    const socialIcons = [
        {
            icon: InstagramIcon,
            alt: "instagram_icon",
            link: "https://www.instagram.com/_._arun_depp_._/"
        },
        {
            icon: FacebookIcon,
            alt: "facebook_icon",
            link: "https://www.facebook.com/arun.thoddusamy.3"
        },
        {
            icon: GithubIcon,
            alt: "github_icon",
            link: "https://github.com/thoddusamy"
        },
        {
            icon: LinkedinIcon,
            alt: "linkedin_icon",
            link: "https://www.linkedin.com/in/thoddusamy-g-449b26180"
        },
        {
            icon: TwitterIcon,
            alt: "twitter_icon",
            link: "https://twitter.com/ArunThoddusamy?t=rIhcc8hcTf5qXfObMlbjHg&s=08"
        }
    ]
    return (
        <div className='contactpage__container' id='contact'>
            <div className="get_in_touch_title">
                <h1>Get In Touch</h1>
            </div>
            <div className="contactus__box" data-aos="fade-up">
                <Toaster toastOptions={{ style: { fontFamily: 'Overlock' } }} />
                <div className='gmap'>
                    <span>My Location</span>
                    <iframe width="450" height="440" id="gmap_canvas" src="https://maps.google.com/maps?q=salem&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
                <div className='contact_form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="top">
                            <input type="text" name='sender_name' placeholder='Your Name' required />
                            <input type="number" name='sender_mobileno' placeholder='Your phone number' />
                        </div>
                        <div className="middle">
                            <input type="email" name='sender_email' placeholder='your email id' required />
                        </div>
                        <div className="footer">
                            <textarea name="sender_message" placeholder='Your meassage'></textarea>
                        </div>
                        <button type="submit" value="Send">Send Message</button>
                    </form>
                </div>
            </div>
            <div className="footer__links">
                <div className="quick_links">
                    <h4>Quick Links</h4>
                    <Link smooth={true} duration={1000} to="about">About me</Link>
                    <Link smooth={true} duration={1000} to="skills">Skills</Link>
                    <Link smooth={true} duration={1000} to="home">Page Top</Link>
                </div>
                <div className="social_links">
                    <h4>Follow me on</h4>
                    {
                        socialIcons.map((socialIcon) => {
                            return <a href={socialIcon.link} target={'_blank'}><img src={socialIcon.icon} alt={socialIcon.alt} /></a>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ContactPage