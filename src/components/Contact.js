import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Contact() {
    return (
        <div id='contact' className='contact-container'>
            <h1 className='contact-heading'>Contact Me</h1>
            <div className='contact-info'>
                <div className='info' style={{ textDecoration: "underline" }}><EmailIcon style={{ fontSize: '2rem' }} className='social-media-icon' />anuraghagawane10@gmail.com</div>
                <div className='info'><PhoneIcon style={{ fontSize: '1.5rem' }} className='social-media-icon' />+91 9130918271</div>
                <div className='info'><LocationOnIcon style={{ fontSize: '1.5rem' }} className='social-media-icon' />Amravati, India</div>
            </div>
        </div>
    )
}

export default Contact