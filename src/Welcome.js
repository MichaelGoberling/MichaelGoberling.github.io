import React from 'react';

const Welcome = (props) =>
{
    return (
        <div className="welcome">
            <div className="container">
                <p>{props.welcome}</p>
            </div>
        </div>
    );
}

export default Welcome;