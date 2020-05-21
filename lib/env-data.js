const dotenv = require('dotenv');
const config = require('./config')
const path = require('path');
const fs = require('fs-extra');

class EnvData {

  async loadAll() {
    let clusters = fs.readdirSync(config.farm.dir)
      .filter(file => fs.lstatSync(path.join(config.farm.dir, file)).isDirectory());
    
    let data = {};
    for( let name of clusters ) {
      data[name] = await this.load(name);
    }

    return data;
  }

  async load(clusterName) {
    let contents = await fs.readFile(path.join(config.farm.dir, clusterName, '.env'), 'utf-8');
    let data = dotenv.parse(contents);
    let cleaned = {};
    for( let key of config.farm.exposedEnvVars ) {
      cleaned[key] = data[key] || '';
    }

    cleaned.DESCRIPTION = '';
    if( fs.existsSync(path.join(config.farm.dir, clusterName, 'README.md')) ) {
      cleaned.DESCRIPTION = await fs.readFile(path.join(config.farm.dir, clusterName, 'README.md'), 'utf-8');
    }

    return cleaned;
  }

}

module.exports = new EnvData();