import React from 'react'
import mern from '../images/mern.png'
import Solidty from '../images/Solidity.png'
import reactlogo from '../images/react-logo.png'
import Node from '../images/Node.png'
import javascript from '../images/javascript.png'
import html from '../images/html.png'
import express from '../images/express.png'
function Skills() {
    return (
        <div className='skill-main-container'>
            <div className='skill-container'>
                <h1 className='skill-heading'>Skills</h1>
                <div className='skill'>

                    <div style={{ color: "black", backgroundColor: "#9fffae" }} className='each-skill'>
                        <img style={{ height: "1.7rem", marginRight: "0.4rem" }} src={mern}></img>
                        #MERN</div>

                    <div style={{ color: "black", backgroundColor: "white" }} className='each-skill'>#C++</div>

                    <div style={{ color: "black", backgroundColor: "#e6e6e6" }} className='each-skill'>
                        <img style={{ height: "1.7rem", marginRight: "0.4rem" }} src={Solidty}></img>
                        #Solidity</div>

                    <div style={{ color: "black", backgroundColor: "white" }} className='each-skill'>#Blockchain</div>

                    <div style={{ color: "white", backgroundColor: "#5c5c5c" }} className='each-skill'>
                        <img style={{ height: "1.7rem", marginRight: "0.4rem" }} src={reactlogo}></img>
                        #React.js</div>

                    <div style={{ color: "black", backgroundColor: "#22bb23" }} className='each-skill'>
                        <img style={{ height: "1.2rem", marginRight: "0.4rem" }} src={Node}></img>
                        #Node.js</div>

                    <div style={{ color: "black", backgroundColor: "white" }} className='each-skill'>#MongoDB</div>

                    <div style={{ color: "black", backgroundColor: "#f9f73f" }} className='each-skill'>
                        <img style={{ height: "1.5rem", marginRight: "0.2rem" }} src={javascript}></img>
                        #JavaScript</div>

                    <div style={{ color: "black", backgroundColor: "white" }} className='each-skill'>#C</div>
                    <div style={{ color: "black", backgroundColor: "white" }} className='each-skill'>#Python</div>
                    <div style={{ color: "black", backgroundColor: "white" }} className='each-skill'>#Java</div>

                    <div style={{ color: "black", backgroundColor: "#ff6959" }} className='each-skill'>
                        <img style={{ height: "1.5rem", marginRight: "0.4rem" }} src={html}></img>
                        #HTML</div>

                    <div style={{ color: "black", backgroundColor: "white" }} className='each-skill'>#CSS</div>
                    <div style={{ color: "black", backgroundColor: "white" }} className='each-skill'>#MySQL</div>
                    <div style={{ color: "black", backgroundColor: "white" }} className='each-skill'>#Ether.js</div>

                    <div style={{ color: "white", backgroundColor: "#666666" }} className='each-skill'>
                        <img style={{ height: "1.5rem", marginRight: "0.4rem" }} src={express}></img>
                        #Express</div>

                    <div style={{ color: "black", backgroundColor: "white" }} className='each-skill'>#Axios</div>
                    <div style={{ color: "black", backgroundColor: "white" }} className='each-skill'>#OOPs</div>
                    <div style={{ color: "black", backgroundColor: "white" }} className='each-skill'>#POP</div>
                    <div style={{ color: "black", backgroundColor: "white" }} className='each-skill'>#DSA</div>
                    <div style={{ color: "black", backgroundColor: "white" }} className='each-skill'>#DBMS</div>
                    <div style={{ color: "black", backgroundColor: "white" }} className='each-skill'>#OS</div>
                </div>
            </div>
        </div>
    )
}

export default Skills