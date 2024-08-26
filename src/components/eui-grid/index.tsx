import { Component, Element, Host, Prop, h } from '@stencil/core';
import EUIGridRowColumnType from './index.d';

@Component({
  tag: 'eui-grid',
  styleUrl: 'eui-grid.scss',
  // shadow: true,
  scoped: true,
})
export class EUIGrid implements EUIGridRowColumnType {
  @Element() element: HTMLElement;
  @Prop() columns;
  @Prop() gap;
  @Prop() container;
  @Prop() extrasmall;
  @Prop() small;
  @Prop() medium;
  @Prop() large;
  @Prop() extralarge;
  @Prop() narrow;
  @Prop() condensed;
  @Prop() classes;
  @Prop() flexDirection;
  @Prop() justifyContent;

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
      <Host class={`
      ${
        this.container && 'eui-grid-container'
      } ${
        this.condensed && 'condensed'
      } ${
        this.narrow && 'narrow'
      } ${
        (this.classes
          && Array.isArray(this.classes)
            ? this.classes.join(' ')
            : this.classes)
      }`}>
        <slot />
      </Host>
    );
  }
}
