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

                        <a href="https://github.com/MichaelGoberling/ECE-Capstone-2017-2018" >
                            <p>Repository</p>
                        </a>

                        <p><b>Skills & Tools</b></p>
                            <ul>
                                <li>Windows</li>
                                <li>C</li>
                                <li>Arduino</li>
                                <li>EAGLE</li>
                                <li>Atmel Studio</li>
                            </ul>

                        <div className = "info__header-flex">
                            <h2>Snapchat Lenses</h2>
                            <h2>Spring 2018 - Present</h2>
                        </div>

                        <a href="https://github.com/MichaelGoberling/Snapchat-Filters" >
                            <p>Repository</p>
                        </a>

                        <p><b>Skills & Tools</b></p>
                            <ul>
                                <li>Windows</li>
                                <li>JavaScript</li>
                                <li>Lens Studio</li>
                            </ul>

                        <div className = "info__header-flex">
                            <h2>Performance Based Post Monitoring</h2>
                            <h2>Spring 2018t</h2>
                        </div>

                        <a href="https://github.com/MichaelGoberling/Reddit-Vote-Monitor" >
                            <p>Repository</p>
                        </a>

                        <p><b>Skills & Tools</b></p>
                            <ul>
                                <li>Windows</li>
                                <li>Python</li>
                                <li>Microsoft Excel</li>
                            </ul>

                        <div className = "info__header-flex">
                            <h2>Web-Controlled Fish Feeder</h2>
                            <h2>Fall 2017</h2>
                        </div>

                        <a href="https://github.com/MichaelGoberling/Web-controlled-Fish-Feeder" >
                            <p>Repository</p>
                        </a>

                        <p><b>Skills & Tools</b></p>
                        <ul>
                            <li>Linux</li>
                            <li>JavaScript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Python</li>
                        </ul>

                        <div className = "info__header-flex">
                            <h2>IEEE Solar Charger</h2>
                            <h2>Fall 2017</h2>
                        </div>

                        <a href="https://github.com/MichaelGoberling/IEEE-Solar-Charger" >
                            <p>Repository</p>
                        </a>
                        
                        <p><b>Skills & Tools</b></p>
                        <ul>
                            <li>Windows</li>
                            <li>EAGLE</li>
                        </ul>

                        <div className = "info__header-flex">
                            <h2>8051 Microprocessor Board</h2>
                            <h2>Spring 2017</h2>
                        </div>

                        <a href="https://github.com/MichaelGoberling/8051-Microprocessor-Board" >
                            <p>Repository</p>
                        </a>

                        <p><b>Skills & Tools</b></p>
                        <ul>
                            <li>Windows</li>
                            <li>Assembly</li>
                            <li>EAGLE</li>
                        </ul>

                    </div>
                }
            </div>
        );
}

export default Projects;