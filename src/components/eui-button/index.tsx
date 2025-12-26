import { Component, Host, Prop, h } from '@stencil/core';

import type EUIButtonType from './index.d';

@Component({
  tag: 'eui-button',
  styleUrl: 'eui-button.scss',
  // shadow: true,
  scoped: true,
})
export class EUIButton implements EUIButtonType {
  @Prop() variant;
  @Prop() padding;
  @Prop() type;
  @Prop() color = 'lightgray';
  @Prop() text;
  @Prop() fontColor;
  @Prop() onClick;
  @Prop() styles;
  @Prop() classes;
  @Prop() fullwidth;

  render() {
    const className:string = this.classes && Array.isArray(this.classes) ? this.classes.join(' ') : '';    
  
    const {
      variant,
      padding,
      color = 'none',
      fontColor,
    } = this;

    const style: {
      background?: string,
      color?: string,
      padding?: string,
    } = {
      ...this.styles,
    };

    if (color) {
      style.background = color
    };

    if (fontColor) {
      style.color = fontColor;
    }

    if (padding) {
      style.padding =  typeof (padding) === 'number'
        ? `${padding}px;`
        : `${padding};`
    }

    return (
      <Host>
        <button
          type={this.type}
          onClick={(event) => this.onClick(event)}
          class={`${className} ${variant && `variant-${variant}`} ${this.fullwidth && 'fullWidth'}`}
          style={style}
        >
          <slot name="icon" />
          {this.text}
        </button>
      </Host>
    );
  }
}
