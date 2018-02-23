"use strict";

console.log("The app is running!");

var resumeApp = {
    title: "Michael's Projects",
    subtitle: "Here's what I've been doing!"

};

var renderResumeApp = function renderResumeApp() {
    var resumeTemplate = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            resumeApp.title
        ),
        React.createElement(
            "h2",
            null,
            resumeApp.subtitle
        )
    );

    ReactDOM.render(resumeTemplate, appResume);
};

var appResume = document.getElementById('resumeApp');
renderResumeApp();
