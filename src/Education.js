import React from 'react';

const Education = (props) =>
{
        return (

            <div>
                <button className = "info-button" onClick = {props.handleToggle}>{props.toggle ? 'Hide Education' : 'Show Education'}</button>
                    
                {props.toggle && <h2 className="info">{props.name}</h2>}
                {props.toggle && <p className="info">{props.major}</p>}
                {props.toggle && <p className="info">{props.minor}</p>}
                {props.toggle && <p className="info">{props.GPA}</p>}
                {props.toggle && <p className="info">{props.grad}</p>}
                {props.toggle && <p className="info"><b>Relevant Coursework</b></p>}
                {props.toggle && <p className="info">{props.course1}</p>}
                {props.toggle && <p className="info">{props.course2}</p>}
                {props.toggle && <p className="info">{props.course3}</p>}
                {props.toggle && <p className="info">{props.course4}</p>}
                {props.toggle && <p className="info">{props.course5}</p>}
                {props.toggle && <p className="info">{props.course6}</p>}
                {props.toggle && <p className="info">{props.course7}</p>}

            </div>
        );
}

export default Education;