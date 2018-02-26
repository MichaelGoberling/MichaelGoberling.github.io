console.log("React commit 2.4");

class ResumeApp extends React.Component
{
    render()
    {
        
        const title = "Michael's Page";
        const subtitle = "Here's what I've been up to!";
        const info = ['Education stuff', 'Project stuff', 'Work stuff', "References"];
        
        let eduToggle = false;
        let projToggle = false;
        let workToggle = false;
        let refToggle = false;

        return (

            <div>
                <Header title = {title} subtitle = {subtitle}/>
                <Education toggle = {eduToggle} info = {info[0]}/>
                <Projects toggle = {projToggle}info = {info[1]}/>
                <Work toggle = {workToggle} info = {info[2]}/>
                <References toggle = {refToggle} info = {info[3]}/>
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
    constructor()
    {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() 
    {
        eduToggle = !eduToggle;
    }

    render()
    {
        return (

            <div>
                <button onClick = {this.handleToggle}>{eduToggle ? 'Hide Education' : 'Show Education'}</button>
                <p>{eduToggle ? this.props.info : false}</p>
            </div>
            
        );
    }
}

class Projects extends React.Component
{

    constructor()
    {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() 
    {
        this.projToggle = !this.projToggle;
    }

    render()
    {
        return (
            <div>
                <button onClick = {this.handleToggle}>{this.projToggle ? 'Hide Projects' : 'Show Projects'}</button>
                <p>this.{projToggle ? this.props.info : false}</p>
            </div>
        );
    }

}

class Work extends React.Component
{

    constructor()
    {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
    }


    handleToggle() 
    {
        this.workToggle = !this.workToggle;
    }

    render()
    {

        return (

            <div>
                <button onClick = {this.handleToggle}>{this.workToggle ? 'Hide Work Experience' : 'Show Work Experience'}</button>
                <p>{this.workToggle ? this.props.info : false}</p>
            </div>
            
        );
    }

}

class References extends React.Component
{

    constructor()
    {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() 
    {
        this.refToggle = !this.refToggle;
    }

    render()
    {
        
        return (

            <div>
                <button onClick = {this.handleToggle}>{this.refToggle ? 'Hide References' : 'Show References'}</button>
                <p>{this.refToggle ? this.props.info : false}</p>
            </div>
            
        );
    }

}

ReactDOM.render(<ResumeApp />, document.getElementById('homeApp'));
