import { Component, Host, Prop, h } from '@stencil/core';
import EUIFigureType from './index.d';

@Component({
  tag: 'eui-figure',
  styleUrl: 'eui-figure.scss',
  // shadow: true,
  scoped: true,
})
export class EUIFigure implements EUIFigureType {
  @Prop() src;
  @Prop() alt;
  @Prop() caption;
  @Prop() backgroundImage;
  @Prop() classes = '';
  @Prop() url;

  render() {
    const Component = (
      <Host class={
        this.classes
      }>
        <figure>
          <img src={this.src} alt={this.alt} />
          {this.caption && (
            <figcaption>
              {
                this.caption
              }
            </figcaption>
          )}
        </figure>
      </Host>
    );
    return (
      this.url
        ? <a href={this.url}>
          {Component}
        </a>
        : Component
    );
  }
}
