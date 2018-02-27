"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log("React commit 3.3");

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

            var eduInfo = 'University of Nebraska-Lincoln';
            var projInfo = 'Microprocessor Board';
            var workInfo = 'Union Pacific';
            var refInfo = 'Douglas Hoff - 402-123-4567';

            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Education, { handleToggle: this.handleToggle, info: eduInfo }),
                React.createElement(Projects, { info: projInfo }),
                React.createElement(Work, { info: workInfo }),
                React.createElement(References, { info: refInfo })
            );
        }
    }]);

    return ResumeApp;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        React.createElement(
            "h2",
            null,
            props.subtitle
        )
    );
};

var Education = function (_React$Component2) {
    _inherits(Education, _React$Component2);

    function Education(props) {
        _classCallCheck(this, Education);

        var _this2 = _possibleConstructorReturn(this, (Education.__proto__ || Object.getPrototypeOf(Education)).call(this, props));

        _this2.handleToggle = _this2.handleToggle.bind(_this2);

        _this2.state = {
            eduToggle: false
        };
        return _this2;
    }

    _createClass(Education, [{
        key: "handleToggle",
        value: function handleToggle() {
            this.setState(function (prevState) {
                return {
                    eduToggle: !prevState.eduToggle
                };
            });
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
                    this.state.eduToggle ? 'Hide Education' : 'Show Education'
                ),
                React.createElement(
                    "p",
                    null,
                    this.state.eduToggle ? this.props.info : false
                )
            );
        }
    }]);

    return Education;
}(React.Component);

var Projects = function (_React$Component3) {
    _inherits(Projects, _React$Component3);

    function Projects(props) {
        _classCallCheck(this, Projects);

        var _this3 = _possibleConstructorReturn(this, (Projects.__proto__ || Object.getPrototypeOf(Projects)).call(this, props));

        _this3.handleToggle = _this3.handleToggle.bind(_this3);

        _this3.state = {
            projToggle: false
        };
        return _this3;
    }

    _createClass(Projects, [{
        key: "handleToggle",
        value: function handleToggle() {
            this.setState(function (prevState) {
                return {
                    projToggle: !prevState.projToggle
                };
            });
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
                    this.state.projToggle ? 'Hide Projects' : 'Show Projects'
                ),
                React.createElement(
                    "p",
                    null,
                    this.state.projToggle ? this.props.info : false
                )
            );
        }
    }]);

    return Projects;
}(React.Component);

var Work = function (_React$Component4) {
    _inherits(Work, _React$Component4);

    function Work(props) {
        _classCallCheck(this, Work);

        var _this4 = _possibleConstructorReturn(this, (Work.__proto__ || Object.getPrototypeOf(Work)).call(this, props));

        _this4.handleToggle = _this4.handleToggle.bind(_this4);

        _this4.state = {
            workToggle: false
        };
        return _this4;
    }

    _createClass(Work, [{
        key: "handleToggle",
        value: function handleToggle() {
            this.setState(function (prevState) {
                return {
                    workToggle: !prevState.workToggle
                };
            });
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
                    this.state.workToggle ? 'Hide Work Experience' : 'Show Work Experience'
                ),
                React.createElement(
                    "p",
                    null,
                    this.state.workToggle ? this.props.info : false
                )
            );
        }
    }]);

    return Work;
}(React.Component);

var References = function (_React$Component5) {
    _inherits(References, _React$Component5);

    function References(props) {
        _classCallCheck(this, References);

        var _this5 = _possibleConstructorReturn(this, (References.__proto__ || Object.getPrototypeOf(References)).call(this, props));

        _this5.handleToggle = _this5.handleToggle.bind(_this5);

        _this5.state = {
            refToggle: false
        };
        return _this5;
    }

    _createClass(References, [{
        key: "handleToggle",
        value: function handleToggle() {
            this.setState(function (prevState) {
                return {
                    refToggle: !prevState.refToggle
                };
            });
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
                    this.state.refToggle ? 'Hide References' : 'Show References'
                ),
                React.createElement(
                    "p",
                    null,
                    this.state.refToggle ? this.props.info : false
                )
            );
        }
    }]);

    return References;
}(React.Component);

ReactDOM.render(React.createElement(ResumeApp, null), document.getElementById('homeApp'));
