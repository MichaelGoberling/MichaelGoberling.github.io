import React from 'react';
import scrollToComponent from 'react-scroll-to-component';

const Education = (props) =>
{
        return (

            <div>
                <button className = "info-button" onClick = {() => {scrollToComponent(edu); props.handleToggle}}>{props.toggle ? ' v Education' : ' > Education'}</button>

                <section ref={(section) => { edu = section; }}>
                    {props.toggle && 
                        <div className="info">
                            <h2 className="info__header" >{props.name}</h2>
                            <p>{props.major}</p>
                            <p>{props.minor}</p>
                            <p>{props.GPA}</p>
                            <p>{props.grad}</p>
                            <p><b>Relevant Coursework</b></p>
                            <p>{props.course1}</p>
                            <p>{props.course2}</p>
                            <p>{props.course3}</p>
                            <p>{props.course4}</p>
                            <p>{props.course5}</p>
                            <p>{props.course6}</p>
                            <p>{props.course7}</p>
                            <p><b>Student Organizations</b></p>
                            <p>{props.org1}</p>
                            <p>{props.org2}</p>
                        </div>
                    }
                </section>
                

            </div>
        );
}

export default Education;