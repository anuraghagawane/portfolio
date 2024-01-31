import React from 'react'
import Avatar from '@mui/material/Avatar';
import photo from "../images/P-modified.png"
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function Main() {
    const download_CV = () => {
        window.open("https://drive.google.com/file/d/1OPuALpJ8HU5dJZcw6zjVjrd4IcgWvwdK/view?usp=sharing");
    }

    const gotoGit = () => {
        window.open("https://github.com/anuraghagawane");
    }

    const gotoLinkedIn = () => {
        window.open("https://www.linkedin.com/in/anurag-hagawane/");
    }

    function sendEmail() {
        window.location = "mailto:anuraghagawane10@gmail.com";
    }
    return (
        <div className='main-container'>
            <div className='main-info'>
                <div className='name'>
                    <span className="name-head">I'M  </span>
                    <span className='name-tail'>Anurag Hagawane</span>
                </div>
                <div className='role'>Software Developer</div>
                <div className='buttons'>
                    <a href="#contact"><div className='button'>
                        <Button style={{ maxWidth: '16rem', maxHeight: '3.5rem', minWidth: '16rem', minHeight: '3.5rem', fontSize: '1.4rem' }} color='ochre' variant="contained" >Contact Me</Button>
                    </div></a>
                    <div className='button' onClick={download_CV}>
                        <Button style={{ maxWidth: '16rem', maxHeight: '3.5rem', minWidth: '16rem', minHeight: '3.5rem', fontSize: '1.4rem' }} color='ochre' variant="outlined">Download CV</Button>
                    </div>
                </div>
                <div className='social-media'>
                    <div className='social-media-icon' onClick={gotoGit}>
                        <GitHubIcon style={{ fontSize: '3rem', marginRight: '1rem' }} />
                    </div>
                    <div className='social-media-icon' onClick={gotoLinkedIn}>
                        <LinkedInIcon style={{ fontSize: '3rem' }} className='social-media-icon' />
                    </div>
                    <div className='social-media-icon' onClick={sendEmail}>
                        <EmailIcon style={{ fontSize: '3rem' }} className='social-media-icon' />
                    </div>

                </div>
            </div>
            <div className='main-photo'>
                <Avatar alt="Remy Sharp" src={photo} sx={{ width: 400, height: 400 }} />
            </div>
        </div>
    )
}

export default Main