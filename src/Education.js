import React from 'react';

const Education = (props) =>
{
        return (

            <div>
                <button className = "info-button" onClick = {props.handleToggle}>{props.toggle ? 'Hide Education' : 'Show Education'}</button>
                
                <div className="info">
                    <p >{props.toggle ? props.info : false}</p>
                </div>
                
            </div>
            
        );
}

export default Education;