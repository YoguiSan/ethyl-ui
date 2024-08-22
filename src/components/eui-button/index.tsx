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
  @Prop() color;
  @Prop() text;
  @Prop() icon;
  @Prop() fontColor;
  @Prop() onClick;
  @Prop() styles;
  @Prop() classes;
  @Prop() fullWidth: boolean;

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
              color ? `background-color: ${color};` : ''
            }
            ${
              fontColor ? `color: ${fontColor};` : ''
            }
          `}
        </style>
        <button
          type={this.type}
          onClick={(event) => this.onClick(event)}
          class={`${className} ${variant && `variant-${variant}`}`}
        >
          {this.icon && this.icon}
          {this.text}
        </button>
      </Host>
    );
  }
}
