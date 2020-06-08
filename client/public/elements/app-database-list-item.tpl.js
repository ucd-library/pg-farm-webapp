import { html } from 'lit-element';

export default function render() { 
return html`

<style>
  :host {
    display: block;
    padding: 30px;
  }

  a {
    cursor: pointer;
    color: var(--ucd-blue);
    font-weight: bold;
    text-decoration: underline;
  }

  p {
    margin: 8px 0;
    line-height: 23px;
  }

  pre {
    color: #eee;
    background-color: #333;
    overflow: auto;
  }

  h2 {
    margin-top: 0;
    font-size: 28px;
    color: #191919;
  }
  h3 {
    margin-top: 24px;
    margin-bottom: 4px;
    font-size: 18px;
    color: #191919;
  }
  h4 {
    margin-bottom: 5px;
  }

  #description {
    display: flex;
    flex-direction: row;
    margin: 8px 0;
    line-height: 23px;
  }

  #content-wrapper {
    display: flex;
    flex-direction: row;
  }

 .content {
    margin-right: 20px;
  }

  .image {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    border-radius: 50%;
    width: 75px !important;
    height: 70px;
    background-color: #008EAA;
  }

  .image .icon {
    margin: 0 auto;
    height: 40px;
  }

  iron-icon.description {
    padding-right: 4px;
    color: #B3C1D1;
    font-size: 24px;
  }

  .info-group {
    font-size: 16px;
    color: #191919;
  }

  .info-group > div {
    margin: 6px 0;
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

  h3 > iron-icon {
    font-size: 24px;
    color: #FFBF00;
    transform: rotate(-90deg);
    cursor: pointer;
  }

  .connection-examples {
    border-left: 2px solid var(--ucd-blue);
    padding-left: 13px;
  }
</style>  

<div id="content-wrapper">
  <div class="content">
    <div class="left-side-content">
      <h2>${this.database.CLUSTER_NAME}</h2>
    
      <!--- Description --->
      <p>
        4km grid, 10 year average weather data for Pacific 
        northwest. Used by the Poplar Model web application.
      </p>

      <div 
        ?hidden="${!this.database.DESCRIPTION}" 
        class="description"
        id="description">
      </div>

      <div>
        <iron-icon class="description" icon="description"></iron-icon>
          <a href="">
            View Documentation
          </a>
        </div>
      </div>
    </div>
    <div class="image">
      <img class="icon" src="/images/cloud-sun-solid.svg">
    </div>
  </div>

  <h3>Rest API Access via <a href="http://postgrest.org/en/v7.0.0/api.html" target="_blank">PostgREST</a></h3>
  <div class="info-group">
    <div>PostgREST URL: <a href="${this.database.PGR_URL}" target="_blank">${this.database.PGR_URL}</a></div>
    <div>
      API Playground via Swagger.io: <a href="https://editor.swagger.io/?url=${this.database.PGR_URL}">API Playground</a></div>
    </div>
  </div>

  <h3>Database Connection Information</h3>
  <div class="info-group">
    <div>
      <em>
        PostgreSQL Version: ${this.database.PG_VERSION}
      </em>
    </div>
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
  </div>

  <h3>
    <iron-icon class="arrow-drop-down" icon="arrow-drop-down"></iron-icon>
    <a @click="${this._onConnectionToggleClicked}" class="connection-examples-toggle">
      Connection Examples
    </a>
  </h3>
  <div ?hidden="${!this.connectionHelpOpen}" class="connection-examples">
    <h4>JDBC Connection String</h4>
    <div class="info-group">
      <pre>  jdbc:postgresql://${this.database.CLUSTER_NAME}.${window.location.hostname}:${this.database.PG_FARM_REPL_PORT}/${this.database.PGR_DATABASE}?user=${this.database.PGR_USER}&password=${this.database.PGR_PASSWORD}&ssl=true</pre>
    </div>

    <h4><a href="https://www.postgresql.org/docs/current/app-psql.html" target="_blank">psql</a> Connection Command</h4>
    <div class="info-group">
      <pre>  psql -h ${this.database.CLUSTER_NAME}.${window.location.hostname} -p ${this.database.PG_FARM_REPL_PORT} -U ${this.database.PGR_USER} ${this.database.PGR_DATABASE}</pre>
    </div>

    <h4>R Connection</h4>
    <div class="info-group">
      <div>Using the <a href="https://cran.r-project.org/web/packages/RPostgres/index.html" target="_blank">RPostgres</a> library</div>
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
      <div>Using the <a href="https://pypi.org/project/psycopg2/" target="_blank">psycopg2</a> library</div>
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

    <h4>SSL</h4>
    <div>Note: Only secure SSL connections are allowed to the database</div>
  </div>
</div>
`;}