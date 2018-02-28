import React from 'react';

const References = (props) =>
{
        return (

            <div>
                <button className = "info-button" onClick = {props.handleToggle}>{props.toggle ? 'Hide References' : 'Show References'}</button>
                
                {props.toggle   && <p className="info">{props.name1}</p>
                                && <p className="info">{props.title1}</p>
                                && <p className="info">{props.addr1}</p>
                                && <p className="info">{props.loc1}</p>
                                && <p className="info">{props.phone1}</p>
                                && <p className="info">{props.rel1}</p>}
            </div>
        );
}

export default References;