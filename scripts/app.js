"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log("React commit 2.8");

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

            var eduToggle = false;
            var projToggle = false;
            var workToggle = false;
            var refToggle = false;

            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Education, { toggle: eduToggle, info: info[0] }),
                React.createElement(Projects, { toggle: projToggle, info: info[1] }),
                React.createElement(Work, { toggle: workToggle, info: info[2] }),
                React.createElement(References, { toggle: refToggle, info: info[3] })
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

    function Education(props) {
        _classCallCheck(this, Education);

        var _this3 = _possibleConstructorReturn(this, (Education.__proto__ || Object.getPrototypeOf(Education)).call(this, props));

        _this3.handleToggle = _this3.handleToggle.bind(_this3);
        return _this3;
    }

    _createClass(Education, [{
        key: "handleToggle",
        value: function handleToggle() {
            this.props.toggle = !this.props.toggle;
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { onClick: this.handleToggle },
                    this.props.toggle ? 'Hide Education' : 'Show Education'
                ),
                React.createElement(
                    "p",
                    null,
                    this.props.toggle ? this.props.info[0] : false
                )
            );
        }
    }]);

    return Education;
}(React.Component);

var Projects = function (_React$Component4) {
    _inherits(Projects, _React$Component4);

    function Projects(props) {
        _classCallCheck(this, Projects);

        var _this4 = _possibleConstructorReturn(this, (Projects.__proto__ || Object.getPrototypeOf(Projects)).call(this, props));

        _this4.handleToggle = _this4.handleToggle.bind(_this4);
        return _this4;
    }

    _createClass(Projects, [{
        key: "handleToggle",
        value: function handleToggle() {
            this.props.projToggle = !this.props.projToggle;
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { onClick: this.handleToggle },
                    this.props.toggle ? 'Hide Projects' : 'Show Projects'
                ),
                React.createElement(
                    "p",
                    null,
                    this.props.toggle ? this.props.info[1] : false
                )
            );
        }
    }]);

    return Projects;
}(React.Component);

var Work = function (_React$Component5) {
    _inherits(Work, _React$Component5);

    function Work(props) {
        _classCallCheck(this, Work);

        var _this5 = _possibleConstructorReturn(this, (Work.__proto__ || Object.getPrototypeOf(Work)).call(this, props));

        _this5.handleToggle = _this5.handleToggle.bind(_this5);
        return _this5;
    }

    _createClass(Work, [{
        key: "handleToggle",
        value: function handleToggle() {
            this.props.workToggle = !this.props.workToggle;
        }
    }, {
        key: "render",
        value: function render() {

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { onClick: this.handleToggle },
                    this.props.toggle ? 'Hide Work Experience' : 'Show Work Experience'
                ),
                React.createElement(
                    "p",
                    null,
                    this.props.toggle ? this.props.info[2] : false
                )
            );
        }
    }]);

    return Work;
}(React.Component);

var References = function (_React$Component6) {
    _inherits(References, _React$Component6);

    function References(props) {
        _classCallCheck(this, References);

        var _this6 = _possibleConstructorReturn(this, (References.__proto__ || Object.getPrototypeOf(References)).call(this, props));

        _this6.handleToggle = _this6.handleToggle.bind(_this6);
        return _this6;
    }

    _createClass(References, [{
        key: "handleToggle",
        value: function handleToggle() {
            this.props.refToggle = !this.props.refToggle;
        }
    }, {
        key: "render",
        value: function render() {

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { onClick: this.handleToggle },
                    this.props.toggle ? 'Hide References' : 'Show References'
                ),
                React.createElement(
                    "p",
                    null,
                    this.props.toggle ? this.props.info[3] : false
                )
            );
        }
    }]);

    return References;
}(React.Component);

ReactDOM.render(React.createElement(ResumeApp, null), document.getElementById('homeApp'));
