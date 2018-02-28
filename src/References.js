import React from 'react';

const References = (props) =>
{
        return (

            <div>
                <button className = "info-button" onClick = {props.handleToggle}>{props.toggle ? 'Hide References' : 'Show References'}</button>
                {props.toggle && <h2 className="info">{props.name1}</h2>}
                {props.toggle && <p className="info">{props.title1}</p>}
                {props.toggle && <p className="info">{props.addr1}</p>}
                {props.toggle && <p className="info">{props.loc1}</p>}
                {props.toggle && <p className="info">{props.phone1}</p>}
                {props.toggle && <p className="info">{props.rel1}</p>}

            </div>
        );
}

export default References;