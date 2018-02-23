console.log("The app is running!");

const app = {
    title: "Michael's Projects",
    subtitle: "Here's what I've been doing!"

};

const renderApp= () => 
{
    const myTemplate = 
    (
        <div>
            <h1>{app.title}</h1>
            <h2>{app.subtitle}</h2>
        </div>
    );

    ReactDOM.render(myTemplate, appRoot);
};

const appRoot = document.getElementById('app');
renderApp();