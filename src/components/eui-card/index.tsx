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
  @Prop() icon;
  @Prop() children;

  render() {

    const {
      title,
      icon,
      children,
    } = this;

    return (
      <Host>
        {
          (title || icon) && (
            <div class="eui-card-header">
              {icon && <div class="eui-card-icon">{icon}</div>}
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
