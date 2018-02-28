import React from 'react';

const References = (props) =>
{
        return (

            <div>
                <button className = "info-button" onClick = {props.handleToggle}>{props.toggle ? 'Hide References' : 'Show References'}</button>
                <p className="info">{props.toggle ? props.name1 : false}</p>
                <p className="info">{props.toggle ? props.title1 : false}</p>
                <p className="info">{props.toggle ? props.addr1 : false}</p>
                <p className="info">{props.toggle ? props.loc1 : false}</p>
                <p className="info">{props.toggle ? props.phone1 : false}</p>
                <p className="info">{props.toggle ? props.rel1 : false}</p>
            </div>
            
        );
}

export default References;