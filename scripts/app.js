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
            { onClick: eduToggle = !eduToggle },
            eduToggle ? 'Show Education' : 'Hide Education'
        ),
        React.createElement(
            "p",
            null,
            eduToggle ? false : info[0]
        ),
        React.createElement(
            "button",
            { onClick: projToggle = !projToggle },
            projToggle ? 'Show Projects' : 'Hide Projects'
        ),
        React.createElement(
            "p",
            null,
            projToggle ? false : info[1]
        ),
        React.createElement(
            "button",
            { onClick: workToggle = !workToggle },
            workToggle ? 'Show Work Experience' : 'Hide Work Experience'
        ),
        React.createElement(
            "p",
            null,
            workToggle ? false : info[2]
        ),
        React.createElement(
            "button",
            { onClick: refToggle = !refToggle },
            refToggle ? 'Show References' : 'Hide References'
        ),
        React.createElement(
            "p",
            null,
            refToggle ? false : info[3]
        ),
        React.createElement("p", null)
    );

    ReactDOM.render(homeTemplate, homeApp);
};

var homeApp = document.getElementById('homeApp');

renderHomeApp();
