import { LitElement } from 'lit-element';
import render from "./app-description-popup.tpl.js"

import './app-db-icon'
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt();

export default class AppDescriptionPopup extends LitElement {

  static get properties() {
    return {
      title : {type: String},
      theme : {type: String}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.title = '';
    this.theme = '';

    window.addEventListener('resize', () => this.resize());
  }

  firstUpdated() {
    this.parentElement.removeChild(this);
    document.body.appendChild(this);
  }

  resize() {
    if( !this.visible ) return;
    this.style.display = 'block';

    console.log(window.scrollY);
    this.style.top = window.scrollY;
    this.style.bottom = document.body.offsetHeight - (window.innerHeight+window.scrollY);
    
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'relative';
  }

  show(database) {
    this.shadowRoot.querySelector('#description-md').innerHTML = md.render(database.DESCRIPTION);
    this.title = database.CLUSTER_NAME;
    this.theme = database.THEME;

    this.visible = true;
    this.resize();
  }

  hide() {
    this.visible = false;
    this.style.display = 'none';
    document.body.style.overflow = 'auto';
    document.body.style.position = 'initial';
  }

}

customElements.define('app-description-popup', AppDescriptionPopup);
