console.log("React commit 1.7");
  
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

    render()
    {
        return (

            <div>
                <button onClick = {toggleEdu}>{eduToggle ? 'Hide Education' : 'Show Education'}</button>
                <p>{eduToggle ? this.props.info : false}</p>
            </div>
            
        );
    }

    toggleEdu()
    {
        eduToggle = !eduToggle;
    }
    
}

class Projects extends React.Component
{
    render()
    {
        return (

            <div>
                <button onClick = {toggleProj}>{projToggle ? 'Hide Education' : 'Show Education'}</button>
                <p>{projToggle ? this.props.info : false}</p>
            </div>
            
        );
    }

    toggleProj()
    {
        projToggle = !projToggle;
    }
    
}

class Work extends React.Component
{

    render()
    {
        return (

            <div>
                <button onClick = {toggleWork}>{workToggle ? 'Hide Education' : 'Show Education'}</button>
                <p>{workToggle ? this.props.info : false}</p>
            </div>
            
        );
    }

    toggleEdu()
    {
        workToggle = !workToggle;
    }
    
}

class References extends React.Component
{

    render()
    {
        return (

            <div>
                <button onClick = {toggleRef}>{refToggle ? 'Hide Education' : 'Show Education'}</button>
                <p>{refToggle ? this.props.info : false}</p>
            </div>
            
        );
    }

    toggleRef()
    {
        refToggle = !refToggle;
    }
}

ReactDOM.render(<ResumeApp />, document.getElementById('homeApp'));
