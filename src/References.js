import React from 'react';

const References = (props) =>
{
        return (

            <div>
                <button onClick = {props.handleToggle}>{props.toggle ? 'Hide References' : 'Show References'}</button>
                <p>{props.toggle ? props.info : false}</p>
            </div>
            
        );
}

export default References;