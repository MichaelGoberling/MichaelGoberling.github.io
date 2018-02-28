import React from 'react';

const Education = (props) =>
{
        return (

            <div>
                <button className = "info-button" onClick = {props.handleToggle}>{props.toggle ? 'Hide Education' : 'Show Education'}</button>
                    
                    {props.toggle && <h2 className="info">{props.name1}</h2>}

            </div>
        );
}

export default Education;