import React from 'react';

const Projects = (props) =>
{
        return (
            <div>
                <button href=""className = "info-button" onClick = {props.handleToggle}>{props.toggle ? ' v Projects' : ' > Projects'}</button>
                
                {props.toggle && 
                    <div className="info" >

                        <div className = "info__header-flex">
                            <h2>Senior Capstone</h2>
                            <h2>Spring 2018 - Present</h2>
                        </div>

                        <a href="https://github.com/MichaelGoberling/ECE-Capstone-2017-2018" >Repository</a>

                        <div className = "info__header-flex">
                            <h2>Snapchat Lenses</h2>
                            <h2>Spring 2018 - Present</h2>
                        </div>

                        <a href="https://github.com/MichaelGoberling/Snapchat-Filters" >Repository</a>

                        <div className = "info__header-flex">
                            <h2>Web-Controlled Fish Feeder</h2>
                            <h2>Spring 2017</h2>
                        </div>

                        <a href="https://github.com/MichaelGoberling/Web-controlled-Fish-Feeder" >Repository</a>

                        <div className = "info__header-flex">
                            <h2>8051 Microprocessor Board</h2>
                            <h2>Fall 2017</h2>
                        </div>

                        <a href="https://github.com/MichaelGoberling/8051-Microprocessor-Board" >Repository</a>

                    </div>
                }
            </div>
        );
}

export default Projects;