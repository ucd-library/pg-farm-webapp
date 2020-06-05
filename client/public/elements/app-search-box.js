import { LitElement } from 'lit-element';
import render from "./app-search-box.tpl"
import "@polymer/iron-icons"

export default class AppSearchBox extends LitElement {

  static get properties() {
    return {
      databases : { type: Array }
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.databases = Object.values(APP_CONFIG.databases);
  }

}

customElements.define('app-search-box', AppSearchBox);