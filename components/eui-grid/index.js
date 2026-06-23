import { appendStyle, defineCustomElement } from "../../utils/elements";

class EUIGrid extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  async connectedCallback() {
    appendStyle(this);
  }

  render() {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
      <button part="btn" class="my-btn">Click me</button>
    `;
    return wrapper;
  }
}

defineCustomElement('eui-grid', EUIGrid);