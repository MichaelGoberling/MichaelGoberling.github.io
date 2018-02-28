import React from 'react';

const References = (props) =>
{
        return (

            <div>
                <button className = "info-button" onClick = {props.handleToggle}>{props.toggle ? 'Hide References' : 'Show References'}</button>
                <p className="info">{props.toggle ? props.info.name1 : false}</p>
                <p className="info">{props.toggle ? props.info.title1 : false}</p>
                <p className="info">{props.toggle ? props.info.addr1 : false}</p>
                <p className="info">{props.toggle ? props.info.loc1 : false}</p>
                <p className="info">{props.toggle ? props.info.phone1 : false}</p>
                <p className="info">{props.toggle ? props.info.rel1 : false}</p>
                v
            </div>
            
        );
}

export default References;