import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import { Button } from '@mui/material';
import projectStore from './projectStore';
import GitHubIcon from '@mui/icons-material/GitHub';
import search from "../images/search.png";
import CloseIcon from '@mui/icons-material/Close';
import LaunchIcon from '@mui/icons-material/Launch';

function Projects() {
    const [visibility, onVisibility] = useState(false);
    const [show, onShow] = useState(true);
    const [data, onData] = useState(null);
    const desBox = (e) => {
        console.log(e.currentTarget.getAttribute('value'));
        const id = e.currentTarget.getAttribute('value');
        onData(projectStore[id]);
        onVisibility(true);
    };

    const close = () => {
        onVisibility(false);
    };

    const vis = () => {
        onShow(!show);
    }

    const gitOpen = () => {
        window.open(data.github);
    }

    const linkOpen = () => {
        window.open(data.link);
    }

    return (
        <div className='project'>
            {visibility && <div className='main-description'>
                <div className='description'>
                    <img src={data.sc}></img>
                    <div className='title'>{data.name}</div>
                    <div className='descrp'>Description: {data.description}</div>
                    <div className='tech'>Technology: {data.technology}</div>
                    <div className='links'>
                        <span onClick={gitOpen}><GitHubIcon style={{ fontSize: '3rem', marginRight: '1rem' }} /></span>
                        {data.link && <span onClick={linkOpen}><LaunchIcon style={{ fontSize: '2.7rem', marginRight: '1rem' }} /></span>}
                    </div>
                    <p className='closeIcon' onClick={close}><CloseIcon /></p>

                </div>
            </div>}

            <div id='projects' className='Project-Container' >
                <h1 className='project-heading' >Projects</h1>
                <div className='project-item' >
                    {projectStore.map((project) => {
                        return <div onClick={desBox} name={project.name} value={project._id}>
                            <ProjectCard source={project.imageLink} name={project.name} content={project.description.substring(0, 220) + "..."} />
                        </div>
                    })}

                </div>



            </div>
            <div className='button-project' style={show ? { bottom: '12rem' } : {}}>
                <Button onClick={vis} style={{ maxWidth: '16rem', maxHeight: '3.5rem', minWidth: '16rem', minHeight: '3.5rem', fontSize: '1.4rem', }} size='medium' color='ochre' variant="outlined">Show More</Button>
            </div>
            {show && <div className='grad'></div>}
        </div>
    )
}

export default Projects