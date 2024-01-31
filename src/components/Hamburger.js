import React from 'react'

function Hamburger() {
    return (
        <div className='ham-links'>
            <a href="#about"><p className='ham-link'>About</p></a>
            <a href="#projects"><p className='ham-link' >Projects</p></a>
            <a href="#contact"><p className='ham-link'>Contact</p></a>
        </div>
    )
}

export default Hamburger