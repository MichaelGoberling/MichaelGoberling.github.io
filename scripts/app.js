"use strict";

console.log("The app is running!");

var eduToggle = false;
var projToggle = false;
var workToggle = false;
var refToggle = false;

var home = {
    title: "Welcome!",
    subtitle: "This is my GitHub page!",
    info: ['Education Stuff', 'Project Stuff', 'Work Stuff', 'Reference Stuff']
};

var toggleEdu = function toggleEdu() {
    eduToggle = !eduToggle;
    renderHomeApp();
};

var toggleProj = function toggleProj() {
    projToggle = !projToggle;
    renderHomeApp();
};

var toggleWork = function toggleWork() {
    workToggle = !workToggle;
    renderHomeApp();
};

var toggleRef = function toggleRef() {
    refToggle = !refToggle;
    renderHomeApp();
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
        ),
        React.createElement(
            "button",
            { onClick: toggleEdu },
            eduToggle ? 'Show Education' : 'Hide Education'
        ),
        React.createElement(
            "p",
            null,
            eduToggle ? false : home.info[0]
        ),
        React.createElement(
            "button",
            { onClick: toggleProj },
            projToggle ? 'Show Projects' : 'Hide Projects'
        ),
        React.createElement(
            "p",
            null,
            projToggle ? false : home.info[1]
        ),
        React.createElement(
            "button",
            { onClick: toggleWork },
            workToggle ? 'Show Work Experience' : 'Hide Work Experience'
        ),
        React.createElement(
            "p",
            null,
            workToggle ? false : home.info[2]
        ),
        React.createElement(
            "button",
            { onClick: toggleRef },
            refToggle ? 'Show References' : 'Hide References'
        ),
        React.createElement(
            "p",
            null,
            refToggle ? false : home.info[3]
        ),
        React.createElement(
            "p",
            null,
            "Test"
        )
    );

    ReactDOM.render(homeTemplate, homeApp);
};

var homeApp = document.getElementById('homeApp');

renderHomeApp();
