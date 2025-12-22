import { _ as _inherits, a as _createClass, c as _classCallCheck, d as _callSuper } from './_rollupPluginBabelHelpers.js';
import { proxyCustomElement, transformTag, h, Host, HTMLElement } from '@stencil/core/internal/client';

const extraSmall = 0;
const small = 321;
const medium = 481;
const large = 769;
var Breakpoints = {
	extraSmall: extraSmall,
	small: small,
	medium: medium,
	large: large};

const euiGridCss = () => `.sc-eui-grid-h{display:block;padding:1rem}[container=true].sc-eui-grid-h{display:grid;width:100%}.narrow.sc-eui-grid-h{padding-left:0;padding-right:0}.condensed.sc-eui-grid-h{padding-bottom:0;padding-top:0}`;

var EUIGrid = /*@__PURE__*/proxyCustomElement(/*#__PURE__*/function (_HTMLElement) {
  function EUIGrid(registerHost) {
    var _this;
    _classCallCheck(this, EUIGrid);
    _this = _callSuper(this, EUIGrid);
    if (registerHost !== false) {
      _this.__registerHost();
    }
    return _this;
  }
  _inherits(EUIGrid, _HTMLElement);
  return _createClass(EUIGrid, [{
    key: "handleResize",
    value: function handleResize() {
      var _window = window,
        width = _window.innerWidth;
      var columns = 0;
      if (width <= Breakpoints.extraSmall) {
        columns = this.extrasmall || 16;
      } else if (width <= Breakpoints.small) {
        columns = this.small || this.extrasmall || 16;
      } else if (width <= Breakpoints.medium) {
        columns = this.medium || this.small || this.extrasmall || 16;
      } else if (width <= Breakpoints.large) {
        columns = this.large || this.medium || this.small || this.extrasmall || 16;
      } else {
        columns = this.extralarge || this.large || this.medium || this.small || this.extrasmall || 16;
      }
      this.element.style.gridColumn = "span ".concat(columns || 16);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      if (!this.rendered) {
        this.handleResize();
        window.addEventListener('resize', function () {
          return _this2.handleResize();
        });
        this.rendered = true;
      }
      if (this.container) {
        this.element.style.gridTemplateColumns = "repeat(".concat(this.columns || 16, ", 1fr)");
        if (this.gap) {
          this.element.style.gap = this.gap ? "".concat(this.gap, "px") : '2rem';
        }
      }
      return h(Host, {
        key: 'b4dc11280a7676523d8ea1ddb1db4acbcc65daba',
        "class": "\n      ".concat(this.container && 'eui-grid-container', " ").concat(this.condensed && 'condensed', " ").concat(this.narrow && 'narrow', " ").concat(this.classes && Array.isArray(this.classes) ? this.classes.join(' ') : this.classes)
      }, h("slot", {
        key: 'bfdb78907762192f0532af0ba50149ab3c67eb96'
      }));
    }
  }, {
    key: "element",
    get: function get() {
      return this;
    }
  }], [{
    key: "style",
    get: function get() {
      return euiGridCss();
    }
  }]);
}(HTMLElement), [262, "eui-grid", {
  "columns": [8],
  "gap": [8],
  "container": [8],
  "extrasmall": [8],
  "small": [8],
  "medium": [8],
  "large": [8],
  "extralarge": [8],
  "narrow": [8],
  "condensed": [8],
  "classes": [8],
  "flexDirection": [8, "flex-direction"],
  "justifyContent": [8, "justify-content"],
  "resizeHandler": [16],
  "rendered": [4]
}]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  var components = ["eui-grid"];
  components.forEach(function (tagName) {
    switch (tagName) {
      case "eui-grid":
        if (!customElements.get(transformTag(tagName))) {
          customElements.define(transformTag(tagName), EUIGrid);
        }
        break;
    }
  });
}

const EuiGrid = EUIGrid;
const defineCustomElement = defineCustomElement$1;

export { EuiGrid, defineCustomElement };
//# sourceMappingURL=eui-grid.js.map

//# sourceMappingURL=eui-grid.js.map