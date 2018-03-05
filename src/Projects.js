import React from 'react';

const Projects = (props) =>
{
        return (
            <div>
                <button href="" className = "btn btn-primary btn-lg btn-block" onClick = {props.handleToggle}>Projects</button>
                
                {props.toggle && 
                    <div className="info" >

                        <div className = "info__header-flex">
                            <h2>Senior Capstone (In Progress)</h2>
                            <h2>Spring 2018 - Present</h2>
                        </div>

                        <a href="https://github.com/MichaelGoberling/ECE-Capstone-2017-2018" >
                            <button type="button" className="btn btn-secondary">Repository</button>
                        </a>

                        <p><b>Skills & Tools</b></p>
                            <ul>
                                <li>Windows</li>
                                <li>C</li>
                                <li>Arduino</li>
                                <li>EAGLE</li>
                                <li>Atmel Studio</li>
                            </ul>

                        <p>The Capstone is the crowning achievement of academic progression. The sponsor for this project is Trenton Evans. This project is an electronic golf swing analytical device focusing on elbow angle statistics. Check back later for more!</p>

                        <div className = "info__header-flex">
                            <h2>Snapchat Lenses (Ongoing)</h2>
                            <h2>Spring 2018 - Present</h2>
                        </div>

                        <a href="https://github.com/MichaelGoberling/Snapchat-Filters" >
                            <button type="button" className="btn btn-secondary">Repository</button>
                        </a>

                        <p><b>Skills & Tools</b></p>
                            <ul>
                                <li>Windows</li>
                                <li>JavaScript</li>
                                <li>Lens Studio</li>
                            </ul>

                        <p>Using JavaScript, Snapchat's API, and Lens Studio, I created several pop culture and gaming lenses for Snapchat. Check out an example below!</p>

                        <div>
                            <a href="https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=34d7621a575a4d03ae9662e8fc68816b&metadata=01" >
                                <button type="button" className="btn btn-secondary">Spongebob Time Cards</button>
                            </a>
                        </div>
                        
                        <div className = "info__header-flex">
                            <h2>Performance Based Post Monitoring</h2>
                            <h2>Spring 2018</h2>
                        </div>

                        <a href="https://github.com/MichaelGoberling/Reddit-Vote-Monitor" >
                            <button type="button" className="btn btn-secondary">Repository</button>
                        </a>

                        <p><b>Skills & Tools</b></p>
                            <ul>
                                <li>Windows</li>
                                <li>Python</li>
                                <li>Microsoft Excel</li>
                            </ul>

                        <p>This project allows a user to enter a Reddit post's URL and over time, generate a .csv file with the time stamp and the score at that time.</p>
                        <p>The algorithm also implements degenerative performance monitoring. The script will always run for 6 hours. Then, after 6 hours, if the difference between the current vote count and the vote count from an hour ago does not exceed 200, then the monitoring stops, because movement has likely stopped!</p>

                        <div className = "info__header-flex">
                            <h2>Web-Controlled Fish Feeder</h2>
                            <h2>Fall 2017</h2>
                        </div>

                        <a href="https://github.com/MichaelGoberling/Web-controlled-Fish-Feeder" >
                            <button type="button" className="btn btn-secondary">Repository</button>
                        </a>

                        <p><b>Skills & Tools</b></p>
                        <ul>
                            <li>Linux</li>
                            <li>JavaScript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Python</li>
                        </ul>

                        <p>This project was completed for the course ECEN 4910: Integrated Systems Programming. It is a proof of concept for a web-controlled fish feeder.</p> 
                        <p>The software was implemented on a Beaglebone Black, which runs an embedded real-time Debian Linux distribution. Additionally, the Beaglebone Black provides discrete connection to its processor's I/O pins. In this way, abstract web development and web server hosting can take place on Linux, while the hardware pins can be controlled via the Adafruit BeagleBone Black pin control library.</p>
                        <p>The pinouts were useful for controlling a PWM pin that connected to a small servo motor. Edge cases were determined for simply dumping food into a fish bowl given user input from a webpage!</p>

                        <div className = "info__header-flex">
                            <h2>IEEE Solar Charger</h2>
                            <h2>Fall 2017</h2>
                        </div>

                        <a href="https://github.com/MichaelGoberling/IEEE-Solar-Charger" >
                            <button type="button" className="btn btn-secondary">Repository</button>
                        </a>
                        
                        <p><b>Skills & Tools</b></p>
                        <ul>
                            <li>Windows</li>
                            <li>EAGLE</li>
                        </ul>

                        <p>This is a simple project that utilizes a TPS63061 buck boost converter to charge mobile electronics. The IC takes an input of 4.5V to 6.5V and converts it to a steady state at 5V 500mA, which is equivalent to USB 2.0 charging!</p>

                        <div className = "info__header-flex">
                            <h2>8051 Microprocessor Board</h2>
                            <h2>Spring 2017</h2>
                        </div>

                        <a href="https://github.com/MichaelGoberling/8051-Microprocessor-Board" >
                            <button type="button" className="btn btn-secondary">Repository</button>
                        </a>

                        <p><b>Skills & Tools</b></p>
                        <ul>
                            <li>Windows</li>
                            <li>Assembly</li>
                            <li>EAGLE</li>
                        </ul>

                        <p>This project was completed for the course ECEN 4330: Microprocessor System Design. This project is potentially the most involved piece of coursework in the UNL Peter Kiewit Institute ECEN curriculum.</p>
                        <p>Utilizing assembly language programming and EAGLE, a custom microprocessor system board was created to control an 8051 microprocessor core. Using timing information, address latching, and memory mapping, the 8051 microprocessor core interfaces with a character LCD, temperature sensor and ADC, 7-segment display, external ROM and RAM, an input matrix keypad, and a real-time clock! Check it out below.</p>

                        <iframe src="https://drive.google.com/file/d/1qSRcje8uw1b6YRAaE8dZ2BNn7A_sfGbO/preview" width="640" height="480"></iframe>

                    </div>
                }
            </div>
        );
}

export default Projects;