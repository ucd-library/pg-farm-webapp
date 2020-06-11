import { LitElement } from 'lit-element';
import render from "./app-db-icon.tpl.js"

const ICONS = {
  weather : {
    name : 'cloud-sun-solid.svg',
    color : 'var(--color-putah-creek)'
  },
  wine : {
    name : 'wine-glass-alt-solid.svg',
    color : 'var(--color-double-decker)'
  },
  default : {
    name : 'database-solid.svg',
    color : 'var(--color-aggie-gold)'
  }
}

export default class AppDbIcon extends LitElement {

  static get properties() {
    return {
      size : {type: Number},
      type : {type: String},
      url : {type: String},
      color : {type: String}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.size = 50;
    this.url = '/images/'+ICONS.default.name;
    this.style.backgroundColor = ICONS.default.color;
  }

  updated(props) {
    if( props.has('type') ) {
      if( ICONS[this.type] ) {
        this.url = '/images/'+ICONS[this.type].name;
        this.style.backgroundColor = ICONS[this.type].color;
      } else {
        this.url = '/images/'+ICONS.default.name;
        this.style.backgroundColor = ICONS.default.color;
      }
    }

    if( props.has('size') ) {
      let img = this.shadowRoot.querySelector('img');
      let scaledSize =  Math.floor(this.size * .7)+'px';
      img.style.height = scaledSize;
      img.style.width = scaledSize;
      
      this.style.borderRadius = this.size+'px';
      this.style.height = scaledSize;
      this.style.width = scaledSize;
      this.style.padding = Math.floor((this.size/2) * .3)+'px';
    }
  }

}

customElements.define('app-db-icon', AppDbIcon);
