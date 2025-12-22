import { Component, Element, Host, Prop, h } from '@stencil/core';
import { Breakpoints } from '../assets/json';
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
  @Prop() resizeHandler?: void;
  @Prop() rendered: boolean;

  handleResize() {
    const { innerWidth: width } = window;

    let columns = 0;

    if (width <= Breakpoints.extraSmall) {
      columns = this.extrasmall || 16;
    } else if (width <= Breakpoints.small) {
      columns = this.small
        || this.extrasmall
        || 16;
    } else if (width <= Breakpoints.medium) {
      columns = this.medium
        || this.small
        || this.extrasmall
        || 16;
    } else if (width <= Breakpoints.large) {
      columns = this.large
        || this.medium
        || this.small
        || this.extrasmall
        || 16;
    } else {
      columns = this.extralarge
        || this.large
        || this.medium
        || this.small
        || this.extrasmall
        || 16;
    }

    this.element.style.gridColumn = `span ${columns || 16}`;
  }

  render() {
    if (!this.rendered) {
      this.handleResize();
      window.addEventListener('resize', () => this.handleResize());
      this.rendered = true;
    }

    if (this.container) {
      this.element.style.gridTemplateColumns = `repeat(${this.columns || 16}, 1fr)`;

      if (this.gap) {
        this.element.style.gap = this.gap ? `${this.gap}px` : '2rem';
      }
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
