import React from 'react';

const Projects = (props) =>
{
        return (

            <div>

                <a href="#proj"><button href=""className = "info-button" onClick = {props.handleToggle}>{props.toggle ? ' v Projects' : ' > Projects'}</button> </a>
                {props.toggle && 
                    <div className="info" id="proj">
                        <h2 className="info__header" >{props.info}</h2>
                    </div>
                }

            </div>

            
        );
}

export default Projects;