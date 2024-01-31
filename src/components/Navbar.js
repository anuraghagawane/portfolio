import React from 'react'
import "./styles.css"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar({ open, isOpen }) {

    return (
        <div className='navbar-container'>
            <div className='navbar-logo'>AH</div>
            <div className='navbar-links'>
                <a href="#about"><p className='navbar-link'>About</p></a>
                <a href="#projects"><p className='navbar-link' >Projects</p></a>
                <a href="#contact"><p className='navbar-link'>Contact</p></a>
            </div>
            <div className='hamburger-menu'>
                <div className='ham-icon' onClick={open}>
                    {isOpen ? <CloseIcon style={{ fontSize: '2.5rem' }} /> : <MenuIcon style={{ fontSize: '2.5rem' }} />}
                </div>
            </div>
        </div>
    )
}

export default Navbar