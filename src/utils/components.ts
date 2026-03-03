import SetupDebug from './debug';
import { prefix } from './constants';

const Debug = SetupDebug('Components Utilities Module');

export const addPrefix = (name: string) => `${prefix}-${name}`;

export const defineCustomElement = (name: string, element, options = {}) => {
  const { legacyName }: { legacyName?: string } = options;

  const fullName = addPrefix(name);

  if (typeof (window) !== 'undefined') {
    if (!window.customElements.get(fullName)) {
      try {
        window.customElements.define(fullName, element);

        window.customElements.define(legacyName || `${name}-component`, class extends element {});

        Debug.Info(`Custom element ${fullName} defined successfully`);
      } catch (e) {
        Debug.Error('Error defining custom element', e);
      }
    } else {
      Debug.Warning(`Attempting to define already defined custom element: ${fullName}`);
    }
  }
};

export const checkDefined = (entry: unknown) => entry
  && entry !== null
  && entry !== undefined
  && entry !== 'null'
  && entry !== 'undefined';
