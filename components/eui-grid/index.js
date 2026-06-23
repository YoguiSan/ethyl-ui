import { createElement, applyStyles } from '../../utils/elements';

class EUIGrid extends HTMLElement {
  static get observedAttributes() {
    return [
      'columns',
      'gap',
      'container',
      'extrasmall',
      'small',
      'medium',
      'large',
      'extralarge',
      'narrow',
      'condensed',
      'flex-direction',
      'justify-content'
    ];
  }

  connectedCallback() {
    applyStyles(this);
    this.render();
  }

  attributeChangedCallback() {
    if (this.isConnected) {
      this.render();
    }
  }

  _setCssVariable(name, value) {
    if (value !== null && value !== '') {
      this.style.setProperty(name, value);
    } else {
      this.style.removeProperty(name);
    }
  }

  _toggleClass(className, enabled) {
    this.classList.toggle(className, enabled);
  }

  render() {
    const isContainer = this.hasAttribute('container');

    if (isContainer) {
      this._setCssVariable(
        '--eui-grid-template-columns',
        this.getAttribute('columns') || ''
      );

      this._setCssVariable(
        '--eui-grid-template-gap',
        this.getAttribute('gap') || ''
      );
    } else {
      this.style.removeProperty('--eui-grid-template-columns');
      this.style.removeProperty('--eui-grid-template-gap');
    }

    this._setCssVariable(
      '--eui-grid-columns-extraSmall',
      this.getAttribute('extrasmall') || ''
    );

    this._setCssVariable(
      '--eui-grid-columns-small',
      this.getAttribute('small') || ''
    );

    this._setCssVariable(
      '--eui-grid-columns-medium',
      this.getAttribute('medium') || ''
    );

    this._setCssVariable(
      '--eui-grid-columns-large',
      this.getAttribute('large') || ''
    );

    this._setCssVariable(
      '--eui-grid-columns-extraLarge',
      this.getAttribute('extralarge') || ''
    );

    this._setCssVariable(
      '--eui-grid-flex-direction',
      this.getAttribute('flex-direction') || ''
    );

    this._setCssVariable(
      '--eui-grid-justify-content',
      this.getAttribute('justify-content') || ''
    );

    this._toggleClass('eui-grid-container', isContainer);
    this._toggleClass('condensed', this.hasAttribute('condensed'));
    this._toggleClass('narrow', this.hasAttribute('narrow'));
  }
}

createElement('eui-grid', EUIGrid);
