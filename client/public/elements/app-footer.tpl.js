import { html } from 'lit-element';

export default function render() {
  return html`
<style>
  :host {
    display: block;
    background-color: var(--color-aggie-blue);
    line-height: 24px;
    color: white;
    padding: 60px 0 35px 0
  }
  * {
    box-sizing: border-box;
  }
  a, a:visited {
    color: var(--color-white);
  }
  footer {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 10px;
  }

  .layout {
    display: flex;
    max-width: 900px;
    width: 100%;
  }
  .layout.center {
    align-items: center;
  }

  .layout .lib-addr-info {
    width: 250px;
  }
  .layout .online-strategy {
    flex: 1;
    padding-left: 10px;
  }
  .layout .online-strategy h3 {
    margin-top: 0;
  }
  .layout .logo-line {
    border-top: 1px solid rgba(255,255,255,0.25);
    flex: 1;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    margin: 0;
    padding: 0;
    list-style: none;
    display: inline-block;
  }
  li:after {
    content: "|";
    padding: 0 10px;
  }
  li:last-child:after {
    content: "";
    padding: 0;
  }

  @media(max-width: 600px) {
    .layout.top {
      display: block;
      padding-left: 30px;
    }
    .layout .online-strategy {
      padding-left: 0;
    }
  }
</style>

<footer>
  <div class="layout top">
    <div class="lib-addr-info">
      <div style="margin-bottom: 30px;">
        <a href="https://www.library.ucdavis.edu" target="_blank">
          <img src="/images/ucd-logo-main-new-white.png" alt="UC Davis Library logo" />
        </a>
      </div>
      <div>
        <p>
          UC Davis Library<br />
          100 NW Quad<br />
          University of California, Davis<br />
          Davis, CA 95616<br />
          (530) 752-8792<br />
          <a href="mailto:library@ucdavis.edu">library@ucdavis.edu</a>
        </p>
      </div>
    </div>

    <div class="online-strategy">
      <h3>Development Team</h3>
      <div>
        The <a href="https://www.library.ucdavis.edu/service/online-strategy-2/">Online Strategy team at the UC Davis Library</a> repositions Library data for the digital age.
      </div>
    </div>
  </div>

  <div class="layout center" style="margin: 64px 0">
    <div class="logo-line"></div>
    <div style="padding: 0 32px;">
      <a href="https://www.ucdavis.edu/">
        <img src="/images/uc-logo-white.svg" style="height:40px" alt="UC Davis logo" />
      </a>
    </div>
    <div class="logo-line"></div>
  </div>

  <div style="text-align: center;">
    <a href="https://www.ucdavis.edu/">University of California, Davis</a>, One Shields Avenue, Davis, CA 95616 | 530-752-1011
  </div>

  <div style="text-align:center; margin: 15px 0">
    <ul>
      <li><a href="mailto:library@ucdavis.edu">Questions or comments?</a></li>
      <li><a href="http://ucdavis.edu/help/privacy-accessibility.html">Privacy & Accessibility</a></li>
      <li><a href="http://occr.ucdavis.edu/poc/">Principles of Community</a></li>
      <li><a href="http://www.universityofcalifornia.edu/">University of California</a></li>
    </ul>
  </div>

  <div>
    Copyright © The Regents of the University of California, Davis campus. 
    All rights reserved.
  </div>
</footer>`
}