import React from 'react';

const References = (props) =>
{
        return (

            <div>
                <button className = "info-button" onClick = {props.handleToggle}>{props.toggle ? ' v References' : ' > References'}</button>
                {props.toggle && 
                    <div className="info">
                        <h2>{props.name1} | {props.org1}</h2>
                        <p>{props.title1}</p>
                        <p>{props.addr1}</p>
                        <p>{props.loc1}</p>
                        <p>{props.phone1}</p>
                        <p>{props.email1}</p>
                        <p>{props.rel1}</p>
                    </div>
                }

                {props.toggle && 
                    <div className="info">
                        <h2>{props.name2} | {props.org2}</h2>
                        <p>{props.title2}</p>
                        <p>{props.addr2}</p>
                        <p>{props.loc2}</p>
                        <p>{props.phone2}</p>
                        <p>{props.email2}</p>
                        <p>{props.rel2}</p>
                    </div>
                }

            </div>
        );
}

export default References;