import { checkDefined, defineCustomComponent } from '../../../utils/component';

import './index.scss';

class ColumnComponent extends HTMLElement {
  static getObservedAttributes() {
    return [
      'columns',
      'startColumn',
      'endColumn',
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
    const columns = this.getAttribute('columns');
    const startColumn = this.getAttribute('startColumn');
    const endColumn = this.getAttribute('endColumn');

    console.log(columns)
    console.log(Number.isNaN(columns))

    if (checkDefined(columns) && !Number.isNaN(columns)) {
      this.style.gridColumn = `span ${columns}`;
    }
  }
}

defineCustomComponent('eui-column', ColumnComponent);
