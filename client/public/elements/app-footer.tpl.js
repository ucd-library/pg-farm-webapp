import { html } from 'lit-element';

export default function render() {
  return html`
    <style>
      footer {
        margin-top: 2em;
        padding: 4em 0 6em;
        background-color: #002855;
        color: white;
      }

      .l-container {
        width: 95%;
        margin: 0 auto;
      }

      .footer-spacer {
        position: relative;
        margin: 4em 0;
        text-align: center;
      }

      .u-align--center {
        margin: 0 auto !important;
        text-align: center !important;
      }

      .l-container:after {
        content: "";
        display: table;
        clear: both;
      }

      .footer-spacer__hr {
        position: absolute;
        top: 50%;
        z-index: 1;
        margin: 0;
        width: 100%;
      }
      .hr-invert {
        border-color: rgba(255,255,255,0.25);
      }
      hr {
        display: block;
        border: 0;
        height: 1px;
        border-top: 1px solid #002855;
        margin: 2em 0;
        padding: 0;
      }
      hr {
        box-sizing: content-box;
        height: 0;
      }

      .footer-spacer__logo {
        display: inline-block;
        position: relative;
        padding: 0 2em;
        z-index: 2;
        background-color: #002855;
      }

      footer a {
        color: white;
      }

      .uc-footer {
        text-align: center;
      }

      .uc-footer .list--pipe {
        margin-bottom: 1em;
      }
      .list--pipe, .list-wrapper--pipe ul, .vm-teaser__position, .vm-teaser__categories, .vm-teaser__byline {
        margin: 0;
        padding: 0;
        list-style: none;
      }

      p {
        margin-top: 0;
        margin-bottom: 1em;
      }

      .list--pipe li, .list-wrapper--pipe ul li, .vm-teaser__position li, .vm-teaser__categories li, .vm-teaser__byline li {
        border-right: 1px solid #999;
        margin-right: .25em;
        padding-right: .5em;
        display: inline-block;
        line-height: 1;
      }
      .list--pipe li, .list-wrapper--pipe ul li, .vm-teaser__position li, .vm-teaser__categories li, .vm-teaser__byline li {
        list-style: none;
      }

      .l-container:after {
        content: "";
        display: table;
        clear: both;
      }
    </style>

<footer class="l-footer footer">
      <div class="l-container">

        <div class="footer-spacer">
          <hr class="footer-spacer__hr hr-invert">
          <div class="footer-spacer__logo">
            <a href="https://www.ucdavis.edu/">
              <img src="/images/uc-logo-white.svg" class="ucd-logo" alt="UC Davis footer logo" />
            </a>
          </div>
        </div>

        <div class="region region-footer-credits">
          <div id="block-sitefarm-one-uccredits" class="uc-footer block block-uc-credits block-uc-credits-block">
            <ul class="list--pipe">
              <li><a href="mailto:sitefarm@ucdavis.edu">Questions or comments?</a></li>
              <li><a href="http://ucdavis.edu/help/privacy-accessibility.html">Privacy & Accessibility</a></li>
              <li><a href="http://occr.ucdavis.edu/poc/">Principles of Community</a></li>
              <li><a href="http://www.universityofcalifornia.edu/">University of California</a></li>
              <li><a href="/sitemap">Sitemap</a></li>
              <li>Last update: June 5, 2020</li>
            </ul>
            <p>Copyright © The Regents of the University of California, Davis campus. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  `
}