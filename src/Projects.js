import React from 'react';

const Projects = (props) =>
{
        return (
            <div>
                <button href=""className = "info-button" onClick = {props.handleToggle}>{props.toggle ? ' v Projects' : ' > Projects'}</button>
                
                {props.toggle && 
                    <div className="info" >

                        <div className = "info__header-flex">
                            <h2 href="https://github.com/MichaelGoberling/ECE-Capstone-2017-2018">Senior Capstone</h2>
                            <h2>Spring 2018 - Present</h2>
                        </div>

                        <div className = "info__header-flex">
                            <h2 href="https://github.com/MichaelGoberling/Snapchat-Filters">Snapchat Lenses</h2>
                            <h2>Spring 2018 - Present</h2>
                        </div>

                        <div className = "info__header-flex">
                            <h2 href="https://github.com/MichaelGoberling/Web-controlled-Fish-Feeder" >Web-Controlled Fish Feeder</h2>
                            <h2>Spring 2017</h2>
                        </div>

                        <div className = "info__header-flex">
                            <h2 href="https://github.com/MichaelGoberling/8051-Microprocessor-Board" >8051 Microprocessor Board</h2>
                            <h2>Fall 2017</h2>
                        </div>

                    </div>
                }
            </div>
        );
}

export default Projects;