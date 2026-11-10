export const defineCustomElement = (name, element) => {
  if (!window.customElements.get(name)) {
    window.customElements.define(name, element);
  }
};

export const initializeAndRender = (element, setup) => {
  if (!element._initialized) {
    setup();
    element._initialized = true;
  }

  element.render();
};

export const renderIfConnected = (element) => {
  if (element.isConnected) {
    element.render();
  }
};

// Aliases
export const createElement = defineCustomElement;
