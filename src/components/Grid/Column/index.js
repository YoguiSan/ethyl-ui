import ComponentWrapper from '../../wrapper';
import { checkDefined, defineCustomComponent } from '../../../utils/component';

import './index.scss';

class ColumnComponent extends ComponentWrapper {
  constructor() {
    super();
    this.rendered = false;
  }

  render() {
    const rows = this.getAttribute('rows');
    const columns = this.getAttribute('columns');
    const startRow = this.getAttribute('startRow');
    const endRow = this.getAttribute('endRow');
    const startColumn = this.getAttribute('startColumn');
    const endColumn = this.getAttribute('endColumn');

    if (checkDefined(columns) && typeof (columns) === 'number') {
      this.style.gridTemplateColumns = columns;
    }

    if (checkDefined(rows) && typeof (rows) === 'number') {
      this.style.gridRow = rows;
    }
  }

  static getObservedAttributes() {
    return [
      'rows',
      'columns',
      'startRow',
      'endRow',
      'startColumn',
      'endColumn',
    ];
  }
}

defineCustomComponent('column-component', ColumnComponent);
