import { defineCustomElement } from '../../utils/elements';

class EUIButton extends HTMLElement {
  static get observedAttributes() {
    return ['variant', 'padding', 'type', 'color', 'font-color', 'fullwidth'];
  }

  constructor() {
    super();
    this._button = document.createElement('button');
    this._iconWrapper = document.createElement('span');
    this._labelWrapper = document.createElement('span');
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
    this._iconWrapper.className = 'eui-button__icon';
    this._labelWrapper.className = 'eui-button__label';

    this._button.append(this._iconWrapper, this._labelWrapper);
    this.appendChild(this._button);
  }

  _collectProjectedNodes() {
    const children = Array.from(this.childNodes).filter((node) => {
      return node !== this._button;
    });

    const iconNodes = [];
    const labelNodes = [];

    for (const node of children) {
      if (
        node.nodeType === Node.ELEMENT_NODE &&
        node.getAttribute('slot') === 'icon'
      ) {
        iconNodes.push(node);
      } else {
        labelNodes.push(node);
      }
    }

    return { iconNodes, labelNodes };
  }

  _applyAttributes() {
    const variant = this.getAttribute('variant');
    const type = this.getAttribute('type') || 'button';
    const color = this.getAttribute('color') || 'lightgray';
    const fontColor = this.getAttribute('font-color');
    const padding = this.getAttribute('padding');
    const fullwidth = this.hasAttribute('fullwidth');
    const label = this.getAttribute('label') || this.getAttribute('text');

    this._button.type = type;
    this._button.className = [
      'eui-button__control',
      variant ? `variant-${variant}` : '',
      fullwidth ? 'fullWidth' : '',
    ]
      .filter(Boolean)
      .join(' ');

    this._button.style.background = color;
    this._button.style.color = fontColor || '';
    this._button.style.padding = padding
      ? /^\d+$/.test(padding)
        ? `${padding}px`
        : padding
      : '';
    this._button.style.width = fullwidth ? '100%' : '';

    this._labelWrapper.innerText = label;

    // this._button.innerText = '';
  }

  _projectContent() {
    const { iconNodes, labelNodes } = this._collectProjectedNodes();

    this._iconWrapper.replaceChildren();
    this._labelWrapper.replaceChildren();

    if (iconNodes.length > 0) {
      this._iconWrapper.append(...iconNodes);
      this._iconWrapper.hidden = false;
    } else {
      this._iconWrapper.hidden = true;
    }

    if (labelNodes.length > 0) {
      this._labelWrapper.append(...labelNodes);
    }
  }

  _bindEvents() {
    this._button.onclick = (event) => {
      this.dispatchEvent(
        new CustomEvent('eui-click', {
          detail: { originalEvent: event },
          bubbles: true,
          composed: true,
        })
      );
    };
  }

  render() {
    this._projectContent();
    this._applyAttributes();
    this._bindEvents();
  }
}

defineCustomElement('eui-button', EUIButton);
