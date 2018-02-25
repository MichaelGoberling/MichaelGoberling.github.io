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
            eduToggle ? 'Hide Education' : 'Show Education'
        ),
        React.createElement(
            "p",
            null,
            eduToggle ? home.info[0] : false
        ),
        React.createElement(
            "button",
            { onClick: toggleProj },
            projToggle ? 'Hide Projects' : 'Show Projects'
        ),
        React.createElement(
            "p",
            null,
            projToggle ? home.info[1] : false
        ),
        React.createElement(
            "button",
            { onClick: toggleWork },
            workToggle ? 'Hide Work Experience' : 'Show Work Experience'
        ),
        React.createElement(
            "p",
            null,
            workToggle ? home.info[2] : false
        ),
        React.createElement(
            "button",
            { onClick: toggleRef },
            refToggle ? 'Hide References' : 'Show References'
        ),
        React.createElement(
            "p",
            null,
            refToggle ? home.info[3] : false
        )
    );

    ReactDOM.render(homeTemplate, homeApp);
};

var homeApp = document.getElementById('homeApp');

renderHomeApp();
