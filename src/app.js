console.log("The app is running!");

let eduToggle = false;
let projToggle = false;
let workToggle = false;
let refToggle = false;

const home = {
    title: "Welcome!",
    subtitle: "This is my GitHub page!",
    info: ['Education Stuff','Project Stuff','Work Stuff','Reference Stuff']
};

const toggleEdu = () =>
{
    eduToggle = !eduToggle;
    renderHomeApp();

};

const toggleProj = () =>
{
    projToggle = !projToggle;
    renderHomeApp();

};

const toggleWork = () =>
{
    workToggle = !workToggle;
    renderHomeApp();

};

const toggleRef = () =>
{   
    refToggle = !refToggle;
    renderHomeApp();

};

const renderHomeApp = () =>
{
    const homeTemplate =
    (
        <div>
            <h1>{home.title}</h1>
            <h2>{home.subtitle}</h2>
            <button onClick = {toggleEdu}>{eduToggle ? 'Hide Education' : 'Show Education'}</button>
            <p>{eduToggle ? home.info[0] : false}</p>
            <button onClick = {toggleProj}>{projToggle ? 'Hide Projects' : 'Show Projects'}</button>
            <p>{projToggle ? home.info[1] : false}</p>    
            <button onClick = {toggleWork}>{workToggle ? 'Hide Work Experience' : 'Show Work Experience'}</button>
            <p>{workToggle ? home.info[2] : false}</p>
            <button onClick = {toggleRef}>{refToggle ? 'Hide References' : 'Show References'}</button>
            <p>{refToggle ? home.info[3] : false}</p>
        </div>
    );

    ReactDOM.render(homeTemplate, homeApp);
}

const homeApp = document.getElementById('homeApp');

renderHomeApp();
