import {
  defineCustomElement,
  initializeAndRender,
  renderIfConnected
} from '../../utils/elements';
import './_hero-banner.scss';

class EUIHeroBanner extends HTMLElement {
  static get observedAttributes() {
    return ['background-image', 'eyebrow', 'title', 'subtitle', 'cta-text', 'cta-action'];
  }

  constructor() {
    super();

    this._banner = document.createElement('section');
    this._content = document.createElement('div');
    this._eyebrow = document.createElement('p');
    this._title = document.createElement('h1');
    this._subtitle = document.createElement('p');
    this._ctaWrapper = document.createElement('div');
    this._ctaButton = document.createElement('eui-button');
    this._cta = undefined;
    this._initialized = false;
  }

  connectedCallback() {
    initializeAndRender(this, () => {
      this._setupStructure();
      this._bindEvents();
    });
  }

  attributeChangedCallback() {
    renderIfConnected(this);
  }

  get cta() {
    return this._getCta();
  }

  set cta(value) {
    if (
      value !== undefined &&
      value !== null &&
      (typeof value !== 'object' ||
        typeof value.text !== 'string' ||
        (typeof value.action !== 'string' &&
          typeof value.action !== 'function'))
    ) {
      throw new TypeError('cta must have a text string and a string or function action');
    }

    this._cta = value ?? undefined;
    this.render();
  }

  _setupStructure() {
    this._banner.className = 'eui-hero-banner';
    this._content.className = 'eui-hero-banner__content';
    this._eyebrow.className = 'eui-hero-banner__eyebrow';
    this._title.className = 'eui-hero-banner__title';
    this._subtitle.className = 'eui-hero-banner__subtitle';
    this._ctaWrapper.className = 'eui-hero-banner__cta';
    this._ctaButton.className = 'eui-hero-banner__cta-control';

    this._content.append(
      this._eyebrow,
      this._title,
      this._subtitle,
      this._ctaWrapper
    );
    this._banner.appendChild(this._content);
    this.appendChild(this._banner);
  }

  _bindEvents() {
    this._ctaButton.addEventListener('eui-click', () => {
      const action = this._getCta()?.action;

      if (typeof action === 'function') {
        action();
      } else if (typeof action === 'string' && this._isSafeUrl(action)) {
        window.location.href = action;
      }
    });
  }

  _getCta() {
    if (this._cta !== undefined) {
      return this._cta;
    }

    const text = this.getAttribute('cta-text');
    const action = this.getAttribute('cta-action');

    if (text === null || action === null) {
      return undefined;
    }

    return { text, action };
  }

  _isSafeUrl(value) {
    if (!value.trim()) {
      return false;
    }

    try {
      const url = new URL(value, document.baseURI);
      return ['http:', 'https:', 'mailto:', 'tel:'].includes(url.protocol);
    } catch (error) {
      if (error instanceof TypeError) {
        return false;
      }

      throw error;
    }
  }

  _renderCta() {
    const cta = this._getCta();
    this._ctaWrapper.replaceChildren();

    if (!cta?.text || !cta.action) {
      return;
    }

    if (typeof cta.action === 'string' && !this._isSafeUrl(cta.action)) {
      this.dispatchEvent(
        new CustomEvent('eui-hero-banner-error', {
          detail: { message: 'CTA action must be a safe navigable URL or a function.' },
          bubbles: true,
          composed: true
        })
      );
      return;
    }

    this._ctaButton.setAttribute('label', cta.text);
    this._ctaWrapper.appendChild(this._ctaButton);
  }

  render() {
    if (!this._initialized) {
      return;
    }

    const backgroundImage = this.getAttribute('background-image') || '';
    const eyebrow = this.getAttribute('eyebrow') || '';
    const title = this.getAttribute('title') || '';
    const subtitle = this.getAttribute('subtitle') || '';

    this._banner.style.setProperty(
      '--eui-hero-banner-image',
      backgroundImage ? `url(${JSON.stringify(backgroundImage)})` : 'none'
    );
    this._eyebrow.textContent = eyebrow;
    this._eyebrow.hidden = !eyebrow;
    this._title.textContent = title;
    this._subtitle.textContent = subtitle;
    this._subtitle.hidden = !subtitle;

    this._renderCta();
  }
}

defineCustomElement('eui-hero-banner', EUIHeroBanner);
