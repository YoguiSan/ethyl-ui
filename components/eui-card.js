import { _ as _inherits, a as _createClass, c as _classCallCheck, d as _callSuper } from './_rollupPluginBabelHelpers.js';
import { proxyCustomElement, transformTag, h, Host, HTMLElement } from '@stencil/core/internal/client';

const euiCardCss = () => `@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0.sc-eui-card,200.sc-eui-card;0.sc-eui-card,300.sc-eui-card;0.sc-eui-card,400.sc-eui-card;0.sc-eui-card,500.sc-eui-card;0.sc-eui-card,600.sc-eui-card;0.sc-eui-card,700.sc-eui-card;0.sc-eui-card,800.sc-eui-card;0.sc-eui-card,900.sc-eui-card;1.sc-eui-card,100.sc-eui-card;1.sc-eui-card,200.sc-eui-card;1.sc-eui-card,300.sc-eui-card;1.sc-eui-card,400.sc-eui-card;1.sc-eui-card,500.sc-eui-card;1.sc-eui-card,600.sc-eui-card;1.sc-eui-card,700.sc-eui-card;1.sc-eui-card,800.sc-eui-card;1.sc-eui-card,900&display=swap").sc-eui-card; @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1.sc-eui-card,100..900&display=swap").sc-eui-card; @import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1.sc-eui-card,200..1000&display=swap").sc-eui-card; @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0.sc-eui-card,300.sc-eui-card;0.sc-eui-card,400.sc-eui-card;0.sc-eui-card,500.sc-eui-card;0.sc-eui-card,700.sc-eui-card;0.sc-eui-card,900.sc-eui-card;1.sc-eui-card,100.sc-eui-card;1.sc-eui-card,300.sc-eui-card;1.sc-eui-card,400.sc-eui-card;1.sc-eui-card,500.sc-eui-card;1.sc-eui-card,700.sc-eui-card;1.sc-eui-card,900&display=swap").sc-eui-card; .sc-eui-card-h{border-radius:1.025rem;box-shadow:0 0 #000;height:fit-content}.sc-eui-card-h .eui-card-header.sc-eui-card{display:flex}.sc-eui-card-h .eui-card-header.sc-eui-card .eui-card-icon.sc-eui-card slot[name=icon].sc-eui-card{border-radius:10rem;display:flex;width:3rem}.sc-eui-card-h .eui-card-header.sc-eui-card .eui-card-icon.sc-eui-card slot[name=icon].sc-eui-card img.sc-eui-card,.sc-eui-card-h .eui-card-header.sc-eui-card .eui-card-icon.sc-eui-card slot[name=icon].sc-eui-card svg.sc-eui-card{height:1.5rem;margin:auto;width:1.5rem}`;

var EUICard = /*@__PURE__*/proxyCustomElement(/*#__PURE__*/function (_HTMLElement) {
  function EUICard(registerHost) {
    var _this;
    _classCallCheck(this, EUICard);
    _this = _callSuper(this, EUICard);
    if (registerHost !== false) {
      _this.__registerHost();
    }
    return _this;
  }
  _inherits(EUICard, _HTMLElement);
  return _createClass(EUICard, [{
    key: "render",
    value: function render() {
      var title = this.title,
        iconBgColor = this.iconBgColor,
        children = this.children;
      return h(Host, {
        key: '77cf479a140cb2be2d0d2bf0119f59ecd8c17351'
      }, title && h("div", {
        key: '9800c3f6e2c4c6638ca056866bcad2857c1683ff',
        "class": "eui-card-header"
      }, h("div", {
        key: 'e1157a4255f761d2ed0f417262e730c70def021b',
        "class": "eui-card-icon",
        style: {
          backgroundColor: iconBgColor
        }
      }, h("slot", {
        key: 'b4ab2f0c3b8630cfc1ddea46ca5b82fdfb0854c7',
        name: "icon"
      })), title && h("div", {
        key: '1fc7b40c6784f49b7b6fb21da318069af4e286c4',
        "class": "eui-card-title"
      }, title)), children && h("div", {
        key: '25aa076da74d4e37fb058d02527042d60453d0ca',
        "class": "eui-card-body"
      }, children));
    }
  }], [{
    key: "style",
    get: function get() {
      return euiCardCss();
    }
  }]);
}(HTMLElement), [262, "eui-card", {
  "title": [8],
  "iconBgColor": [8, "icon-bg-color"],
  "children": [8]
}]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  var components = ["eui-card"];
  components.forEach(function (tagName) {
    switch (tagName) {
      case "eui-card":
        if (!customElements.get(transformTag(tagName))) {
          customElements.define(transformTag(tagName), EUICard);
        }
        break;
    }
  });
}

const EuiCard = EUICard;
const defineCustomElement = defineCustomElement$1;

export { EuiCard, defineCustomElement };
//# sourceMappingURL=eui-card.js.map

//# sourceMappingURL=eui-card.js.map