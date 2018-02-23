"use strict";

console.log("The app is running!");

var app = {
    title: "Michael's Projects",
    subtitle: "Here's what I've been doing!"

};

var renderApp = function renderApp() {
    var myTemplate = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        React.createElement(
            "h2",
            null,
            app.subtitle
        )
    );

    ReactDOM.render(myTemplate, appRoot);
};

var appRoot = document.getElementById('app');
renderApp();
