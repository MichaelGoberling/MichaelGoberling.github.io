import React from 'react';

import Header from './Header';
import Education from './Education';
import Projects from './Projects';
import References from './References';
import Work from './Work';

console.log("React Commit 3.4");

export default class ResumeApp extends React.Component
{

    render()
    {
        
        const title = "Michael's Page";
        const subtitle = "Here's what I've been up to!";

        const eduInfo = 'University of Nebraska-Lincoln';
        const projInfo = 'Microprocessor Board';
        const workInfo = 'Union Pacific';
        const refInfo = 'Douglas Hoff - 402-123-4567';

        return (

            <div>
                <Header title = {title} subtitle = {subtitle}/>
                <Education handleToggle = {this.handleToggle} info = {eduInfo}/>
                <Projects info = {projInfo}/>
                <Work info = {workInfo}/>
                <References info = {refInfo}/>
            </div>

        );
    }
}  
