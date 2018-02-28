import React from 'react';

const Work = (props) =>
{
        return (

            <div>
                <button className = "info-button" onClick = {props.handleToggle}>{props.toggle ? ' v Hide Work Experience' : ' > Show Work Experience'}</button>
                
                {props.toggle &&
                    <div className ="info">
                        <h2>{props.info}</h2>
                    </div>
                }
            </div>
            
        );
}

export default Work;