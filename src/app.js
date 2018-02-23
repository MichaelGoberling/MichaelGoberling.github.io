console.log("The app is running!");


const home = {
    title: "Welcome!",
    subtitle: "This is my GitHub page!"

};

const resume = {
    title: "Michael's Projects",
    subtitle: "Here's what I've been doing!"

};


const renderHomeApp = () =>
{
    const homeTemplate =
    (
        <div>
            <h1>{home.title}</h1>
            <h2>{home.subtitle}</h2>
        </div>
    );

    ReactDOM.render(homeTemplate, homeApp);
}

const renderResumeApp= () => 
{
    const resumeTemplate = 
    (
        <div>
            <h1>{resume.title}</h1>
            <h2>{resume.subtitle}</h2>
        </div>
    );

    ReactDOM.render(resumeTemplate, resumeApp);
};



const resumeApp = document.getElementById('resumeApp');
const homeApp = document.getElementById('homeApp');

renderHomeApp();
renderResumeApp();
