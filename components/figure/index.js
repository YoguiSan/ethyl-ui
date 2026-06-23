import { defineCustomElement } from '../../utils/elements';

class EUIFigure extends HTMLElement {
  static get observedAttributes() {
    return ['src', 'alt', 'caption', 'url'];
  }

  constructor() {
    super();
    this._figure = document.createElement('figure');
    this._link = document.createElement('a');
    this._img = document.createElement('img');
    this._caption = document.createElement('figcaption');
    this._initialized = false;
  }

  connectedCallback() {
    if (!this._initialized) {
      this._setupStructure();
      this._initialized = true;
    }

    this.render();
  }

  attributeChangedCallback() {
    if (this.isConnected) {
      this.render();
    }
  }

  _setupStructure() {
    this._figure.appendChild(this._img);
    this.replaceChildren(this._figure);
  }

  _applyAttributes() {
    const src = this.getAttribute('src') || '';
    const alt = this.getAttribute('alt') || '';
    const caption = this.getAttribute('caption') || '';
    const url = this.getAttribute('url') || '';

    this._img.src = src;
    this._img.alt = alt;

    if (caption) {
      this._caption.textContent = caption;

      if (!this._caption.parentNode) {
        this._figure.appendChild(this._caption);
      }
    } else if (this._caption.parentNode) {
      this._caption.remove();
    }

    if (url) {
      this._link.href = url;

      if (this._img.parentNode !== this._link) {
        this._figure.prepend(this._link);
        this._link.appendChild(this._img);
      }
    } else {
      if (this._img.parentNode !== this._figure) {
        this._figure.prepend(this._img);
      }

      if (this._link.parentNode) {
        this._link.remove();
      }
    }
  }

  render() {
    this._applyAttributes();
  }
}

defineCustomElement('eui-figure', EUIFigure);