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
        padding: 30px 10px;
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
        width: 100%;
        min-width: 200px;
        max-width: 600px;
        position: relative;
        border: none;
        padding-left: 10px;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        background-color: var(--color-white);
        color: var(--color-hint-text);
        border-right: transparent;
        border-radius: none;
      }

      #search-input-button {
        background-color:  var(--color-white);
        border: none;
        border-radius: none;
      }

      #search-input-button > iron-icon {
        color: var(--color-ucdblue70);
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
        color: var(--color-aggie-blue);
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
        padding: 10px 52px 10px 10px;
        color: white;
        font-size: 16px;
        background-color: var(--color-aggie-blue);
        outline-offset: 1px;
        border: none;
        border-radius: 0;

        /* padding: 2px 2px 2px 2px; */
        border: none; 
        background-image: url("/images/expand-more.svg");
        background-position: right center;
        background-repeat: no-repeat;

        -o-appearance: none;
        -ms-appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
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
        <select id="search-dropdown" class="search-dropdown" dir="rtl">
          <option value="a-z">Name A-Z</option>
          <option value="z-a">Name Z-A</option>
        </select>
      </div>
    </div>
  `
}