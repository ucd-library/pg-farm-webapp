const env = process.env;
const path = require('path');

const clientEnv = env.CLIENT_ENV || 'dev';
if( !['prod', 'dev'].includes(clientEnv) ) {
  throw new Error('Unknown client env: '+clientEnv);
}
const clientDir = path.resolve(__dirname, '..', 'client', clientEnv === 'prod' ? 'dist' : 'public');
let clientPackage = require('../client/public/package.json');

module.exports = {
  server : {
    port : env.PORT || '3000',
  },
  client : {
    env : clientEnv,
    dir : clientDir,
    routes : ['/'],
    versions : {
      bundle : clientPackage.version,
      loader : clientPackage.dependencies['@ucd-lib/cork-app-load'].replace(/^\D/, '')
    }
  },
  farm : {
    dir : env.PG_FARM_ROOT_DIR || '/opt/pg-farm',
    exposedEnvVars : ['CLUSTER_NAME', 'PG_VERSION', 'PG_FARM_VERSION', 'PG_FARM_REPL_PORT',
    'PG_FARM_PGR_PORT', 'PG_FARM_CONTROLLER_PORT', 'PGR_SCHEMA', 'PGR_DATABASE', 'PGR_USER',
    'PGR_PASSWORD', 'PGR_URL', 'THEME', 'ABSTRACT']
  }
}