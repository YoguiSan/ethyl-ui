import { _ as _inherits, a as _createClass, c as _classCallCheck, d as _callSuper } from './_rollupPluginBabelHelpers.js';
import { proxyCustomElement, transformTag, h, Host, HTMLElement } from '@stencil/core/internal/client';

const euiCardCss = () => `@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0.sc-eui-card,200.sc-eui-card;0.sc-eui-card,300.sc-eui-card;0.sc-eui-card,400.sc-eui-card;0.sc-eui-card,500.sc-eui-card;0.sc-eui-card,600.sc-eui-card;0.sc-eui-card,700.sc-eui-card;0.sc-eui-card,800.sc-eui-card;0.sc-eui-card,900.sc-eui-card;1.sc-eui-card,100.sc-eui-card;1.sc-eui-card,200.sc-eui-card;1.sc-eui-card,300.sc-eui-card;1.sc-eui-card,400.sc-eui-card;1.sc-eui-card,500.sc-eui-card;1.sc-eui-card,600.sc-eui-card;1.sc-eui-card,700.sc-eui-card;1.sc-eui-card,800.sc-eui-card;1.sc-eui-card,900&display=swap").sc-eui-card; @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1.sc-eui-card,100..900&display=swap").sc-eui-card; @import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1.sc-eui-card,200..1000&display=swap").sc-eui-card; @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0.sc-eui-card,300.sc-eui-card;0.sc-eui-card,400.sc-eui-card;0.sc-eui-card,500.sc-eui-card;0.sc-eui-card,700.sc-eui-card;0.sc-eui-card,900.sc-eui-card;1.sc-eui-card,100.sc-eui-card;1.sc-eui-card,300.sc-eui-card;1.sc-eui-card,400.sc-eui-card;1.sc-eui-card,500.sc-eui-card;1.sc-eui-card,700.sc-eui-card;1.sc-eui-card,900&display=swap").sc-eui-card; .sc-eui-card-h{border:solid 1px #ccc;border-radius:1.025rem;box-shadow:0 0 #000;display:grid;font-family:"Fira Sans", sans-serif;grid-template-columns:repeat(16, 1fr);height:fit-content;padding:1rem}.sc-eui-card-h .eui-card-header.sc-eui-card{display:flex;grid-column:1/span 15;height:3rem}.sc-eui-card-h .eui-card-header.sc-eui-card .eui-card-icon.sc-eui-card{display:flex;border-radius:10rem;display:flex;height:3rem;justify-content:center;margin-right:1rem;width:3rem}.sc-eui-card-h .eui-card-header.sc-eui-card .eui-card-icon.sc-eui-card *.sc-eui-card{height:1.5rem;width:1.5rem;margin:auto}.sc-eui-card-h .eui-card-header.sc-eui-card .eui-card-title.sc-eui-card{display:block;font-size:1.25rem;font-weight:600;margin:auto 0}.sc-eui-card-h .eui-card-body.sc-eui-card{grid-column:2/span 15;padding-left:1rem}`;

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
        iconBgColor = this.iconBgColor;
      return h(Host, {
        key: '9e65b942a74f5e38a09bd7b817dca8e737d0d946'
      }, title && h("div", {
        key: 'd1ce6c5031de70067b9af5db755b130a181ef35f',
        "class": "eui-card-header"
      }, h("div", {
        key: '1fb1c082640702a9650d566e8ccb690ada9a2509',
        "class": "eui-card-icon",
        style: {
          backgroundColor: iconBgColor
        }
      }, h("slot", {
        key: 'cbe113a2b5d60b5ea53cc3a3a1ac2e45f7c34a37',
        name: "icon"
      })), title && h("p", {
        key: 'd49c7bbae350f05bf827c98ec0fc71cf1c0df36a',
        "class": "eui-card-title"
      }, title)), h("div", {
        key: 'fa05fcd760ac9f6adc66104fa6e89c2a5fd06a35',
        "class": "eui-card-body"
      }, h("slot", {
        key: '5742dd4a0a238c90181e06e40bd899872099e66d',
        name: "body"
      })));
    }
  }], [{
    key: "style",
    get: function get() {
      return euiCardCss();
    }
  }]);
}(HTMLElement), [262, "eui-card", {
  "title": [8],
  "iconBgColor": [8, "icon-bg-color"]
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