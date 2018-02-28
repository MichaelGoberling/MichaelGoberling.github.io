import React from 'react';

import Welcome from './Welcome';
import Header from './Header';
import Education from './Education';
import Projects from './Projects';
import References from './References';
import Work from './Work';

export default class ResumeApp extends React.Component
{
    state = 
    {
        eduToggle: false,
        projToggle: false,
        workToggle: false,
        refToggle: false,
    };

    handleEduToggle = () =>
    {
        this.setState((prevState) => {
            return {
                eduToggle: !prevState.eduToggle
            };
        })
    }

    handleProjToggle = () =>
    {
        this.setState((prevState) => {
            return {
                projToggle: !prevState.projToggle
            };
        })
    }

    handleWorkToggle = () =>
    {
        this.setState((prevState) => {
            return {
                workToggle: !prevState.workToggle
            };
        })
    }

    handleRefToggle = () =>
    {
        this.setState((prevState) => {
            return {
                refToggle: !prevState.refToggle
            };
        })
    }

    render()
    {
        
        const title = "Michael Goberling";
        const subtitle = "Professional Information & More";
        const welcome = "Welcome to my GitHub page! My name is Michael Goberling and if you're here to figure out a little bit more about me, I built this website just for you! I am an undergraduate senior studying Computer Engineering at the University of Nebraska-Lincoln. More information about my education, projects, work experience, and references may be found below.";

        const eduInfo = 'University of Nebraska-Lincoln';
        const projInfo = 'Microprocessor Board';
        const workInfo = 'Union Pacific';
        const refInfo = {
            name1: "Douglas Hoff",
            title1: "Asst. Manager",
            addr1: "1400 Douglas St.",
            loc1: "Omaha, NE 68179",
            phone1: "402-544-3254",
            rel1: "Supervisor",
        };

        return (

            <div>
                <Header title = {title} subtitle = {subtitle}/>
                
                <div className = "container">
                
                    <Welcome 
                        welcome = {welcome}
                    />
                    <Education 
                        toggle = {this.state.eduToggle} 
                        handleToggle = {this.handleEduToggle} 
                        info = {eduInfo}
                    />

                    <Projects 
                        toggle = {this.state.projToggle} 
                        handleToggle = {this.handleProjToggle} 
                        info = {projInfo}
                    />

                    <Work 
                        toggle = {this.state.workToggle} 
                        handleToggle = {this.handleWorkToggle} 
                        info = {workInfo}
                    />

                    <References 
                        toggle = {this.state.refToggle} 
                        handleToggle = {this.handleRefToggle} 
                        info = {this.refInfo}
                    />
                </div>
            </div>

        );
    }
}  
