import { html } from 'lit-element';

export default function render() {
  return html`
    <style>
      :host {
        display: block;
        max-width: 900px;
      }

      #search-bar-wrapper {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        padding: 30px 0;
        height: 44px;
      }

      #search-bar-wrapper > label {
        width: 100%;
        position: relative;
      }

      #search-bar {
        margin: 0 10px;
        width: 100%;
        max-width: 600px;
        height: 44px;
        font-size: 16px;
      }

      #search-bar-wrapper > .sort-by {
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

      .search-bar-button {
        
      }

      .search-icon {
        position: absolute;
        right: 0;
        color: #355B85;
        font-size: 24px;
      }

      .expand-more {
        color: #FFBF00;
        background-color: #002851;
      }
    </style>

    <div id="search-bar-wrapper">
      <label>
        <input type="text" id="search-bar" name="search-bar" placeholder="Search databases" value="">
        <button class="search-bar-button" type="submit">
          <iron-icon class="search-icon" icon="search"></iron-icon>
        </button>
      </label>
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