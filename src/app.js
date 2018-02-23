console.log("The app is running!");

const resumeApp = {
    title: "Michael's Projects",
    subtitle: "Here's what I've been doing!"

};

const renderResumeApp= () => 
{
    const resumeTemplate = 
    (
        <div>
            <h1>{resumeApp.title}</h1>
            <h2>{resumeApp.subtitle}</h2>
        </div>
    );

    ReactDOM.render(resumeTemplate, appResume);
};

const appResume = document.getElementById('resumeApp');
const appHome = document.getElementById('homeApp');
renderResumeApp();