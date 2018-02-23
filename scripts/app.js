"use strict";

console.log("The app is running!");

var home = {
    title: "Welcome!",
    subtitle: "This is my GitHub page!"

};

var resume = {
    title: "Michael's Projects",
    subtitle: "Here's what I've been doing!"

};

var renderHomeApp = function renderHomeApp() {
    var homeTemplate = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            home.title
        ),
        React.createElement(
            "h2",
            null,
            home.subtitle
        )
    );

    ReactDOM.render(homeTemplate, homeApp);
};

var renderResumeApp = function renderResumeApp() {
    var resumeTemplate = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            resume.title
        ),
        React.createElement(
            "h2",
            null,
            resume.subtitle
        )
    );

    ReactDOM.render(resumeTemplate, resumeApp);
};

var resumeApp = document.getElementById('resumeApp');
var homeApp = document.getElementById('homeApp');

renderHomeApp();
renderResumeApp();
