import { LitElement } from 'lit-element';
import render from "./app-database-list-item.tpl.js"

import './app-db-icon'

const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();

export default class AppDatabaseListItem extends LitElement {

  static get properties() {
    return {
      database : {type: Object},
      connectionHelpOpen : {type: Boolean}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.connectionHelpOpen = false;
    this.database = {
      CLUSTER_NAME: "",
      DESCRIPTION: "",
      PGR_DATABASE: "",
      PGR_PASSWORD: "",
      PGR_SCHEMA: "",
      PGR_URL: "",
      PGR_USER: "",
      PG_FARM_CONTROLLER_PORT: "",
      PG_FARM_PGR_PORT: "",
      PG_FARM_REPL_PORT: "",
      PG_FARM_VERSION: "",
      PG_VERSION: ""
    }
  }

  _onConnectionToggleClicked() {
    this.connectionHelpOpen = !this.connectionHelpOpen;
  }

  _onViewDocClicked() {
    document.querySelector('app-description-popup').show(this.database);
  }

}

customElements.define('app-database-list-item', AppDatabaseListItem);
