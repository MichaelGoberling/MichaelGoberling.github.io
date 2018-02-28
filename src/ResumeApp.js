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
        const subtitle = "Student & Engineering Professional";
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
            course7: 'ECEN 4910 Integrated Systems Programming | Linux, Python, JavaScript, HTML, and CSS',
            org1: 'IEEE Officer - Social Media',
            org2: 'Senior IEEE Officer - Projects'
        };

        const projInfo = 'We are working on this one!';
        const workInfo = 'We are working on this one!';
        
        const dougInfo = {
            name: "Douglas Hoff",
            org: "Union Pacific Railroad",
            title: "Asst. Manager",
            addr: "1400 Douglas St.",
            loc: "Omaha, NE 68179",
            phone: "402-544-3254",
            email: "djhoff@up.com",
            rel: "Supervisor",
        };

        const jacobInfo = {
            name: "Jacob Pilakowski",
            org: "University of Nebraska-Lincoln",
            title: "Student",
            addr: " ",
            loc: " ",
            phone: "402-871-1518",
            email: "jacob.pilakowski@gmail.com",
            rel: "Student & Capstone Teammate",
        };

        const sharifInfo = {
            name: "Hamid Sharif",
            org: "University of Nebraska-Lincoln",
            title: "Charles J. Vranek Professor, IEEE Fellow, ECE Graduate Committee Chair",
            addr: "PKI 200C",
            loc: "Omaha, NE 68182",
            phone: "402-554-3628",
            email: "hsharif@unl.edu",
            rel: "Professor for ECEN 4330 & ECEN 4350",
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
                        org1 = {eduInfo.org1}
                        org2 = {eduInfo.org2}
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
                        name1 = {dougInfo.name}
                        org1 = {dougInfo.org}
                        title1 = {dougInfo.title}
                        addr1 = {dougInfo.addr}
                        loc1 = {dougInfo.loc}
                        phone1 = {dougInfo.phone}
                        email1 = {dougInfo.email}
                        rel1 = {dougInfo.rel}

                        name2 = {jacobInfo.name}
                        org2 = {jacobInfo.org}
                        title2 = {jacobInfo.title}
                        addr2 = {jacobInfo.addr}
                        loc2 = {jacobInfo.loc}
                        phone2 = {jacobInfo.phone}
                        email2 = {jacobInfo.email}
                        rel2 = {jacobInfo.rel}

                        name3 = {sharifInfo.name}
                        org3 = {sharifInfo.org}
                        title3 = {sharifInfo.title}
                        addr3 = {sharifInfo.addr}
                        loc3 = {sharifInfo.loc}
                        phone3 = {sharifInfo.phone}
                        email3 = {sharifInfo.email}
                        rel3 = {sharifInfo.rel}
                    />
                </div>
            </div>

        );
    }
}  
