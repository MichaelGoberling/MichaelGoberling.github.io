import React from 'react';

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
        
        const title = "Michael's Page";
        const subtitle = "Here's what I've been up to!";

        const eduInfo = 'University of Nebraska-Lincoln';
        const projInfo = 'Microprocessor Board';
        const workInfo = 'Union Pacific';
        const refInfo = 'Douglas Hoff - 402-123-4567';

        return (

            <div>
                <Header title = {title} subtitle = {subtitle}/>
                
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
                    info = {refInfo}
                />
            </div>

        );
    }
}  
