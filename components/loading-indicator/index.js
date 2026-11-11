import {
  defineCustomElement,
  initializeAndRender,
  renderIfConnected
} from '../../utils/elements';
import './_loading-indicator.scss';

const DEFAULT_IMAGE = new URL('./assets/img/loading-indicator.svg', import.meta.url).href;
const DEFAULT_WIDTH = 48;
const ANIMATIONS = ['none', 'rotating', 'blinking'];

class EUILoadingIndicator extends HTMLElement {
  static get observedAttributes() {
    return ['animation', 'image', 'width'];
  }

  constructor() {
    super();
    this._status = document.createElement('span');
    this._image = document.createElement('img');
    this._initialized = false;
  }

  connectedCallback() {
    initializeAndRender(this, () => {
      this._setupStructure();
    });
  }

  attributeChangedCallback() {
    renderIfConnected(this);
  }

  _setupStructure() {
    this._status.className = 'eui-loading-indicator';
    this._status.setAttribute('role', 'status');
    this._status.setAttribute('aria-label', 'Loading');
    this._image.className = 'eui-loading-indicator__image';
    this._image.alt = '';

    this._status.appendChild(this._image);
    this.appendChild(this._status);
  }

  _applyAttributes() {
    const requestedAnimation = this.getAttribute('animation') || 'rotating';
    const animation = ANIMATIONS.includes(requestedAnimation)
      ? requestedAnimation
      : 'rotating';
    const image = this.getAttribute('image') || DEFAULT_IMAGE;
    const requestedWidth = Number(this.getAttribute('width'));
    const width = Number.isFinite(requestedWidth) && requestedWidth > 0
      ? requestedWidth
      : DEFAULT_WIDTH;

    this._status.className = `eui-loading-indicator animation-${animation}`;
    this._image.src = image;
    this._image.style.width = `${width}px`;
  }

  render() {
    this._applyAttributes();
  }
}

defineCustomElement('eui-loading-indicator', EUILoadingIndicator);
