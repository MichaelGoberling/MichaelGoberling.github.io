console.log("React commit 1.8");
  
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
                <button onClick = {toggle(eduToggle)}>{eduToggle ? 'Hide Education' : 'Show Education'}</button>
                <p>{eduToggle ? this.props.info : false}</p>
            </div>
            
        );
    }

}

class Projects extends React.Component
{
    render()
    {
        return (

            <div>
                <button onClick = {toggle(projToggle)}>{projToggle ? 'Hide Education' : 'Show Education'}</button>
                <p>{projToggle ? this.props.info : false}</p>
            </div>
            
        );
    }

}

class Work extends React.Component
{

    render()
    {
        return (

            <div>
                <button onClick = {toggle(workToggle)}>{workToggle ? 'Hide Education' : 'Show Education'}</button>
                <p>{workToggle ? this.props.info : false}</p>
            </div>
            
        );
    }

}

class References extends React.Component
{

    render()
    {
        return (

            <div>
                <button onClick = {toggle(refToggle)}>{refToggle ? 'Hide Education' : 'Show Education'}</button>
                <p>{refToggle ? this.props.info : false}</p>
            </div>
            
        );
    }

}

const toggle = (toggleObj) =>
{
    toggleObj = !toggleObj;
}

ReactDOM.render(<ResumeApp />, document.getElementById('homeApp'));
