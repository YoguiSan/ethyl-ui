import React from 'react';
import { Component, Prop } from '@stencil/core';
import { Button } from 'pure-ui-react';
import { ButtonTypes } from './index.d';

@Component({
  tag: 'eui-button',
  // styleUrl: 'eui-row.css',
  shadow: true,
})
export class EUIColumn {
  @Prop() classes: ButtonTypes['classes'];
  @Prop() color: ButtonTypes['color'];
  @Prop() fontColor: ButtonTypes['fontColor'];
  @Prop() icon: ButtonTypes['icon'];
  @Prop() onClick: ButtonTypes['onClick'];
  @Prop() styles: ButtonTypes['styles'];
  @Prop() text: ButtonTypes['text'];
  @Prop() type: ButtonTypes['type'];
  @Prop() variant: ButtonTypes['variant'];

  render() {
    return (
    <Button
      classes={this.classes}
      color={this.color}
      fontColor={this.fontColor}
      icon={this.icon}
      onClick={this.onClick}
      styles={this.styles}
      text={this.text}
      type={this.type}
      variant={this.variant}
    />);
  }
}
