import React from 'react';

const Work = (props) =>
{
        return (

            <div>
                <button onClick = {props.handleToggle}>{props.toggle ? 'Hide Work Experience' : 'Show Work Experience'}</button>
                <p>{props.toggle ? props.info : false}</p>
            </div>
            
        );
}

export default Work;