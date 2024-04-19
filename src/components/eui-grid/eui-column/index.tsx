import { Component, h, Prop } from '@stencil/core';
import { Column } from 'pure-ui-react';
import { ColumnTypes } from './index';

@Component({
  tag: 'eui-column',
  // styleUrl: 'eui-row.css',
  shadow: false,
})
export class EUIColumn {
  @Prop() children: ColumnTypes['children'];
  @Prop() condensed: ColumnTypes['condensed'];
  @Prop() narrow: ColumnTypes['narrow'];
  @Prop() noBoxSizing: ColumnTypes['noBoxSizing'];
  @Prop() overflow: ColumnTypes['overflow'];
  @Prop() padding: ColumnTypes['padding'];
  @Prop() paddingBottom: ColumnTypes['paddingBottom'];
  @Prop() paddingLeft: ColumnTypes['paddingLeft'];
  @Prop() paddingRight: ColumnTypes['paddingRight'];
  @Prop() paddingTop: ColumnTypes['paddingTop'];
  @Prop() allowOverflow: ColumnTypes['allowOverflow'];
  @Prop() justifyContent: ColumnTypes['justifyContent'];
  @Prop() flexDirection: ColumnTypes['flexDirection'];
  @Prop() extraSmall: ColumnTypes['extraSmall'];
  @Prop() small: ColumnTypes['small'];
  @Prop() medium: ColumnTypes['medium'];
  @Prop() large: ColumnTypes['large'];
  @Prop() extraLarge: ColumnTypes['extraLarge'];

  render() {
    return (
    <Column
      condensed={this.condensed}
      narrow={this.narrow}
      noBoxSizing={this.noBoxSizing}
      overflow={this.overflow}
      padding={this.padding}
      paddingBottom={this.paddingBottom}
      paddingRight={this.paddingRight}
      paddingTop={this.paddingTop}
      paddingLeft={this.paddingLeft}
      allowOverflow={this.allowOverflow}
      justifyContent={this.justifyContent}
      flexDirection={this.flexDirection}
      extraSmall={this.extraSmall}
      small={this.small}
      medium={this.medium}
      large={this.large}
      extraLarge={this.extraLarge}
    >
      {this.children}
    </Column>);
  }
}
