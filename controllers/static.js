const express = require('express');
const path = require('path');
const fs = require('fs');
const spaMiddleware = require('@ucd-lib/spa-router-middleware');
const config = require('../lib/config');
const envData = require('../lib/env-data');

const loaderPath = path.join(config.client.dir, 'loader', 'loader.js');
const loaderSrc = fs.readFileSync(loaderPath, 'utf-8');
const bundle = `
  <script>
    var CORK_LOADER_VERSIONS = {
      loader : '${config.client.versions.loader}',
      bundle : '${config.client.versions.bundle}'
    }
  </script>
  <script>${loaderSrc}</script>`;

module.exports = (app) => {
  console.log('Serving assets from: '+config.client.dir);

  /**
   * Setup SPA app routes
   */
  spaMiddleware({
    app: app, 
    htmlFile : path.join(config.client.dir, 'index.html'),
    isRoot : true, 
    appRoutes : config.client.routes, 
    getConfig : async (req, res, next) => {
      next({
        databases : await envData.loadAll(),
        appRoutes : config.client.appRoutes
      });
    },
    template : async (req, res, next) => {
      next({bundle});
    }
  });

  /**
   * Setup static asset dir
   */
  app.use(express.static(config.client.dir));
}