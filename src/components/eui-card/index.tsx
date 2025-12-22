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

  render() {

    const {
      title,
      iconBgColor,
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
              {title && <p class="eui-card-title">{title}</p>}
            </div>
          )
        }
        <div class="eui-card-body">
          <slot name="body" />
        </div>
      </Host>
    );
  }
}
