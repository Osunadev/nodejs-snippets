const yargs = require('yargs');

const { handleHttpRequest } = require('./utils.js');

yargs.version('1.0.0');

yargs.usage('Usage: node $0 http --method-"get" --url="..."');

// The '$0' key of the argv object is the path of this
// file when it was executed

yargs.command({
  command: 'http',
  describe: 'Make an http request',
  builder: {
    method: {
      describe: 'Http method to be used int the http request',
      demandOption: true,
      type: 'string',
    },
    url: {
      describe: 'Url to be used for the http request',
      demandOption: true,
      type: 'string',
    },
    jsonBody: {
      describe: 'The json body to be sent to the server',
      type: 'string',
    },
  },
  handler: handleHttpRequest,
});

// To start the parsing procces of cli arguments
yargs.parse();
