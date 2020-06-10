import { html } from 'lit-element';

export default function render() { 
return html`

<style>
  :host {
    display: block;
    width: 100%;
    max-width: 960px;
  }
</style>

${this.databases.map(database => html`
  <app-database-list-item .database="${database}"></app-database-list-item>
`)}

`;}