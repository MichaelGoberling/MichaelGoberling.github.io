import React from 'react';

const Work = (props) =>
{
        return (

            <div>
                <button className = "info-button" onClick = {props.handleToggle}>{props.toggle ? ' v Work Experience' : ' > Work Experience'}</button>
                
                {props.toggle &&
                    <div className ="info">
                        <h2 className = "info__header">{props.position1}</h2>
                        <p><b>{props.position1}</b></p>
                        <p>{props.company1}</p>
                        <p>{props.loc1}</p>
                        <p>{props.date1}</p>
                        <p>{props.descr1}</p>
                    </div>
                }

                {props.toggle &&
                    <div className ="info">
                        <h2 className = "info__header">{props.position2}</h2>
                        <p><b>{props.position2}</b></p>
                        <p>{props.company2}</p>
                        <p>{props.loc2}</p>
                        <p>{props.date2}</p>
                        <p>{props.descr2}</p>
                    </div>
                }
            </div>
            
        );
}

export default Work;