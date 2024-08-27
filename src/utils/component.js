export const defineCustomComponent = (name, component) => {
  if (typeof (window) !== 'undefined') {
    if (!window.customElements.get(name)) {
      try {
        window.customElements.define(name, component);
      } catch(e) {
        console.error('Error defining custom component: ', e);
      }
    } else {
      console.warn('Attempting to define already defined component: ', name);
    }
  }
};

export const checkDefined = (entry) => entry
  && entry !== null
  && entry !== undefined
  && entry !== 'null'
  && entry !== 'undefined';
