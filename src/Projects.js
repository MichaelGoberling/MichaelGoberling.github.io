import React from 'react';

const Projects = (props) =>
{
        return (
            <div>

                <button href=""className = "info-button" onClick = {props.handleToggle}>{props.toggle ? ' v Projects' : ' > Projects'}</button>
                {props.toggle && 
                    <div className="info" >
                        <h2 className="info__header" >{props.info}</h2>
                    </div>
                }

            </div>
        );
}

export default Projects;