import React from 'react';

const Work = (props) =>
{
        return (

            <div>
                <button className = "info-button" onClick = {props.handleToggle}>{props.toggle ? ' v Work Experience' : ' > Work Experience'}</button>
                
                {props.toggle &&
                    <div className = "info">
                        <div className = "info__header-flex">
                            <h2>{props.position1}</h2>
                            <h2>{props.date1}</h2>
                        </div>

                        <p>{props.company1}</p>
                        <p>{props.loc1}</p>
                        <p>{props.descr1}</p>
                    </div>
                }

                {props.toggle &&
                    <div className ="info">
                        <div className = "info__header-flex">
                            <h2>{props.position2}</h2>
                            <h2>{props.date2}</h2>
                        </div>

                        <p>{props.company2}</p>
                        <p>{props.loc2}</p>
                        <p>{props.descr2}</p>
                    </div>
                }
            </div>
            
        );
}

export default Work;