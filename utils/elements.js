export const appendStyle = async (ref, filename = 'index.css') => {
  try {
      const cssUrl = new URL(filename, import.meta.url).href;
      const resp = await fetch(cssUrl);
      const css = await resp.text();
      const style = document.createElement('style');
      style.textContent = css;
      ref.appendChild(style);
    } catch (e) {
      console.warn('Could not load component styles', e);
    }
}

export const defineCustomElement = (name, element) => {
  if (!window.customElements.get(name)) {
    window.customElements.define(name, element);;
  }
};

export const createElement = defineCustomElement;
