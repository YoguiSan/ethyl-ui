import { checkDefined, defineCustomComponent } from '../../utils/component';

import './Row';
import './Column';

import './index.scss';

class GridComponent extends HTMLElement {
  static getObservedAttributes() {
    return ['columns', 'gap', 'classes'];
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
    const gap = this.getAttribute('gap');
    const classes = this.getAttribute('classes');

    if (checkDefined(columns) && !Number.isNaN(columns)) {
      this.style.gridTemplateColumns = columns;
    }

    if (checkDefined(gap)) {
      this.style.gap = gap;
      this.style.marginBottom = gap;
    }

    if (checkDefined(classes)) {
      this.classList.add(classes);
    }
  }
}

defineCustomComponent('eui-grid', GridComponent);
