import React from 'react';

const Work = (props) =>
{
        return (

            <div>
                <button className = "info-button" onClick = {props.handleToggle}>{props.toggle ? 'Hide Work Experience' : 'Show Work Experience'}</button>
                {props.toggle && <h2 className="info">{props.info}</h2>}
            </div>
            
        );
}

export default Work;