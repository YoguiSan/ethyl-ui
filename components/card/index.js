import { createElement } from '../../utils/elements';

class EUICard extends HTMLElement {
  static get observedAttributes() {
    return ['title', 'icon-bg-color', 'variant'];
  }

  constructor() {
    super();
    this._header = document.createElement('div');
    this._icon = document.createElement('div');
    this._title = document.createElement('p');
    this._body = document.createElement('div');
    this._initialized = false;
    this._sourceNodes = [];
  }

  connectedCallback() {
    if (!this._initialized) {
      this._captureSourceNodes();
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

  _captureSourceNodes() {
    this._sourceNodes = Array.from(this.childNodes);
  }

  _setupStructure() {
    this._header.className = 'eui-card-header';
    this._icon.className = 'eui-card-icon';
    this._title.className = 'eui-card-title';
    this._body.className = 'eui-card-body';

    this._header.append(this._icon, this._title);

    this.replaceChildren(this._header, this._body);
  }

  _collectProjectedNodes() {
    const iconNodes = [];
    const bodyNodes = [];

    for (const node of this._sourceNodes) {
      if (
        node.nodeType === Node.TEXT_NODE &&
        !node.textContent.trim()
      ) {
        continue;
      }

      if (node.nodeType === Node.ELEMENT_NODE) {
        const slotName = node.getAttribute('slot');

        if (slotName === 'icon') {
          iconNodes.push(node);
          continue;
        }

        if (slotName === 'body') {
          bodyNodes.push(node);
          continue;
        }
      }

      bodyNodes.push(node);
    }

    return { iconNodes, bodyNodes };
  }

  _projectContent() {
    const { iconNodes, bodyNodes } = this._collectProjectedNodes();

    this._icon.replaceChildren(...iconNodes);
    this._body.replaceChildren(...bodyNodes);
  }

  _applyAttributes() {
    const title = this.getAttribute('title') || '';
    const iconBgColor = this.getAttribute('icon-bg-color') || '';
    const variant = this.getAttribute('variant') || 'regular';

    const knownVariants = ['regular', 'warning', 'success', 'error', 'info'];
    knownVariants.forEach((name) => this.classList.remove(name));
    this.classList.add(variant);

    this._title.textContent = title;
    this._title.hidden = !title;

    this._icon.style.backgroundColor = iconBgColor;
    this._icon.hidden = this._icon.childNodes.length === 0;

    const hasHeader = Boolean(title) || this._icon.childNodes.length > 0;
    this._header.hidden = !hasHeader;
  }

  render() {
    this._projectContent();
    this._applyAttributes();
  }
}

createElement('eui-card', EUICard);