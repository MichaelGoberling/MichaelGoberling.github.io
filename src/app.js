console.log("React commit 2.3");

let eduToggle = false;
let projToggle = false;
let workToggle = false;
let refToggle = false;

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
                <Projects  info = {info[1]}/>
                <Work  info = {info[2]}/>
                <References  info = {info[3]}/>
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

    toggle() 
    {
        eduToggle = !eduToggle;
    }

    render()
    {
        return (

            <div>
                <button onClick = {this.toggle}>{eduToggle ? 'Hide Education' : 'Show Education'}</button>
                <p>{eduToggle ? this.props.info : false}</p>
            </div>
            
        );
    }
}

class Projects extends React.Component
{

    toggle() 
    {
        projToggle = !projToggle;
    }

    render()
    {
        return (
            <div>
                <button onClick = {this.toggle}>{projToggle ? 'Hide Projects' : 'Show Projects'}</button>
                <p>{projToggle ? this.props.info : false}</p>
            </div>
        );
    }

}

class Work extends React.Component
{

    toggle() 
    {
        workToggle = !workToggle;
    }

    render()
    {

        return (

            <div>
                <button onClick = {this.toggle}>{workToggle ? 'Hide Work Experience' : 'Show Work Experience'}</button>
                <p>{workToggle ? this.props.info : false}</p>
            </div>
            
        );
    }

}

class References extends React.Component
{

    toggle() 
    {
        refToggle = !refToggle;
    }

    render()
    {
        
        return (

            <div>
                <button onClick = {this.toggle}>{refToggle ? 'Hide References' : 'Show References'}</button>
                <p>{refToggle ? this.props.info : false}</p>
            </div>
            
        );
    }

}

ReactDOM.render(<ResumeApp />, document.getElementById('homeApp'));
