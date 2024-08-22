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
  @Prop() container?: boolean;
  @Prop() extraSmall?: number;
  @Prop() small?: number;
  @Prop() medium?: number;
  @Prop() large?: number;
  @Prop() extraLarge?: number;

  render() {
    if (this.container) {
      this.element.style.setProperty('--eui-grid-template-columns', `${this.columns}`);
    }

    // this.element.style.setProperty('--eui-grid-columns', `${this.columns}`);

    return (
      <Host class={this.container && 'eui-grid-container'}>
        <slot />
      </Host>
    );
  }
}
