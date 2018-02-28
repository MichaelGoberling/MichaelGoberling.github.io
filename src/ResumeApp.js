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
        const subtitle = "Educational & Professional Information";
        const welcome = "Welcome to my GitHub page! My name is Michael Goberling and if you're here to figure out a little bit more about me, I built this webpage just for you! I am an undergraduate senior studying Computer Engineering at the University of Nebraska-Lincoln. More information about my education, projects, work experience, and references may be found below.";

        const eduInfo = {
            
            name:'University of Nebraska-Lincoln (Fall 2014 - Present)',
            major: 'Bachelor of Science in Computer Engineering',
            minor: 'Minor in Mathematics',
            GPA: 'GPA: 3.22',
            grad: 'Graduation Date: May 2018',
            course1: 'CIST 1400 Intro to Computer Programming | Linux, Java, and VIM',
            course2: 'CSCI 1620 Intro to Computer Science | Linux, Java, Eclipse, and VIM',
            course3: 'ECEN 3100 Digital Design and Interfacing | Windows, Verilog, and Keil uVision',
            course4: 'ECEN 3130 Switching Circuit Theory | Windows, VHDL, and Quartus 9.1',
            course5: 'ECEN 4350 Embedded Microcontroller Design | Windows, C, Atmel Studio, and EAGLE',
            course6: 'ECEN 4600 LabVIEW Programming | Windows, and NI LabVIEW',
            course7: 'ECEN 4910 Integrated Systems Programming | Linux, Python, JavaScript, HTML, and CSS'

        };
        const projInfo = 'We are working on this one!';
        const workInfo = 'We are working on this one!';
        
        const refInfo = {
            name1: "Douglas Hoff",
            org1: "Union Pacific Railroad",
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
                        name = {eduInfo.name}
                        major = {eduInfo.major}
                        minor = {eduInfo.minor}
                        GPA = {eduInfo.GPA}
                        grad = {eduInfo.grad}
                        course1 = {eduInfo.course1}
                        course2 = {eduInfo.course2}
                        course3 = {eduInfo.course3}
                        course4 = {eduInfo.course4}
                        course5 = {eduInfo.course5}
                        course6 = {eduInfo.course6}
                        course7 = {eduInfo.course7}
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
                        name1 = {refInfo.name1}
                        org1 = {refInfo.org1}
                        title1 = {refInfo.title1}
                        addr1 = {refInfo.addr1}
                        loc1 = {refInfo.loc1}
                        phone1 = {refInfo.phone1}
                        rel1 = {refInfo.rel1}
                    />
                </div>
            </div>

        );
    }
}  
