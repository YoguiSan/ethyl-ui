// import React from 'react';
import { Component, Element, Host, h } from '@stencil/core';
import { Grid } from 'pure-ui-react';

@Component({
  tag: 'eui-grid',
  // styleUrl: 'eui-grid.css',
  shadow: false,
})
export class EUIGrid {
  @Element() element;

  render() {
    return (
      <Host>
        <Grid children={this.element}>{this.element}</Grid>
      </Host>
    );
  }
}
