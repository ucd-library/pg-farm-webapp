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

  _onInputKeyup(e) {
    this.filter = e.currentTarget.value;
    this._sendUpdate();
  }

  _onSelectChange(e) {
    this.sort = e.currentTarget.value;
    this._sendUpdate();
  }

  _sendUpdate() {
    window.dispatchEvent(new CustomEvent('search', {detail: {
      filter : new RegExp(this.filter || '.*', 'i'),
      sort : this.sort || 'a-z'
    }}))
  }

}

customElements.define('app-search-box', AppSearchBox);