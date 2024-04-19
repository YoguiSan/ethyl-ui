import { Component, h, Prop } from '@stencil/core';
import { Grid } from 'pure-ui-react';
import { GridTypes } from './Grid';

@Component({
  tag: 'eui-grid',
  styleUrl: 'eui-grid.css',
  shadow: false,
})
export class EUIGrid {
  @Prop() children?: GridTypes['children'];

  render() {
    return (
      <Grid>{this.children}</Grid>
    );
  }
}
