import { defineCustomElement } from '../../utils/elements';

class EUIInput extends HTMLElement {
  static get observedAttributes() {
    return [
      'type',
      'value',
      'placeholder',
      'name',
      'disabled',
      'readonly',
      'required',
      'variant',
      'padding',
      'color',
      'font-color',
      'fullwidth',
    ];
  }

  constructor() {
    super();

    this._wrapper = document.createElement('div');
    this._iconWrapper = document.createElement('span');
    this._input = document.createElement('input');
    this._labelWrapper = document.createElement('label');

    this._initialized = false;
  }

  connectedCallback() {
    if (!this._initialized) {
      this._setupStructure();
      this._bindEvents();
      this._initialized = true;
    }

    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'value' && this._input && this._input.value !== (newValue || '')) {
      this._input.value = newValue || '';
    }

    if (this.isConnected) {
      this.render();
    }
  }

  get value() {
    return this._input?.value ?? this.getAttribute('value') ?? '';
  }

  set value(nextValue) {
    const normalized = nextValue ?? '';
    this.setAttribute('value', normalized);
  }

  _setupStructure() {
    this._wrapper.className = 'eui-input__wrapper';
    this._iconWrapper.className = 'eui-input__icon';
    this._input.className = 'eui-input__control';
    this._labelWrapper.className = 'eui-input__label';

    this._wrapper.append(this._labelWrapper);
    this._wrapper.append(this._iconWrapper, this._input);
    this.appendChild(this._wrapper);
  }

  _bindEvents() {
    this._input.addEventListener('input', (event) => {
      const nextValue = this._input.value;

      if (this.getAttribute('value') !== nextValue) {
        this.setAttribute('value', nextValue);
      }

      this.dispatchEvent(new CustomEvent('eui-input', {
        detail: {
          value: nextValue,
          originalEvent: event
        },
        bubbles: true,
        composed: true
      }));
    });

    this._input.addEventListener('change', (event) => {
      this.dispatchEvent(new CustomEvent('eui-change', {
        detail: {
          value: this._input.value,
          originalEvent: event
        },
        bubbles: true,
        composed: true
      }));
    });
  }

  _collectProjectedNodes() {
    const children = Array.from(this.childNodes).filter((node) => {
      return node !== this._wrapper;
    });

    const iconNodes = [];

    for (const node of children) {
      if (
        node.nodeType === Node.ELEMENT_NODE &&
        node.getAttribute('slot') === 'icon'
      ) {
        iconNodes.push(node);
      }
    }

    return { iconNodes };
  }

  _projectContent() {
    const { iconNodes } = this._collectProjectedNodes();

    this._iconWrapper.replaceChildren();

    if (iconNodes.length > 0) {
      this._iconWrapper.append(...iconNodes);
      this._iconWrapper.hidden = false;
    } else {
      this._iconWrapper.hidden = true;
    }
  }

  _applyAttributes() {
    const type = this.getAttribute('type') || 'text';
    const value = this.getAttribute('value') || '';
    const placeholder = this.getAttribute('placeholder') || '';
    const name = this.getAttribute('name') || '';
    const variant = this.getAttribute('variant');
    const color = this.getAttribute('color') || '';
    const fontColor = this.getAttribute('font-color') || '';
    const padding = this.getAttribute('padding');
    const label = this.getAttribute('label');
    const fullwidth = this.hasAttribute('fullwidth');

    this._input.type = type;
    this._input.value = value;
    this._input.placeholder = placeholder;
    this._input.name = name;
    this._input.disabled = this.hasAttribute('disabled');
    this._input.readOnly = this.hasAttribute('readonly');
    this._input.required = this.hasAttribute('required');

    this._labelWrapper.innerText = label;

    this._input.className = [
      'eui-input__control',
      variant ? `variant-${variant}` : '',
      fullwidth ? 'fullWidth' : ''
    ].filter(Boolean).join(' ');

    this._input.style.background = color;
    this._input.style.color = fontColor;
    this._input.style.padding = padding
      ? (/^\d+$/.test(padding) ? `${padding}px` : padding)
      : '';

    this._wrapper.style.width = fullwidth ? '100%' : '';
  }

  render() {
    this._projectContent();
    this._applyAttributes();
  }
}

defineCustomElement('eui-input', EUIInput);