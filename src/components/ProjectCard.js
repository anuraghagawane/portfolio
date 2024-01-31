import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function ProjectCard(props) {

    return (
        <div className="card" >
            <img src={props.source} alt="" />
            <div className="card-content">
                <h2>
                    {props.name}
                </h2>
                <p>
                    {props.content}
                </p>
                <a href="#projects" className="button">
                    Find out more
                    <span className="material-symbols-outlined">
                        <ArrowRightAltIcon />
                    </span>
                </a>
            </div>
        </div>
    )
}

export default ProjectCard