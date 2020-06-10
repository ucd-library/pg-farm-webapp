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
        flex-flow: row nowrap;
        justify-content: center;
        padding: 30px;
      }

      #search-input-wrapper .input-container {
        display: inline-block;
        display: flex;
        flex-wrap: nowrap;
        width: 100%;
      }

      #search-input {
        flex-grow: 1;
        height: 44px;
        padding: .375rem .75rem;
        width: 1%;
        min-width: 0;
        max-width: 600px;
        position: relative;

        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;

        background-color: white;

        border: 1px solid #ced4da;
        border-right: transparent;

        border-radius: .25rem;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }

      #search-input-button {
        position: relative;
        left: -10px;
        background-color: white;
        border: 1px solid #ced4da;
        border-left: transparent;
        
        border-radius: .25rem;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }

      #search-input-button > iron-icon {
        position: absolute;
        top: 10px;
        right: 10px;
        color: #355B85;
        font-size: 24px;
      }

      #search-dropdown-outer-wrapper {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: 0 0 0 30px;
      }

      #search-dropdown-outer-wrapper .sort-by {
        margin-right: 10px;
        color: #022851;
        font-size: 14px;
        font-weight: bold; 
        text-align: right;
        text-transform: uppercase;
      }

      .search-dropdown-inner-wrapper {
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
      
      @media only screen and (max-width: 600px) {
        #search-input-wrapper {
          flex-flow: column wrap;
          padding: 15px 15px 0px 15px;
        }

        #search-input-wrapper .input-container {
          padding: 0 0 30px 0;
        }

        #search-input {
          width: 100%;
          max-width: initial;
        }

        #search-input-button {
          left: 0;
        }

        #search-dropdown-outer-wrapper {
          justify-content: flex-end;
        }
      }
    </style>

    <div id="search-input-wrapper">
      <div class="input-container">
        <input type="text" id="search-input" name="search-input" placeholder="Search databases" value="">
        <button id="search-input-button" type="button">
          <iron-icon class="search-icon" icon="search"></iron-icon>
        </button>
      </div>
      <div id="search-dropdown-outer-wrapper">
        <span class="sort-by">Sort&nbsp;By</span>
        <div class="search-dropdown-inner-wrapper">
          <select id="search-dropdown" class="search-dropdown" dir="rtl">
            <option value="">Name A-Z</option>
            <option value="">Relevance</option>
            <option value="">Most Recent</option>
            <option value="">Oldest</option>
          </select>
          <iron-icon class="expand-more" icon="expand-more"></iron-icon>
        </div>
      </div>
    </div>
  `
}