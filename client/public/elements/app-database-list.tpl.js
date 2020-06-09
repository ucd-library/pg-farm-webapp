import { html } from 'lit-element';

export default function render() { 
return html`

<style>
  :host {
    display: block;
    max-width: 900px;
  }
</style>

${this.databases.map(database => html`
  <app-database-list-item .database="${database}"></app-database-list-item>
`)}

`;}