import { LitElement } from 'lit-element';
import render from "./app-database-list.tpl.js"

import "./app-database-list-item"

const SORTS = {
  'a-z' : arr => arr.sort((a, b) => a.CLUSTER_NAME < b.CLUSTER_NAME ? -1 : 1),
  'z-a' : arr => arr.sort((a, b) => a.CLUSTER_NAME > b.CLUSTER_NAME ? -1 : 1)
}

export default class AppDatabaseList extends LitElement {

  static get properties() {
    return {
      databases : {type: Array}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    let databases = Object.values(APP_CONFIG.databases);
    SORTS['a-z'](databases);
    this.databases = databases;

    window.addEventListener('search', e => this._onSearch(e.detail));
  }

  _onSearch(e) {
    let databases = Object.values(APP_CONFIG.databases)
      .filter(db => {
        return (db.CLUSTER_NAME.match(e.filter) || 
          (db.ABSTRACT || '').match(e.filter) ||
          (db.DESCRIPTION || '').match(e.filter)
        )
      });
    SORTS[e.sort](databases);
    this.databases = databases;
  }

}

customElements.define('app-database-list', AppDatabaseList);
