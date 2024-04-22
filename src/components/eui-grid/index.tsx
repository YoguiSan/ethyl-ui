import { Component, h, Element } from '@stencil/core';
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
      <Grid children={this.element}>{this.element}</Grid>
    );
  }
}
