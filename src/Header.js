import React from 'react';

const Header = (props) =>
{
    return (
        <div className="header">
            <div className="container">
                <h1 className="header__title">{props.title}</h1>
                <h2 className="header__subtitle">{props.subtitle}</h2>
                
                <a href="https://www.linkedin.com/in/michael-goberling/">
                    <img style={{"padding-top": "1.6rem"}} width={50} length={50} src="https://blog.addthiscdn.com/wp-content/uploads/2015/11/linkedin-round.png"/>
                </a>

                <a href="https://github.com/MichaelGoberling">
                    <img style={{"padding-top": "1.6rem"}} width={50} length={50} src="../resources/github"/>
                </a>
            </div>
        </div>
    );
}

export default Header;