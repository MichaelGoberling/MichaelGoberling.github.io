console.log("React commit 2.9");

class ResumeApp extends React.Component
{
    render()
    {
        
        const title = "Michael's Page";
        const subtitle = "Here's what I've been up to!";
        const info = ['Education stuff', 'Project stuff', 'Work stuff', "References"];

        return (

            <div>
                <Header title = {title} subtitle = {subtitle}/>
                <Education info = {info[0]}/>
                <Projects info = {info[1]}/>
                <Work info = {info[2]}/>
                <References info = {info[3]}/>
            </div>

        );
    }
}

class Header extends React.Component
{
    render()
    {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Education extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);

        this.state = 
        {
            eduToggle: false
        }
    }

    handleToggle() 
    {
        this.setState((prevState) => {
            return {
                eduToggle: !prevState.eduToggle
            };
        })
    }

    render()
    {
        return (

            <div>
                <button onClick = {this.handleToggle}>{this.state.eduToggle ? 'Hide Education' : 'Show Education'}</button>
                <p>{this.state.eduToggle ? this.props.info[0] : false}</p>
            </div>
            
        );
    }
}

class Projects extends React.Component
{

    constructor(props)
    {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);

        this.state 
        {
            projToggle: false;
        }
    }

    handleToggle() 
    {
        this.setState((prevState) => {
            return {
                projToggle: !prevState.projToggle
            };
        })
    }

    render()
    {
        return (
            <div>
                <button onClick = {this.handleToggle}>{this.state.projToggle ? 'Hide Projects' : 'Show Projects'}</button>
                <p>{this.state.projToggle ? this.props.info[1] : false}</p>
            </div>
        );
    }

}

class Work extends React.Component
{

    constructor(props)
    {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);

        this.state 
        {
            workToggle: false;
        }
    }

    handleToggle() 
    {
        this.setState((prevState) => {
            return {
                workToggle: !prevState.workToggle
            };
        })
    }        

    render()
    {

        return (

            <div>
                <button onClick = {this.handleToggle}>{this.state.workToggle ? 'Hide Work Experience' : 'Show Work Experience'}</button>
                <p>{this.state.workToggle ? this.props.info[2] : false}</p>
            </div>
            
        );
    }

}

class References extends React.Component
{

    constructor(props)
    {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);

        this.state
        {
            refToggle: false
        }
    }

    handleToggle() 
    {
        this.setState((prevState) => {
            return {
                refToggle: prevState.refToggle
            };
        });
    }

    render()
    {
        
        return (

            <div>
                <button onClick = {this.handleToggle}>{this.state.refToggle ? 'Hide References' : 'Show References'}</button>
                <p>{this.state.refToggle ? this.props.info[3] : false}</p>
            </div>
            
        );
    }

}

ReactDOM.render(<ResumeApp />, document.getElementById('homeApp'));
