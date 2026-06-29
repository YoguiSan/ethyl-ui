import { defineCustomElement } from '../../utils/elements';
import './_modal.scss';

class EUIModal extends HTMLElement {
  static get observedAttributes() {
    return ['title', 'open'];
  }

  constructor() {
    super();

    this._backdrop = document.createElement('div');
    this._content = document.createElement('div');
    this._closeButton = document.createElement('button');
    this._card = document.createElement('div');
    this._header = document.createElement('div');
    this._title = document.createElement('p');
    this._body = document.createElement('div');

    this._initialized = false;
    this._handleEscape = this._handleEscape.bind(this);
  }

  connectedCallback() {
    if (!this._initialized) {
      this._setupStructure();
      this._bindEvents();
      this._initialized = true;
    }

    this.render();
    document.addEventListener('keydown', this._handleEscape);
  }

  disconnectedCallback() {
    document.removeEventListener('keydown', this._handleEscape);
  }

  attributeChangedCallback() {
    if (this.isConnected) {
      this.render();
    }
  }

  get open() {
    return this.hasAttribute('open');
  }

  set open(value) {
    if (value || value === '') {
      this.setAttribute('open', '');
    } else {
      this.removeAttribute('open');
    }
  }

  openModal() {
    this.open = true;
  }

  closeModal() {
    this.open = false;
    this.dispatchEvent(
      new CustomEvent('eui-modal-close', {
        bubbles: true,
        composed: true
      })
    );
  }

  _setupStructure() {
    this._backdrop.className = 'eui-modal-backdrop';
    this._content.className = 'eui-modal-content';
    this._closeButton.className = 'eui-modal-close';
    this._card.className = 'eui-modal-card';
    this._header.className = 'eui-modal-header';
    this._title.className = 'eui-modal-title';
    this._body.className = 'eui-modal-body';

    this._closeButton.type = 'button';
    this._closeButton.setAttribute('aria-label', 'Close modal');
    this._closeButton.textContent = '×';

    this._header.append(this._title, this._closeButton);
    this._card.append(this._header, this._body);
    this._content.appendChild(this._card);
    this._backdrop.appendChild(this._content);

    this.appendChild(this._backdrop);
  }

  _bindEvents() {
    this._closeButton.addEventListener('click', () => this.closeModal());

    this._backdrop.addEventListener('click', (event) => {
      if (event.target === this._backdrop) {
        this.closeModal();
      }
    });
  }

  _handleEscape(event) {
    if (event.key === 'Escape' && this.open) {
      this.closeModal();
    }
  }

  _collectProjectedNodes() {
    const children = Array.from(this.childNodes).filter((node) => {
      return node !== this._backdrop;
    });

    const bodyNodes = [];

    for (const node of children) {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const slotName = node.getAttribute('slot');

        if (slotName === 'body') {
          bodyNodes.push(node);
          continue;
        }
      }

      bodyNodes.push(node);
    }

    return { bodyNodes };
  }

  _projectContent() {
    const { bodyNodes } = this._collectProjectedNodes();
    this._body.replaceChildren(...bodyNodes);
  }

  _applyAttributes() {
    const title = this.getAttribute('title') || '';
    const isOpen = this.open;

    this._title.textContent = title;
    this._header.hidden = !title && !this._closeButton;

    this.style.display = isOpen ? 'flex' : 'none';
    this.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
  }

  render() {
    this._projectContent();
    this._applyAttributes();
  }
}

defineCustomElement('eui-modal', EUIModal);