import React from 'react';

const References = (props) =>
{
        return (

            <div>
                <button className = "info-button" onClick = {props.handleToggle}>{props.toggle ? 'Hide References' : 'Show References'}</button>
                {props.toggle && 
                    <div className="info">
                        <h2>{props.name1} | {props.org1}</h2>
                        <p>{props.title1}</p>
                        <p>{props.addr1}</p>
                        <p>{props.loc1}</p>
                        <p>{props.phone1}</p>
                        <p>{props.rel1}</p>
                    </div>
                }

            </div>
        );
}

export default References;