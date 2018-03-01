import React from 'react';

const References = (props) =>
{
        return (

            <div>
                <button className = "info-button" onClick = {props.handleToggle}>{props.toggle ? ' v References' : ' > References'}</button>
                
                {props.toggle && 
                    <div className="info">
                    
                        <div className = "info__header-flex">
                            <h2>{props.name3}</h2>
                            <h2>{props.org3}</h2>
                        </div>

                        <p>{props.title3}</p>
                        <p>{props.addr3}</p>
                        <p>{props.loc3}</p>
                        <p>{props.phone3}</p>
                        <p>{props.email3}</p>
                        <p>{props.rel3}</p>
                    </div>
                }

                {props.toggle && 
                    <div className="info">
                        
                        <div className = "info__header-flex">
                            <h2>{props.name4}</h2>
                            <h2>{props.org4}</h2>
                        </div>

                        <p>{props.title4}</p>
                        <p>{props.addr4}</p>
                        <p>{props.loc4}</p>
                        <p>{props.phone4}</p>
                        <p>{props.email4}</p>
                        <p>{props.rel4}</p>
                    </div>
                }
                
                {props.toggle && 
                    <div className="info">
                        
                        <div className = "info__header-flex">
                            <h2>{props.name1}</h2>
                            <h2>{props.org1}</h2>
                        </div>

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
                        
                        <div className = "info__header-flex">
                            <h2>{props.name2}</h2>
                            <h2>{props.org2}</h2>
                        </div>

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