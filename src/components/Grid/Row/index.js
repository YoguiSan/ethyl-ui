import { checkDefined, defineCustomComponent } from '../../../utils/component';

import './index.scss';

class RowComponent extends HTMLElement {
  static getObservedAttributes() {
    return [
      'rows',
      'startRow',
      'endRow',
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
    const rows = this.getAttribute('rows');
    const startRow = this.getAttribute('startRow');
    const endRow = this.getAttribute('endRow');

    if (checkDefined(rows) && typeof (rows) === 'number') {
      this.style.gridRow = rows;
    }
  }
}

defineCustomComponent('eui-row', RowComponent);
