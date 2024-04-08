import { defineCustomComponent } from '../../utils/component';
import './index.scss';

class MenuDropdown extends HTMLElement {
  static getObservedAttributes() {
    return [''];
  }

  constructor() {
    super();
    this.rendered = false;
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

  render() {
    
  }
}

defineCustomComponent('eui-menu-dropdown', MenuDropdown);
