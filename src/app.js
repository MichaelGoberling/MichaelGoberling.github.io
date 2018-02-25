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
            <button onClick = {toggleEdu}>{eduToggle ? 'Show Education' : 'Hide Education'}</button>
            <p>{eduToggle ? false : home.info[0]}</p>
            <button onClick = {toggleProj}>{projToggle ? 'Show Projects' : 'Hide Projects'}</button>
            <p>{projToggle ? false : home.info[1]}</p>    
            <button onClick = {toggleWork}>{workToggle ? 'Show Work Experience' : 'Hide Work Experience'}</button>
            <p>{workToggle ? false : home.info[2]}</p>
            <button onClick = {toggleRef}}>{refToggle ? 'Show References' : 'Hide References'}</button>
            <p>{refToggle ? false : home.info[3]}</p>
            <p>Test</p>
        </div>
    );

    ReactDOM.render(homeTemplate, homeApp);
}

const homeApp = document.getElementById('homeApp');

renderHomeApp();
