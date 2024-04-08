import { checkDefined, defineCustomComponent } from '../../utils/component';
import './index.scss';

class FigureComponent extends HTMLElement {
  static getObservedAttributes() {
    return [
      'src',
      'alt',
      'caption',
      'backgroundImage',
      'captionColor',
      'captionBackground',
    ];
  }

  constructor() {
    super();
    this.rendered = false;
  }

  connectedCallback() {
    if (!this.rendered) {
      this.render();
      this.rendered = true;
    }
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    if (this.rendered) {
      this.innerHTML = '';
    }

    const src = this.getAttribute('src');
    const alt = this.getAttribute('alt');
    const caption = this.getAttribute('caption');
    const backgroundImage = this.getAttribute('backgroundImage');
    const captionColor = this.getAttribute('captionColor');
    const captionBackground = this.getAttribute('captionBackground');

    if (!checkDefined(src)) {
      console.warn('image src not defined');
      return;
    }

    if (typeof (window) !== 'undefined') {
      const figure = document.createElement('figure');

      const img = document.createElement('img');
      img.src = src;

      if (checkDefined(alt)) {
        img.alt = alt;
      }

      figure.appendChild(img);

      if (checkDefined(backgroundImage)) {
        const bgImage = document.createElement('img');

        bgImage.src = backgroundImage;

        bgImage.classList.add('eui_figure__background_image');

        figure.appendChild(bgImage);
      }

      if (checkDefined(caption)) {
        const figcaption = document.createElement('figcaption');

        if (checkDefined(captionColor)) {
          figcaption.style.color = captionColor;
        }

        if (checkDefined(captionBackground)) {
          figcaption.style.background = captionBackground;
        }

        figcaption.innerHTML = caption;

        figure.appendChild(figcaption);
      }
      this.appendChild(figure);
    }
  }
}

defineCustomComponent('eui-figure', FigureComponent);
