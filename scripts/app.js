console.log("The app is running!");

const renderApp= () => 
{
    const template = <p>Test</p>
    ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('app');
renderApp();