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
        key: '0367f16bfab322bcec33f0e0da16f51b0c40a9f3',
        "class": this.classes
      }, h("figure", {
        key: '93098bb4e9f902f6da0fd4abfb119ea1de31c620'
      }, h("img", {
        key: '727b602b9192707afbb4dd1500a95c8e2f49ce17',
        src: this.src,
        alt: this.alt
      }), this.caption && h("figcaption", {
        key: '3aa3e322b0b660cb70c3ad5ba120e560d24d0f37'
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