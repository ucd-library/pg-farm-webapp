import { html } from 'lit-element';

export default function render() { 
return html`

<style>
  :host {
    display: block;
    width: 100%;
    max-width: 960px;
  }

  a {
    cursor: pointer;
    color: var(--color-ucdblue70);
    font-weight: bold;
    text-decoration: underline;
  }

  p {
    margin: 8px 0;
    line-height: 23px;
  }

  pre {
    background-color: var(--color-ucdgold30);
    overflow: auto;
  }

  h2 {
    margin-top: 0;
    font-size: 28px;
    color: var(--color-black90);
    margin-bottom: 8px;
  }
  h3 {
    margin-top: 0;
    margin-bottom: 8px;
    font-size: 18px;
    color: var(--color-black90);
  }

  #content-wrapper {
    display: flex;
    flex-direction: column;
    padding: 30px;
    background-color: var(--color-white);
  }

  .top-row {
    display: flex;
    flex-direction: row;
  }

  .top-row .left-side-content {
    flex: 1;
  }

  .image-wrapper {
    padding: 0 0 20px 20px;
  }

  iron-icon.description {
    padding-right: 4px;
    color: var(--color-ucdblue20);
    font-size: 24px;
    vertical-align: text-top;
  }

  .abstract {
    font-size: 16px;
    color: var(--color-black90);
    margin-bottom: 8px;
  }

  .description {
    margin-bottom: 8px;
  }

  .info-group {
    font-size: 16px;
    color: var(--color-black90);
  }

  .info-group > div {
    margin-bottom: 6px;
  }

  table {
    margin: 18px 0 24px 0;
    border-collapse: collapse;
  }
  table tr td {
    padding-bottom: 6px;
  }
  table tr td:nth-child(2) {
    padding-left: 10px;
    font-weight: bold;
  }

  .connection-examples-toggle {
    margin-left: -6px;
    cursor: pointer;
  }

  .connection-examples-toggle iron-icon[class="arrow-drop-down"] {
    transform: rotate(-90deg);
    color: var(--color-aggie-gold);
    vertical-align: text-bottom;
  }

  .connection-examples-toggle iron-icon[class="arrow-drop-down"][open] {
    transform: rotate(0deg);
  }

  .connection-examples {
    margin-top: 8px;
    padding: 20px;
    background-color: var(--color-ucdgold10);
  }

  .connection-examples > h4,
  .connection-examples .info-group > pre,
  .connection-examples .info-group {
    margin: 0;
    padding: 0;
    margin-block-start: 0;
    margin-block-end: 0;
  }

  .connection-examples > h4:first-of-type {
    margin-top: 0;
  }

  .connection-examples .info-group {
    margin-top: 6px;
    margin-bottom: 24px;
  }

  .connection-examples .info-group pre {
    padding: 10px;
  }

  .connection-examples .info-group > em {
    display: block;
    margin-top: 4px;
    margin-bottom: 6px;
  }

  .note {
    font-size: italic;
  }

  @media only screen and (max-width: 600px) {
    #content-wrapper {
      margin: 15px;
      padding: 15px;
    }

    .image-wrapper {
      padding: 0 0 20px 20px;
    }
  }
</style>  

<div id="content-wrapper">
  <div class="content">
    <div class="top-row">
      <div class="left-side-content">
        <h2>${this.database.CLUSTER_NAME}</h2>

        <div 
          ?hidden="${!this.database.ABSTRACT}" 
          class="abstract">${this.database.ABSTRACT}
        </div>

        <div ?hidden="${!this.database.DESCRIPTION}">
          <iron-icon class="description" icon="description"></iron-icon>
            <a @click="${this._onViewDocClicked}">View Documentation</a>
        </div>
      </div>
      <div class="image-wrapper">
        <app-db-icon type="${this.database.THEME}" size="75" ></app-db-icon>
      </div>
    </div>

    <h3>Rest API Access via <a href="http://postgrest.org/en/v7.0.0/api.html" target="_blank">PostgREST</a></h3>
    <div class="info-group">
      <div>
        PostgREST URL: <a href="${this.database.PGR_URL}" target="_blank">${this.database.PGR_URL}</a>
      </div>
      <div>
        API Playground via Swagger.io: 
        <a href="https://editor.swagger.io/?url=${this.database.PGR_URL}" target="_blank">API Playground</a>
      </div>
    </div>

    <h3 style="margin-top:24px">Database Connection Information</h3>
    <div style="font-style:italic">PostgreSQL Version: ${this.database.PG_VERSION}</div>
    <table>
      <tr>
        <td>Host</td>
        <td>${this.database.CLUSTER_NAME}.${window.location.hostname}</td>
      </tr>
      <tr>
        <td>Port</td>
        <td>${this.database.PG_FARM_REPL_PORT}</td>
      </tr>
      <tr>
        <td>Database</td>
        <td>${this.database.PGR_DATABASE}</td>
      </tr>
      <tr>
        <td>Username</td>
        <td>${this.database.PGR_USER}</td>
      </tr>
      <tr>
        <td>Password</td>
        <td>${this.database.PGR_PASSWORD}</td>
      </tr>
    </table>

    <h3 tabindex="1" @click="${this._onConnectionToggleClicked}" class="connection-examples-toggle">
      <iron-icon class="arrow-drop-down" icon="arrow-drop-down" ?open="${this.connectionHelpOpen}"></iron-icon>
      Connection Examples
    </h3>

    <div class="connection-examples" ?hidden="${!this.connectionHelpOpen}">
      <h4>JDBC Connection String</h4>
      <div class="info-group">
        <pre>jdbc:postgresql://${this.database.CLUSTER_NAME}.${window.location.hostname}:${this.database.PG_FARM_REPL_PORT}/${this.database.PGR_DATABASE}?user=${this.database.PGR_USER}&password=${this.database.PGR_PASSWORD}&ssl=true</pre>
      </div>

      <h4><a href="https://www.postgresql.org/docs/current/app-psql.html" target="_blank">psql</a> Connection Command</h4>
      <div class="info-group">
        <pre>psql -h ${this.database.CLUSTER_NAME}.${window.location.hostname} -p ${this.database.PG_FARM_REPL_PORT} -U ${this.database.PGR_USER} ${this.database.PGR_DATABASE}</pre>
      </div>

      <h4>R Connection</h4>
      <div class="info-group">
        <em>
          Using the <a href="https://cran.r-project.org/web/packages/RPostgres/index.html" target="_blank">RPostgres</a> library
        </em>
      <pre>
con <- DBI::dbConnect(
  RPostgres::Postgres(), 
  dbname = "${this.database.PGR_DATABASE}",
  host = "${this.database.CLUSTER_NAME}.${window.location.hostname}", 
  port = ${this.database.PG_FARM_REPL_PORT},
  user = "${this.database.PGR_USER}",
  password = "${this.database.PGR_PASSWORD}"
)</pre>
    </div>

    <h4>Python Connection</h4>
    <div class="info-group">
      <em>
        Using the <a href="https://pypi.org/project/psycopg2/" target="_blank">psycopg2</a> library
      </em>
      <pre>
PGHOST="${this.database.CLUSTER_NAME}.${window.location.hostname}"
PGDATABASE="${this.database.PGR_DATABASE}"
PGPORT="${this.database.PG_FARM_REPL_PORT}"
PGUSER="${this.database.PGR_USER}"
PGPASSWORD="${this.database.PGR_PASSWORD}"

conn_string = ("host={} port={} dbname={} user={} password={}") \
  .format(PGHOST, PGPORT, PGDATABASE, PGUSER, PGPASSWORD)
conn=psycopg2.connect(conn_string)

# Bonus. Read into Pandas dataframe
# sql_command = "SELECT * from {}.{} limit 10".format(SOME_SCHEMA, SOME_TABLE)
# frame = pd.read_sql(sql_command, conn)</pre>
    </div>

    <h4 style="margin-bottom: 4px">SSL</h4>
    <span class="note">Note: Only secure SSL connections are allowed to the database</span>
  </div>
</div>
`;}