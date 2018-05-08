var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PreviewerContainer = function (_React$Component) {
  _inherits(PreviewerContainer, _React$Component);

  function PreviewerContainer(props) {
    _classCallCheck(this, PreviewerContainer);

    var _this = _possibleConstructorReturn(this, (PreviewerContainer.__proto__ || Object.getPrototypeOf(PreviewerContainer)).call(this, props));

    _this.state = {
      inputText: ''
    };
    _this.updateText = _this.updateText.bind(_this);
    return _this;
  }

  _createClass(PreviewerContainer, [{
    key: 'updateText',
    value: function updateText(e) {
      this.setState({
        inputText: e.target.value
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(Previewer, { handleChange: this.updateText, inputText: this.state.inputText });
    }
  }]);

  return PreviewerContainer;
}(React.Component);

var Previewer = function Previewer(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      { className: 'heading' },
      'Markdown Previewer'
    ),
    React.createElement(
      'div',
      { className: 'previewer' },
      React.createElement('textarea', { className: 'text-input', value: props.inputText, onChange: props.handleChange, placeholder: 'Enter text here...' }),
      React.createElement('div', { className: 'text-output', dangerouslySetInnerHTML: { __html: marked(props.inputText) } })
    )
  );
};

ReactDOM.render(React.createElement(PreviewerContainer, null), document.getElementById('app'));