import { checkDefined, defineCustomComponent } from '../../utils/component';

import './index.scss';

class ButtonComponent extends HTMLElement {
  static getObservedAttributes() {
    return [
      'text',
      'icon',
      'disabled',
      'onclick',
      'type',
      'classes',
      'fullWidth',
    ];
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
    if (this.rendered) {
      this.innerHTML = '';
    }

    const text = checkDefined(this.getAttribute('text')) && this.getAttribute('text');
    const icon = checkDefined(this.getAttribute('icon')) && this.getAttribute('icon');
    const disabled = checkDefined(this.getAttribute('disabled')) && this.getAttribute('disabled');
    const onclick = checkDefined(this.getAttribute('onclick')) && this.getAttribute('onclick');
    const variant = checkDefined(this.getAttribute('variant')) ? this.getAttribute('variant') : 'primary';
    const classes = checkDefined(this.getAttribute('classes')) && this.getAttribute('classes');
    const fullWidth = checkDefined(this.getAttribute('fullWidth')) && this.getAttribute('fullWidth');

    if (typeof (window) !== 'undefined') {
      const button = document.createElement('button');

      button.innerHTML = `${text || ''} ${icon || ''}`;

      button.classList.add(variant);

      if (classes) {
        button.classList.add(classes);
      }

      if (fullWidth) {
        button.classList.add('fullWidth');
      }

      if (onclick) {
        button.onclick = onclick;
      }

      if (disabled) {
        button.disabled = true;
      }

      this.appendChild(button);
    }
  }
}

defineCustomComponent('eui-button', ButtonComponent);
