'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log("React commit 1.6");

var eduToggle = false;
var workToggle = false;
var projToggle = false;
var refToggle = false;

var home = {
    info: ['Education stuff', 'Project stuff', 'Work stuff', "References"]
};

var ResumeApp = function (_React$Component) {
    _inherits(ResumeApp, _React$Component);

    function ResumeApp() {
        _classCallCheck(this, ResumeApp);

        return _possibleConstructorReturn(this, (ResumeApp.__proto__ || Object.getPrototypeOf(ResumeApp)).apply(this, arguments));
    }

    _createClass(ResumeApp, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Welcome!'
                ),
                React.createElement(
                    'h2',
                    null,
                    'This is Michael\'s GitHub page'
                ),
                React.createElement(Education, null),
                React.createElement(Projects, null),
                React.createElement(Work, null),
                React.createElement(References, null)
            );
        }
    }]);

    return ResumeApp;
}(React.Component);

var Education = function (_React$Component2) {
    _inherits(Education, _React$Component2);

    function Education() {
        _classCallCheck(this, Education);

        return _possibleConstructorReturn(this, (Education.__proto__ || Object.getPrototypeOf(Education)).apply(this, arguments));
    }

    _createClass(Education, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: toggleEdu },
                    eduToggle ? 'Hide Education' : 'Show Education'
                ),
                React.createElement(
                    'p',
                    null,
                    eduToggle ? home.info[0] : false
                )
            );
        }
    }, {
        key: 'toggleEdu',
        value: function toggleEdu() {
            eduToggle = !eduToggle;
        }
    }]);

    return Education;
}(React.Component);

var Projects = function (_React$Component3) {
    _inherits(Projects, _React$Component3);

    function Projects() {
        _classCallCheck(this, Projects);

        return _possibleConstructorReturn(this, (Projects.__proto__ || Object.getPrototypeOf(Projects)).apply(this, arguments));
    }

    _createClass(Projects, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: toggleProj },
                    projToggle ? 'Hide Projects' : 'Projects'
                ),
                React.createElement(
                    'p',
                    null,
                    projToggle ? home.info[1] : false
                )
            );
        }
    }, {
        key: 'toggleProj',
        value: function toggleProj() {
            projToggle = !projToggle;
        }
    }]);

    return Projects;
}(React.Component);

var Work = function (_React$Component4) {
    _inherits(Work, _React$Component4);

    function Work() {
        _classCallCheck(this, Work);

        return _possibleConstructorReturn(this, (Work.__proto__ || Object.getPrototypeOf(Work)).apply(this, arguments));
    }

    _createClass(Work, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: toggleWork },
                    workToggle ? 'Hide Work' : 'Show Work'
                ),
                React.createElement(
                    'p',
                    null,
                    workToggle ? home.info[2] : false
                )
            );
        }
    }, {
        key: 'toggleWork',
        value: function toggleWork() {
            workToggle = !workToggle;
        }
    }]);

    return Work;
}(React.Component);

var References = function (_React$Component5) {
    _inherits(References, _React$Component5);

    function References() {
        _classCallCheck(this, References);

        return _possibleConstructorReturn(this, (References.__proto__ || Object.getPrototypeOf(References)).apply(this, arguments));
    }

    _createClass(References, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: toggleRef },
                    refToggle ? 'Hide References' : 'Show References'
                ),
                React.createElement(
                    'p',
                    null,
                    refToggle ? home.info[3] : false
                )
            );
        }
    }, {
        key: 'toggleRef',
        value: function toggleRef() {
            refToggle = !refToggle;
        }
    }]);

    return References;
}(React.Component);

ReactDOM.render(React.createElement(ResumeApp, null), document.getElementById('homeApp'));
