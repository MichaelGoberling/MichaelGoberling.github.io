import React from 'react';

const References = (props) =>
{
        return (

            <div>
                <button className = "info-button" onClick = {props.handleToggle}>{props.toggle ? ' v Hide Projects' : ' > Show Projects'}</button>
                
                {props.toggle && 
                    <div className="info">
                        <h2>{props.info}</h2>
                    </div>
                }

            </div>

            
        );
}

export default References;