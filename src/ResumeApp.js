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

        const workInfo = {
            position1: 'IT Operations Year-Round Intern',
            company1: 'Union Pacific Railroad',
            loc1: 'Omaha, Nebraska',
            date1: 'July 2017 - Present',
            descr1: 'Analyzed connectivity solutions for over 500 signal sites using Google Earth Pro, LinkPlanner, and DishPointer. Coordinated deployment of solutions with field managers, technicians, and engineers across the continental United States. Developed and implemented automation tools using Java and AutoHotKey scripting to facilitate work flow. ',
            
            position2: 'Systems Engineering Year-Round Inten',
            company2: 'Union Pacific Railroad',
            loc2: 'Omaha, Nebraska',
            date2: 'January 2016 - July 2017',
            descr2: 'Programmed, tested, and deployed over 2000 Digi WR21 cell modems, Cisco routers and switches, and more. Operated in a leadership position as the first intern in a new program. Developed documentation and standard work processes to ensure future productivity. '
        };
        
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
            rel: "Student & Senior Capstone Teammate",
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

        const trentInfo = {
            name: "Trenton Evans",
            org: "Clover, Inc.",
            title: "Senior Applications Developer",
            addr: "",
            loc: "",
            phone: "402-297-4105",
            email: "trenton.evans@clover.com",
            rel: "Senior Capstone Sponsor",
        };
        
        return (

            <div>
                <Header title = {title} subtitle = {subtitle}/>
                
                <div className = "container">
                
                    <Welcome 
                        welcome = {welcome}
                    />
                    <section className = "edu">
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
                    </section>

                    <Projects 
                        toggle = {this.state.projToggle} 
                        handleToggle = {this.handleProjToggle} 
                        info = {projInfo}
                    />

                    <Work 
                        toggle = {this.state.workToggle} 
                        handleToggle = {this.handleWorkToggle} 

                        position1 ={workInfo.position1}
                        company1 ={workInfo.company1}
                        loc1 ={workInfo.loc1}
                        date1 ={workInfo.date1}
                        descr1 ={workInfo.descr1}

                        position2 ={workInfo.position2}
                        company2 ={workInfo.company2}
                        loc2 ={workInfo.loc2}
                        date2 ={workInfo.date2}
                        descr2 ={workInfo.descr2}

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

                        name4 = {trentInfo.name}
                        org4 = {trentInfo.org}
                        title4 = {trentInfo.title}
                        addr4 = {trentInfo.addr}
                        loc4 = {trentInfo.loc}
                        phone4 = {trentInfo.phone}
                        email4 = {trentInfo.email}
                        rel4 = {trentInfo.rel}
                    />
                </div>
            </div>

        );
    }
}  
