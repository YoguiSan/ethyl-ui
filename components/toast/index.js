import {
  defineCustomElement,
  initializeAndRender,
  renderIfConnected
} from '../../utils/elements';
import './_toast.scss';

const TYPES = ['success', 'warning', 'info', 'error', 'critical'];
const DEFAULT_TIMEOUT = 5000;
const COLOR_ATTRIBUTES = {
  success: 'success-color',
  warning: 'warning-color',
  info: 'info-color',
  error: 'error-color',
  critical: 'critical-color'
};

class EUiToast extends HTMLElement {
  static get observedAttributes() {
    return ['text', 'type', 'timeout', ...Object.values(COLOR_ATTRIBUTES)];
  }

  constructor() {
    super();
    this._toast = document.createElement('div');
    this._message = document.createElement('span');
    this._closeButton = document.createElement('button');
    this._timeoutId = undefined;
    this._closed = false;
    this._initialized = false;
  }

  connectedCallback() {
    initializeAndRender(this, () => {
      this._setupStructure();
    });
    this._scheduleClose();
  }

  disconnectedCallback() {
    this._clearTimeout();
  }

  attributeChangedCallback(name) {
    renderIfConnected(this);

    if (name === 'type' || name === 'timeout') {
      this._scheduleClose();
    }
  }

  closeToast() {
    if (this._closed) {
      return;
    }

    this._closed = true;
    this._clearTimeout();
    this.hidden = true;
    this.setAttribute('aria-hidden', 'true');
    this.dispatchEvent(
      new CustomEvent('eui-toast-close', {
        bubbles: true,
        composed: true
      })
    );
  }

  _setupStructure() {
    this._toast.className = 'eui-toast';
    this._message.className = 'eui-toast__message';
    this._closeButton.className = 'eui-toast__close';
    this._closeButton.type = 'button';
    this._closeButton.setAttribute('aria-label', 'Close notification');
    this._closeButton.textContent = '×';
    this._closeButton.addEventListener('click', () => this.closeToast());

    this._toast.append(this._message, this._closeButton);
    this.appendChild(this._toast);
  }

  _getType() {
    const type = this.getAttribute('type') || 'info';
    return TYPES.includes(type) ? type : 'info';
  }

  _applyAttributes() {
    const type = this._getType();
    const text = this.getAttribute('text') || '';

    this._toast.dataset.type = type;
    this._message.textContent = text;
    this._toast.setAttribute(
      'role',
      type === 'error' || type === 'critical' ? 'alert' : 'status'
    );
    this._toast.setAttribute(
      'aria-live',
      type === 'error' || type === 'critical' ? 'assertive' : 'polite'
    );
    this.setAttribute('aria-hidden', this._closed ? 'true' : 'false');

    for (const [colorType, attribute] of Object.entries(COLOR_ATTRIBUTES)) {
      const color = this.getAttribute(attribute);
      const variable = `--eui-toast-${colorType}-attribute-color`;

      if (color) {
        this.style.setProperty(variable, color);
      } else {
        this.style.removeProperty(variable);
      }
    }
  }

  _clearTimeout() {
    if (this._timeoutId !== undefined) {
      clearTimeout(this._timeoutId);
      this._timeoutId = undefined;
    }
  }

  _scheduleClose() {
    this._clearTimeout();

    if (!this.isConnected || this._closed || this._getType() === 'critical') {
      return;
    }

    const timeoutAttribute = this.getAttribute('timeout');
    const requestedTimeout = timeoutAttribute === null
      ? DEFAULT_TIMEOUT
      : Number(timeoutAttribute);
    const timeout = Number.isFinite(requestedTimeout) && requestedTimeout >= 0
      ? requestedTimeout
      : DEFAULT_TIMEOUT;

    this._timeoutId = setTimeout(() => this.closeToast(), timeout);
  }

  render() {
    if (!this._initialized) {
      return;
    }

    this._applyAttributes();
  }
}

defineCustomElement('eui-toast', EUiToast);
