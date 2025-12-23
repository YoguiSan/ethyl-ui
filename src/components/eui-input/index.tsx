import { Component, Host, Prop, h } from '@stencil/core';

import type EUIInputType from './index.d';

@Component({
  tag: 'eui-input',
  styleUrl: 'eui-input.scss',
  // shadow: true,
  scoped: true,
})
export class EUIInput implements EUIInputType {
  @Prop() variant;
  @Prop() padding;
  @Prop() type;
  @Prop() color = 'lightgray';
  @Prop() text;
  @Prop() icon;
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

    return (
      <Host>
        <style>
          {`
            ${
              (
                padding
                  && (
                    typeof (padding === 'number')
                      ? `${padding}px;`
                      : `${padding};`
                  )
                )
            || ''
            }
            ${
              color  ? `background: ${color};`: ''
            }
            ${
              fontColor ? `color: ${fontColor};` : ''
            }
          `}
        </style>
        <button
          type={this.type}
          onClick={(event) => this.onClick(event)}
          class={`${className} ${variant && `variant-${variant}`} ${this.fullwidth && 'fullWidth'}`}
        >
          {this.icon && this.icon}
          {this.text}
        </button>
      </Host>
    );
  }
}
