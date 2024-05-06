// import React from 'react';
import { Component, Element, h, Host, Prop } from '@stencil/core';
import { Row } from 'pure-ui-react';
import { GridTypes } from '../eui-grid/index.d';

@Component({
  tag: 'eui-row',
  // styleUrl: 'eui-row.css',
  shadow: false,
})
export class EUIRow {
  @Element() element: unknown;
  @Prop() condensed: GridTypes['condensed'];
  @Prop() narrow: GridTypes['narrow'];
  @Prop() noBoxSizing: GridTypes['noBoxSizing'];
  @Prop() overflow: GridTypes['overflow'];
  @Prop() padding: GridTypes['padding'];
  @Prop() paddingBottom: GridTypes['paddingBottom'];
  @Prop() paddingLeft: GridTypes['paddingLeft'];
  @Prop() paddingRight: GridTypes['paddingRight'];
  @Prop() paddingTop: GridTypes['paddingTop'];
  @Prop() allowOverflow: GridTypes['allowOverflow'];
  @Prop() justifyContent: GridTypes['justifyContent'];
  @Prop() flexDirection: GridTypes['flexDirection'];

  render() {
    return (
      <Host>
        <Row>
          {this.element}
        </Row>
      </Host>
    );
  }
}
