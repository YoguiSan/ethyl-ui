import { _ as _inherits, a as _createClass, c as _classCallCheck, d as _callSuper } from './_rollupPluginBabelHelpers.js';
import { proxyCustomElement, transformTag, h, Host, HTMLElement } from '@stencil/core/internal/client';

const euiGridCss = () => `.sc-eui-grid-h{--eui-grid-template-columns:16;--eui-grid-columns:16;--eui-grid-columns-extraSmall:false;--eui-grid-columns-small:false;--eui-grid-columns-medium:false;--eui-grid-columns-large:false;--eui-grid-columns-extraLarge:false;display:block;padding:1rem}[container=true].sc-eui-grid-h{display:grid;grid-template-columns:repeat(var(--eui-grid-template-columns), 1fr);width:100%}.narrow.sc-eui-grid-h{padding-left:0;padding-right:0}.condensed.sc-eui-grid-h{padding-bottom:0;padding-top:0}@media all and (min-width: 0px){.sc-eui-grid-h{grid-column:span var(--eui-grid-columns-extraSmall)}}@media all and (min-width: 321px){.sc-eui-grid-h{grid-column:span var(--eui-grid-columns-small)}}@media all and (min-width: 481px){.sc-eui-grid-h{grid-column:span var(--eui-grid-columns-medium)}}@media all and (min-width: 769px){.sc-eui-grid-h{grid-column:span var(--eui-grid-columns-large)}}@media all and (min-width: 1025px){.sc-eui-grid-h{grid-column:span var(--eui-grid-columns-extraLarge)}}`;

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
    key: "render",
    value: function render() {
      if (this.container) {
        this.element.style.setProperty('--eui-grid-template-columns', "".concat(this.columns));
      }
      if (this.container && this.gap) {
        this.element.style.setProperty('--eui-grid-template-gap', "".concat(this.gap));
      }
      if (this.extrasmall) {
        this.element.style.setProperty('--eui-grid-columns-extraSmall', "".concat(this.extrasmall));
      }
      if (this.small) {
        this.element.style.setProperty('--eui-grid-columns-small', "".concat(this.small));
      }
      if (this.medium) {
        this.element.style.setProperty('--eui-grid-columns-medium', "".concat(this.medium));
      }
      if (this.large) {
        this.element.style.setProperty('--eui-grid-columns-large', "".concat(this.large));
      }
      if (this.extralarge) {
        this.element.style.setProperty('--eui-grid-columns-extraLarge', "".concat(this.extralarge));
      }
      return h(Host, {
        key: '2c6b5060632b9a72ffa8e8a62f578e07763b3d8c',
        "class": "\n      ".concat(this.container && 'eui-grid-container', " ").concat(this.condensed && 'condensed', " ").concat(this.narrow && 'narrow', " ").concat(this.classes && Array.isArray(this.classes) ? this.classes.join(' ') : this.classes)
      }, h("slot", {
        key: 'ae395a939de40a431deba27ac3a7e17905878a1e'
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
  "justifyContent": [8, "justify-content"]
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