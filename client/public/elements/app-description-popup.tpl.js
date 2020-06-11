import { html } from 'lit-element';

export default function render() { 
return html`

<style>
  :host {
    display: none;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1000;
  }

  .layout {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content {
    background-color: white;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 200px;
    max-width:600px;
    padding: 15px;
    /* min-height: 300px; */
    max-height: calc(100% - 40px);
  }

  .header {
    display: flex;
    height: 50px;
    align-items: center;
  }

  .header .title {
    color: var(--color-black90);
    font-size: 22px;
    font-weight: bold;
  }

  #description-md {
    flex: 1;
    overflow: auto;
  }

  iron-icon[icon="close"] {
    cursor: pointer;
  }

</style>  

<div class="layout">
  <div class="content">
      <div class="header">
        <app-db-icon type="${this.theme}" size="50"></app-db-icon>
        <div style="flex:1; padding-left:10px">
          <div style="color: var(--color-ucdblue70)">DOCUMENTATION</div>
          <div class="title">${this.title}</div>
        </div>
        <div style="height: 50px">
          <iron-icon icon="close" tabindex="1" @click="${this.hide}"></iron-icon>
        </div>
      </div>
      <div id="description-md"></div>
  </div>
</div>

`;}