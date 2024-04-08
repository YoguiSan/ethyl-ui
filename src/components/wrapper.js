class ComponentWrapper extends HTMLElement {
  constructor() {
    super();
    this.rendered = true;
  }

  connectedCallback() {
    if (!this.rendered) {
      this.render();
      this.rendered = true;
    }
  }

  attributeChangedCallback() {
    this.render();
  }
}

export default ComponentWrapper;
