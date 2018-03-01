import React from 'react';

const Education = (props) =>
{
        return (

            <div>
                <button className = "info-button" onClick = { props.handleToggle }>{props.toggle ? ' v Education' : ' > Education'}</button>
                 
                    {props.toggle && 
                        <div className="info">
                            <h2 className="info__header" >{props.name}</h2>
                            <p>{props.major}</p>
                            <p>{props.minor}</p>
                            <p>{props.GPA}</p>
                            <p>{props.grad}</p>
                            <p><b>Relevant Coursework</b></p>
                            <p>{props.course1}</p>
                            <ul>
                                <li>Linux</li>  
                                <li>Java</li> 
                                <li>VIM</li> 
                            </ul>
                            <p>{props.course2}</p>
                            <ul>
                                <li>Linux</li>  
                                <li>Java</li> 
                                <li>Eclipse</li> 
                                <li>VIM</li> 
                            </ul>
                            <p>{props.course3}</p>
                            <ul>
                                <li>Windows</li>  
                                <li>Verilog</li> 
                                <li>Keil uVision</li> 
                            </ul>
                            <p>{props.course4}</p>
                            <ul>
                                <li>Windows</li>  
                                <li>VHDL</li> 
                                <li>Quartus 9.1</li> 
                            </ul>
                            <p>{props.course5}</p>
                            <ul>
                                <li>Windows</li>  
                                <li>C</li> 
                                <li>Atmel Studio</li>
                                <li>EAGLE</li> 
                            </ul>
                            <p>{props.course6}</p>
                            <ul>
                                <li>Windows</li>  
                                <li>NI LabVIEW</li> 
                            </ul>
                            <p>{props.course7}</p>
                            <ul>
                                <li>Linux</li>  
                                <li>Python</li> 
                                <li>JavaScript</li> 
                                <li>HTML</li> 
                                <li>CSS</li> 
                            </ul>
                            <p><b>Student Organizations</b></p>
                            <p>{props.org1}</p>
                            <p>{props.org2}</p>
                        </div>
                    }                
            </div>
        );
}

export default Education;