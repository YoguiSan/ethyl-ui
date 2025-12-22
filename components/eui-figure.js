import { _ as _inherits, a as _createClass, c as _classCallCheck, d as _callSuper } from './_rollupPluginBabelHelpers.js';
import { proxyCustomElement, transformTag, h, Host, HTMLElement } from '@stencil/core/internal/client';

const euiFigureCss = () => `.sc-eui-figure-h{--eui-grid-template-columns:16;--eui-grid-columns:16;--eui-grid-columns-extraSmall:false;--eui-grid-columns-small:false;--eui-grid-columns-medium:false;--eui-grid-columns-large:false;--eui-grid-columns-extraLarge:false}`;

var EUIFigure = /*@__PURE__*/proxyCustomElement(/*#__PURE__*/function (_HTMLElement) {
  function EUIFigure(registerHost) {
    var _this;
    _classCallCheck(this, EUIFigure);
    _this = _callSuper(this, EUIFigure);
    if (registerHost !== false) {
      _this.__registerHost();
    }
    _this.classes = '';
    return _this;
  }
  _inherits(EUIFigure, _HTMLElement);
  return _createClass(EUIFigure, [{
    key: "render",
    value: function render() {
      var Component = h(Host, {
        key: '7088561a347b291cbe12f2b7a3647d461ca8cffc',
        "class": this.classes
      }, h("figure", {
        key: '5e9fc2e7224026d03095f987f164e9fc61fdbd7a'
      }, h("img", {
        key: 'b02c14438e736d54331ba9d89806ec03d8fdcaa8',
        src: this.src,
        alt: this.alt
      }), this.caption && h("figcaption", {
        key: '98588e799b7fd92e68734a6d8d9a8d5644a73400'
      }, this.caption)));
      return this.url ? h("a", {
        href: this.url
      }, Component) : Component;
    }
  }], [{
    key: "style",
    get: function get() {
      return euiFigureCss();
    }
  }]);
}(HTMLElement), [258, "eui-figure", {
  "src": [8],
  "alt": [8],
  "caption": [8],
  "backgroundImage": [8, "background-image"],
  "classes": [1],
  "url": [8]
}]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  var components = ["eui-figure"];
  components.forEach(function (tagName) {
    switch (tagName) {
      case "eui-figure":
        if (!customElements.get(transformTag(tagName))) {
          customElements.define(transformTag(tagName), EUIFigure);
        }
        break;
    }
  });
}

const EuiFigure = EUIFigure;
const defineCustomElement = defineCustomElement$1;

export { EuiFigure, defineCustomElement };
//# sourceMappingURL=eui-figure.js.map

//# sourceMappingURL=eui-figure.js.map