export const defineCustomElement = (name, element) => {
  if (!window.customElements.get(name)) {
    window.customElements.define(name, element);;
  }
};

// Aliases
export const applyStyles = appendStyle;
export const createElement = defineCustomElement;
