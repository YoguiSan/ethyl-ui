import ComponentWrapper from '../wrapper';
import { checkDefined, defineCustomComponent } from '../../utils/component';

import './index.scss';

class GridComponent extends ComponentWrapper {
  constructor() {
    super();
    this.rendered = false;
  }

  render() {
    const columns = this.getAttribute('columns');

    if (checkDefined(columns) && typeof (columns) === 'number') {
      this.style.gridTemplateColumns = columns;
    }
  }

  static getObservedAttributes() {
    return ['columns'];
  }
}

defineCustomComponent('grid-component', GridComponent);
