import React from 'react';

const References = (props) =>
{
        return (

            <div>
                <button className = "info-button" onClick = {props.handleToggle}>{props.toggle ? 'Hide Projects' : 'Show Projects'}</button>
                <p>{props.toggle ? props.info : false}</p>
            </div>
            
        );
}

export default References;