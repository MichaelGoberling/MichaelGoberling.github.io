"use strict";

console.log("The app is running!");

var renderApp = function renderApp() {
    var template = React.createElement(
        "p",
        null,
        "Test"
    );
    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');
renderApp();
