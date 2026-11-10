export interface EUIHeroBannerCTA {
  text: string;
  action: string | (() => void);
}

export interface EUIHeroBannerElement extends HTMLElement {
  cta: EUIHeroBannerCTA | undefined;
}

export namespace JSX {
  export interface ElementMap {
    'eui-button': HTMLElement;
    'eui-card': HTMLElement;
    'eui-figure': HTMLElement;
    'eui-grid': HTMLElement;
    'eui-hero-banner': EUIHeroBannerElement;
    'eui-input': HTMLElement;
    'eui-modal': HTMLElement;
  }

  export interface IntrinsicElements {
    'eui-button': {
      variant?: string;
      padding?: string;
      type?: string;
      color?: string;
      'font-color'?: string;
      fullwidth?: boolean;
      action?: string;
      label?: string;
      text?: string;
      children?: unknown;
    };
    'eui-card': {
      title?: string;
      'icon-bg-color'?: string;
      variant?: string;
      children?: unknown;
    };
    'eui-figure': {
      src?: string;
      alt?: string;
      caption?: string;
      url?: string;
      children?: unknown;
    };
    'eui-grid': {
      columns?: string | number;
      gap?: string | number;
      container?: boolean;
      extrasmall?: string | number;
      extraSmall?: string | number;
      small?: string | number;
      medium?: string | number;
      large?: string | number;
      extralarge?: string | number;
      extraLarge?: string | number;
      narrow?: boolean;
      condensed?: boolean;
      'flex-direction'?: string;
      'justify-content'?: string;
      classes?: string;
      children?: unknown;
    };
    'eui-hero-banner': {
      'background-image'?: string;
      eyebrow?: string;
      title?: string;
      subtitle?: string;
      'cta-text'?: string;
      'cta-action'?: string;
      children?: unknown;
    };
    'eui-input': {
      type?: string;
      value?: string | number;
      placeholder?: string;
      name?: string;
      disabled?: boolean;
      readonly?: boolean;
      required?: boolean;
      variant?: string;
      padding?: string;
      color?: string;
      'font-color'?: string;
      fullwidth?: boolean;
      children?: unknown;
    };
    'eui-modal': {
      title?: string;
      open?: boolean;
      children?: unknown;
    };
  }
}
