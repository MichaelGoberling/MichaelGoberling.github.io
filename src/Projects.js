import React from 'react';

const Projects = (props) =>
{
        return (
            <div>
                <button href=""className = "info-button" onClick = {props.handleToggle}>{props.toggle ? ' v Projects' : ' > Projects'}</button>
                
                {props.toggle && 
                    <div className="info" >

                        <div className = "info__header-flex">
                            <h2>Senior Capstone (In Progress)</h2>
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

                        <p>Put project description here.</p>

                        <div className = "info__header-flex">
                            <h2>Snapchat Lenses (Ongoing)</h2>
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

                        <p>Using JavaScript, Snapchat's API, and Lens Studio, I created several pop culture and gaming lenses for Snapchat. Check out some examples below!</p>
                        
                        <a href="https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=e37b53d7a88c4df48a23195230c4c7e0&metadata=01" >
                            <p>Obama Portrait Reveal (Transparent)</p>
                        </a>

                        <a href="https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=34d7621a575a4d03ae9662e8fc68816b&metadata=01" >
                            <p>Spongebob Time Cards</p>
                        </a>

                        <a href="https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=8894d7e13cae4bba99012a3f6d04d16f&metadata=01" >
                            <p>Oldschool Runescape 99 Agility</p>
                        </a>

                        <a href="https://www.reddit.com/r/SnapLenses/comments/7vloag/john_wall_i_aint_never_ever_seen_you_act_like/" >
                            <p>John Wall Quote: "I ain't never ever seen you act like this before"</p>
                        </a>        
                        
                        <div className = "info__header-flex">
                            <h2>Performance Based Post Monitoring</h2>
                            <h2>Spring 2018</h2>
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

                        <p>Put project description here.</p>

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

                        <p>Put project description here.</p>

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

                        <p>Put project description here.</p>

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

                        <p>Put project description here.</p>

                    </div>
                }
            </div>
        );
}

export default Projects;