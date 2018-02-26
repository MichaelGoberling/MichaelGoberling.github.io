"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log("React commit 2.3");

var eduToggle = false;
var projToggle = false;
var workToggle = false;
var refToggle = false;

var ResumeApp = function (_React$Component) {
    _inherits(ResumeApp, _React$Component);

    function ResumeApp() {
        _classCallCheck(this, ResumeApp);

        return _possibleConstructorReturn(this, (ResumeApp.__proto__ || Object.getPrototypeOf(ResumeApp)).apply(this, arguments));
    }

    _createClass(ResumeApp, [{
        key: "render",
        value: function render() {

            var title = "Michael's Page";
            var subtitle = "Here's what I've been up to!";
            var info = ['Education stuff', 'Project stuff', 'Work stuff', "References"];

            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Education, { info: info[0] }),
                React.createElement(Projects, { info: info[1] }),
                React.createElement(Work, { info: info[2] }),
                React.createElement(References, { info: info[3] })
            );
        }
    }]);

    return ResumeApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    this.props.title
                ),
                React.createElement(
                    "h2",
                    null,
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Education = function (_React$Component3) {
    _inherits(Education, _React$Component3);

    function Education() {
        _classCallCheck(this, Education);

        return _possibleConstructorReturn(this, (Education.__proto__ || Object.getPrototypeOf(Education)).apply(this, arguments));
    }

    _createClass(Education, [{
        key: "toggle",
        value: function toggle() {
            eduToggle = !eduToggle;
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { onClick: this.toggle },
                    eduToggle ? 'Hide Education' : 'Show Education'
                ),
                React.createElement(
                    "p",
                    null,
                    eduToggle ? this.props.info : false
                )
            );
        }
    }]);

    return Education;
}(React.Component);

var Projects = function (_React$Component4) {
    _inherits(Projects, _React$Component4);

    function Projects() {
        _classCallCheck(this, Projects);

        return _possibleConstructorReturn(this, (Projects.__proto__ || Object.getPrototypeOf(Projects)).apply(this, arguments));
    }

    _createClass(Projects, [{
        key: "toggle",
        value: function toggle() {
            projToggle = !projToggle;
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { onClick: this.toggle },
                    projToggle ? 'Hide Projects' : 'Show Projects'
                ),
                React.createElement(
                    "p",
                    null,
                    projToggle ? this.props.info : false
                )
            );
        }
    }]);

    return Projects;
}(React.Component);

var Work = function (_React$Component5) {
    _inherits(Work, _React$Component5);

    function Work() {
        _classCallCheck(this, Work);

        return _possibleConstructorReturn(this, (Work.__proto__ || Object.getPrototypeOf(Work)).apply(this, arguments));
    }

    _createClass(Work, [{
        key: "toggle",
        value: function toggle() {
            workToggle = !workToggle;
        }
    }, {
        key: "render",
        value: function render() {

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { onClick: this.toggle },
                    workToggle ? 'Hide Work Experience' : 'Show Work Experience'
                ),
                React.createElement(
                    "p",
                    null,
                    workToggle ? this.props.info : false
                )
            );
        }
    }]);

    return Work;
}(React.Component);

var References = function (_React$Component6) {
    _inherits(References, _React$Component6);

    function References() {
        _classCallCheck(this, References);

        return _possibleConstructorReturn(this, (References.__proto__ || Object.getPrototypeOf(References)).apply(this, arguments));
    }

    _createClass(References, [{
        key: "toggle",
        value: function toggle() {
            refToggle = !refToggle;
        }
    }, {
        key: "render",
        value: function render() {

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { onClick: this.toggle },
                    refToggle ? 'Hide References' : 'Show References'
                ),
                React.createElement(
                    "p",
                    null,
                    refToggle ? this.props.info : false
                )
            );
        }
    }]);

    return References;
}(React.Component);

ReactDOM.render(React.createElement(ResumeApp, null), document.getElementById('homeApp'));
