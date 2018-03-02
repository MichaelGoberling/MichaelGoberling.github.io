import React from 'react';

const Education = (props) =>
{
        return (

            <div>
                <button className = "btn btn-primary btn-lg btn-block" onClick = { props.handleToggle }>Education}</button>
                 
                    {props.toggle && 
                        <div className="info">

                            <div className="info__header-flex">
                                <h2>{props.name}</h2>
                                <h2>{props.date}</h2> 
                            </div>
                            
                            <p>{props.major}</p>
                            <p>{props.minor}</p>
                            <p>{props.GPA}</p>
                            <p>{props.grad}</p>
                            <p><b>Relevant Coursework</b></p>

                            <p>{props.course8}</p>
                            <ul>
                                <li>C</li>
                                <li>Assembly</li>
                                <li>Linux</li>  
                                <li>Python</li> 
                                <li>JavaScript</li> 
                                <li>HTML</li> 
                                <li>CSS</li> 
                            </ul>

                            <p>{props.course7}</p>
                            <ul>
                                <li>Windows</li>  
                                <li>NI LabVIEW</li>
                            </ul>

                            <p>{props.course6}</p>
                            <ul>
                                <li>Windows</li>  
                                <li>C</li> 
                                <li>Atmel Studio</li>
                                <li>EAGLE</li> 
                            </ul>
                            
                            <p>ECEN 4330 Microprocessor System Design</p>
                            <ul>
                                <li>Windows</li>  
                                <li>Assembly</li> 
                                <li>MCU 8051 IDE</li>
                                <li>EAGLE</li> 
                            </ul>

                            <p>{props.course5}</p>
                            <ul>
                                <li>Linux</li>
                                <li>Java</li>
                                <li>VIM</li>
                            </ul>

                            <p>{props.course4}</p>
                            <ul>
                                <li>Windows</li>  
                                <li>VHDL</li> 
                                <li>Quartus 9.1</li> 
                            </ul>

                            <p>{props.course3}</p>
                            <ul>
                                <li>Windows</li>  
                                <li>Verilog</li> 
                                <li>Keil uVision</li> 
                            </ul>

                            <p>{props.course2}</p>
                            <ul>
                                <li>Linux</li>  
                                <li>Java</li> 
                                <li>Eclipse</li> 
                                <li>VIM</li> 
                            </ul>

                            <p>{props.course1}</p>
                            <ul>
                                <li>Linux</li>  
                                <li>Java</li> 
                                <li>VIM</li> 
                            </ul>
                            
                            <p><b>Student Organizations</b></p>
                            
                            <div className="info-flex">
                                <p>UN Robotics Club Member</p>
                                <p>Senior: 2017-2018</p>
                            </div>

                            <div className="info-flex">
                                <p>{props.org2}</p>
                                <p>Senior: 2017-2018</p>
                            </div>

                            <div className="info-flex">
                                <p>{props.org1}</p>
                                <p> Junior: 2016-2017</p>
                            </div>

                            <div className="info-flex">
                                <p>IEEE Member</p>
                                <p>Freshman/Sophomore: 2014-2016</p>
                             </div>
                            
                        </div>
                    }                
            </div>
        );
}

export default Education;