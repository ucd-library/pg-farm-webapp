import { LitElement } from 'lit-element';
import render from "./app-database-list.tpl.js"

import "./app-database-list-item"

export default class AppDatabaseList extends LitElement {

  static get properties() {
    return {
      databases : {type: Array}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.databases = Object.values(APP_CONFIG.databases);
  }

}

customElements.define('app-database-list', AppDatabaseList);
