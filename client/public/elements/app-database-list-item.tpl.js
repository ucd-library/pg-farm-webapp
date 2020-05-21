import { html } from 'lit-element';

export default function render() { 
return html`

<style>
  :host {
    display: block;
    padding: 10px;
    margin: 20px 15px;
    border: 1px solid #eee;
    box-shadow: 0 0 3px #555;
    border-radius: 3px;
  }

  pre {
    color: #eee;
    background-color: #333;
    overflow: auto;
  }

  h2 {
    margin-top: 0;
  }
  h3 {
    margin-bottom: 5px;
  }
  h4 {
    margin-bottom: 5px;
  }

  .info-group {
    margin-left: 15px;
  }

  .connection-examples {
    border-left: 2px solid var(--ucd-blue);
    padding-left: 13px;
  }

  table {
    margin-top: 15px;
    border-collapse: collapse;
  }
  table tr td {
    padding-bottom: 3px;
  }
  table tr td:nth-child(2) {
    padding-left: 10px;
    color: var(--ucd-blue)
  }

  a {
    cursor: pointer;
    color: var(--ucd-blue);
  }
</style>  

<div>
  <h2>${this.database.CLUSTER_NAME}</h2>

  <div 
    ?hidden="${!this.database.DESCRIPTION}" 
    class="description"
    id="description">
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
    <div>PostgreSQL Version: ${this.database.PG_VERSION}</div>
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

  <h3><a @click="${this._onConnectionToggleClicked}" class="connection-examples-toggle">Connection Examples</a></h3>
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