import { Component, Host, Prop, h } from '@stencil/core';

import type EUICardType from './index.d';

@Component({
  tag: 'eui-card',
  styleUrl: 'eui-card.scss',
  // shadow: true,
  scoped: true,
})
export class EUICard implements EUICardType {
  @Prop() title;
  @Prop() iconBgColor;
  @Prop() children;

  render() {

    const {
      title,
      iconBgColor,
      children,
    } = this;

    return (
      <Host>
        {
          (title) && (
            <div class="eui-card-header">
              <div
                class="eui-card-icon"
                style={{ backgroundColor: iconBgColor }}
              >
                <slot name="icon" />
              </div>
              {title && <div class="eui-card-title">{title}</div>}
            </div>
          )
        }
        {
          children && (
            <div class="eui-card-body">
              {children}
            </div>
          )
        }
      </Host>
    );
  }
}
