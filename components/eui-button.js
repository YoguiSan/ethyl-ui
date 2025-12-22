import { _ as _inherits, a as _createClass, b as _typeof, c as _classCallCheck, d as _callSuper } from './_rollupPluginBabelHelpers.js';
import { proxyCustomElement, transformTag, h, Host, HTMLElement } from '@stencil/core/internal/client';

const euiButtonCss = () => `@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0.sc-eui-button,200.sc-eui-button;0.sc-eui-button,300.sc-eui-button;0.sc-eui-button,400.sc-eui-button;0.sc-eui-button,500.sc-eui-button;0.sc-eui-button,600.sc-eui-button;0.sc-eui-button,700.sc-eui-button;0.sc-eui-button,800.sc-eui-button;0.sc-eui-button,900.sc-eui-button;1.sc-eui-button,100.sc-eui-button;1.sc-eui-button,200.sc-eui-button;1.sc-eui-button,300.sc-eui-button;1.sc-eui-button,400.sc-eui-button;1.sc-eui-button,500.sc-eui-button;1.sc-eui-button,600.sc-eui-button;1.sc-eui-button,700.sc-eui-button;1.sc-eui-button,800.sc-eui-button;1.sc-eui-button,900&display=swap").sc-eui-button; @import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1.sc-eui-button,100..900&display=swap").sc-eui-button; @import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1.sc-eui-button,200..1000&display=swap").sc-eui-button; @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0.sc-eui-button,300.sc-eui-button;0.sc-eui-button,400.sc-eui-button;0.sc-eui-button,500.sc-eui-button;0.sc-eui-button,700.sc-eui-button;0.sc-eui-button,900.sc-eui-button;1.sc-eui-button,100.sc-eui-button;1.sc-eui-button,300.sc-eui-button;1.sc-eui-button,400.sc-eui-button;1.sc-eui-button,500.sc-eui-button;1.sc-eui-button,700.sc-eui-button;1.sc-eui-button,900&display=swap").sc-eui-button; .sc-eui-button-h{height:fit-content}.sc-eui-button-h button.sc-eui-button{background:none;border:none;border-radius:0.4rem;cursor:pointer;padding:0.4rem 0.7rem;font-family:"Fira Sans", Montserrat, Nunito, Roboto, sans-serif;font-size:0.9rem}.sc-eui-button-h button.sc-eui-button:hover{opacity:0.7}.sc-eui-button-h button.variant-text.sc-eui-button{background:none;border:none}.sc-eui-button-h button.variant-text.sc-eui-button:hover{background:#f2f2f2}.sc-eui-button-h button.variant-outlined.sc-eui-button{background:none;border:solid 2px}.sc-eui-button-h button.variant-outlined.sc-eui-button:hover{background:black;color:white}.sc-eui-button-h button.variant-black.sc-eui-button{background:black;color:white}.sc-eui-button-h button.variant-black.sc-eui-button:hover{background:none;border:solid 2px}.sc-eui-button-h button.variant-primary.sc-eui-button{background:#2a4fa3;color:white}.sc-eui-button-h button.variant-secondary.sc-eui-button{background:#a82d75;color:white}.sc-eui-button-h button.variant-success.sc-eui-button{background:#37ba07;color:white}.sc-eui-button-h button.variant-info.sc-eui-button{background:#49c9e3}.sc-eui-button-h button.variant-warning.sc-eui-button{background:#f5bf42}.sc-eui-button-h button.variant-error.sc-eui-button{background:#bf3e1b;color:white}.sc-eui-button-h button.variant-fatal.sc-eui-button{background:#e34949;color:white}.sc-eui-button-h button.fullWidth.sc-eui-button{width:100%}`;

var EUIButton = /*@__PURE__*/proxyCustomElement(/*#__PURE__*/function (_HTMLElement) {
  function EUIButton(registerHost) {
    var _this;
    _classCallCheck(this, EUIButton);
    _this = _callSuper(this, EUIButton);
    if (registerHost !== false) {
      _this.__registerHost();
    }
    _this.color = 'lightgray';
    return _this;
  }
  _inherits(EUIButton, _HTMLElement);
  return _createClass(EUIButton, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var className = this.classes && Array.isArray(this.classes) ? this.classes.join(' ') : '';
      var variant = this.variant,
        padding = this.padding,
        _this$color = this.color,
        color = _this$color === void 0 ? 'none' : _this$color,
        fontColor = this.fontColor;
      return h(Host, {
        key: '57ad3caf1331d6dd51384e4bf01b33d652616bf8'
      }, h("style", {
        key: '516d18987d7dfdd092bad065e9eca397787cd67b'
      }, "\n            ".concat(padding && (_typeof(padding === 'number') ? "".concat(padding, "px;") : "".concat(padding, ";")) || '', "\n            ").concat(color ? "background: ".concat(color, ";") : '', "\n            ").concat(fontColor ? "color: ".concat(fontColor, ";") : '', "\n          ")), h("button", {
        key: 'ac042902e4cf7d4e6977c04f1b575ee1c296bc2d',
        type: this.type,
        onClick: function onClick(event) {
          return _this2.onClick(event);
        },
        "class": "".concat(className, " ").concat(variant && "variant-".concat(variant), " ").concat(this.fullwidth && 'fullWidth')
      }, this.icon && this.icon, this.text));
    }
  }], [{
    key: "style",
    get: function get() {
      return euiButtonCss();
    }
  }]);
}(HTMLElement), [258, "eui-button", {
  "variant": [8],
  "padding": [8],
  "type": [8],
  "color": [1],
  "text": [8],
  "icon": [8],
  "fontColor": [8, "font-color"],
  "onClick": [8, "on-click"],
  "styles": [8],
  "classes": [8],
  "fullwidth": [8]
}]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  var components = ["eui-button"];
  components.forEach(function (tagName) {
    switch (tagName) {
      case "eui-button":
        if (!customElements.get(transformTag(tagName))) {
          customElements.define(transformTag(tagName), EUIButton);
        }
        break;
    }
  });
}

const EuiButton = EUIButton;
const defineCustomElement = defineCustomElement$1;

export { EuiButton, defineCustomElement };
//# sourceMappingURL=eui-button.js.map

//# sourceMappingURL=eui-button.js.map