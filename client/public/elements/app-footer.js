import { LitElement } from 'lit-element';
import render from "./app-footer.tpl"

export default class AppFooter extends LitElement {
  
  static get properties() {
    return {

    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
  }

}

customElements.define('app-footer', AppFooter);