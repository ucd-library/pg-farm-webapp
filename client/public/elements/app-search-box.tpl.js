import { html } from 'lit-element';

export default function render() {
  return html`
    <style>
      :host {
        display: block;
        max-width: 900px;
      }

      #search-input-wrapper {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        padding: 30px;
        height: 44px;
      }

      #search-input-wrapper > .input-container {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        position: relative;
        align-items: stretch;
      }

      #search-input {
        display: block;
        height: calc(1.5em + .75rem);
        padding: .375rem .75rem;
        margin: 0 10px;
        width: 1%;
        max-width: 600px;
        height: 44px;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        background-color: white;
        border: 1px solid #ced4da;
        border-radius: .25rem;
        position: relative;
        flex: 1 1 auto;
        min-width: 0;
        margin-bottom: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }

      #search-input-button {
        display: inline-block;
        border: 1px solid transparent;
        position: relative;
        top: -10px;
        left: -32px;
        z-index: 2;
        background-color: transparent;
      }

      #search-input-button > iron-icon {
        position: absolute;
        right: 0;
        color: #355B85;
        font-size: 24px;
      }

      #search-input-wrapper > .sort-by {
        padding-right: 10px;
        color: #022851;
        font-size: 14px;
        font-weight: bold; 
        text-align: right;
        text-transform: uppercase;
        white-space: nowrap;
      }

      .search-dropdown-wrapper {
        padding: 10px;
        white-space: nowrap;
        background-color: #002851;
      }

      #search-dropdown {
        padding-left: 14px;
        color: white;
        font-size: 16px;
        background-color: #002851;
        outline-offset: 1px;
        border: none;
        border-radius: 0;
        -o-appearance: none;
        -ms-appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }

      .expand-more {
        color: #FFBF00;
        background-color: #002851;
      }
    </style>

    <div id="search-input-wrapper">
      <div class="input-container">
        <input type="text" id="search-input" name="search-input" placeholder="Search databases" value="">
        <button id="search-input-button" type="button">
          <iron-icon class="search-icon" icon="search"></iron-icon>
        </button>
      </div>
      <span style="width: 30px;"></span>
      <span class="sort-by">Sort By</span>
      <div class="search-dropdown-wrapper">
        <select id="search-dropdown" class="search-dropdown" dir="rtl">
          <option value="">Name A-Z</option>
          <option value="">Relevance</option>
          <option value="">Most Recent</option>
          <option value="">Oldest</option>
        </select>
        <iron-icon class="expand-more" icon="expand-more"></iron-icon>
      </div>
    </div>
  `
}