import React from 'react';

const Education = (props) =>
{
        return (

            <div>
                <button className = "info-button" onClick = {props.handleToggle}>{props.toggle ? 'Hide Education' : 'Show Education'}</button>
                <p>{props.toggle ? props.info : false}</p>
            </div>
            
        );
}

export default Education;