export const defineCustomElement = (name, element) => {
  if (!window.customElements.get(name)) {
    window.customElements.define(name, element);;
  }
};

// Aliases
export const createElement = defineCustomElement;
