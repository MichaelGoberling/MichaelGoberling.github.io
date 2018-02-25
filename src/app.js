console.log("The app is running!");

let eduToggle = false;
let workToggle = false;
let projToggle = false;
let refToggle = false; 

const home = 
{
    info: ['Education stuff', 'Project stuff', 'Work stuff', "References"]
};
  
class ResumeApp extends React.Component
{
    render()
    {
        return (

            <div>
                <h1>Welcome!</h1>
                <h2>This is Michael's GitHub page</h2>
                <Education />
                <Projects />
                <Work />
                <References />
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
                <p>{eduToggle ? home.info[0] : false}</p>
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
                <button onClick = {toggleProj}>{projToggle ? 'Hide Projects' : 'Projects'}</button>
                <p>{projToggle ? home.info[1] : false}</p>
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
                    <button onClick = {toggleWork}>{workToggle ? 'Hide Work' : 'Show Work'}</button>
                    <p>{workToggle ? home.info[2] : false}</p>
            </div>
            
        );
    }

    toggleWork()
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
                <button onClick = {toggleRef}>{refToggle ? 'Hide References' : 'Show References'}</button>
                <p>{refToggle ? home.info[3] : false}</p>
            </div>
            
        );
    }
    
    toggleRef()
    {
        refToggle = !refToggle;
    }
}

ReactDOM.render(<ResumeApp />, document.getElementById('homeApp'));
