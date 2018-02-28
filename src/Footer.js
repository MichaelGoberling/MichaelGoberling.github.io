import React from 'react';

const Footer = (props) =>
{
    return (
        <div className="footer">
            <div className="container">
                <p>{props.title}</p>
            </div>
        </div>
    );
}

export default Footer;