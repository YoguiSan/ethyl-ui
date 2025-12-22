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
        key: 'af2df402f4ba71573ac8c793b3a082336664cce1',
        "class": this.classes
      }, h("figure", {
        key: '78ece80a0420fd1ded9dbafe5092d1b256b88d40'
      }, h("img", {
        key: '9d6156ddf6d9543293628e9e969af3600ef6e443',
        src: this.src,
        alt: this.alt
      }), this.caption && h("figcaption", {
        key: '46a3dc7c2286668a017803ea19e5f0fcf31b9024'
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