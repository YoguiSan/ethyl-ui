import { Component, Element, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'eui-grid',
  styleUrl: 'eui-grid.scss',
  // shadow: true,
  scoped: true,
})
export class EUIGrid {
  @Element() element: HTMLElement;
  @Prop() columns?: number;
  @Prop() gap?: number;
  @Prop() container?: boolean;
  @Prop() extrasmall?: number;
  @Prop() small?: number;
  @Prop() medium?: number;
  @Prop() large?: number;
  @Prop() extralarge?: number;

  render() {
    if (this.container) {
      this.element.style.setProperty('--eui-grid-template-columns', `${this.columns}`);
    }

    if (this.container && this.gap) {
      this.element.style.setProperty('--eui-grid-template-gap', `${this.gap}`);
    }

    if (this.extrasmall) {
      this.element.style.setProperty('--eui-grid-columns-extraSmall', `${this.extrasmall}`);
    }

    if (this.small) {
      this.element.style.setProperty('--eui-grid-columns-small', `${this.small}`);
    }

    if (this.medium) {
      this.element.style.setProperty('--eui-grid-columns-medium', `${this.medium}`);
    }

    if (this.large) {
      this.element.style.setProperty('--eui-grid-columns-large', `${this.large}`);
    }

    if (this.extralarge) {
      this.element.style.setProperty('--eui-grid-columns-extraLarge', `${this.extralarge}`);
    }

    return (
      <Host class={this.container && 'eui-grid-container'}>
        <slot />
      </Host>
    );
  }
}
