import { Component, Host, Prop, h } from '@stencil/core';

import type EUIModalType from './index.d';

@Component({
  tag: 'eui-modal',
  styleUrl: 'eui-modal.scss',
  // shadow: true,
  scoped: true,
})
export class EUIModal implements EUIModalType {
  @Prop() title;
  @Prop() open;

  render() {
    const {
      title,
      open,
    } = this;

    return (
      <Host style={{ display: open ? 'flex' : 'none' }}>
        <div class="eui-modal-content">
          <eui-button
            class="eui-modal-close"
            onClick={() => this.open = false}
          />
          <eui-card title={title}>
            <div slot="body">
              <slot name="body" />
            </div>
          </eui-card>
        </div>
      </Host>
    );
  }

  componentDidUpdate() {
    this.render();
  }
}
