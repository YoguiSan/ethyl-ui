import { checkDefined, defineCustomComponent } from '../../utils/component';

import './Row';
import './Column';

import './index.scss';

class GridComponent extends HTMLElement {
  static getObservedAttributes() {
    return ['columns'];
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

    if (checkDefined(columns) && typeof (columns) === 'number') {
      this.style.gridTemplateColumns = columns;
    }
  }
}

defineCustomComponent('eui-grid', GridComponent);
