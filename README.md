# pg-farm-webapp

Homepage for PG Farm <https://pg-farm.library.ucdavis.edu>

## Set-up Instructions

### Development Only

1. Open a Terminal from the root directory and run `docker-compose -f docker-compose-dev.yaml up`.
2. Open a new Terminal window and run `docker-compose -f docker-compose-dev.yaml exec server bash`.
3. Run `node server.js` from the same Terminal.
4. Open a new Terminal window and run `npm run watch`.
