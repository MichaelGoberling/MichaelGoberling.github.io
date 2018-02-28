import React from 'react';

const References = (props) =>
{
        return (

            <div>
                <button className = "info-button" onClick = {props.handleToggle}>{props.toggle ? 'Hide Projects' : 'Show Projects'}</button>
                {props.toggle && <h2 className="info">{props.info}</h2>}
            </div>
            
        );
}

export default References;