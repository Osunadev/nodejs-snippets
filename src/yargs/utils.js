const got = require('got');
const chalk = require('chalk');

const messages = {
  error: chalk.red.bold,
  success: chalk.green,
};

const handleGetRequest = async url => {
  const { body } = await got(url);
  console.log(messages.success(body));
};

const handleBodyRequests = async (url, method, jsonBody) => {
  if (jsonBody) {
    const { body } = await got[method](url, {
      json: jsonBody,
      responseType: 'json',
    });

    console.log(messages.success(body.data));
  } else {
    console.log(messages.error('You need to provide the jsonBody!'));
  }
};

const handleHttpRequest = async ({ method, url, jsonBody }) => {
  method = method.toLowerCase();

  switch (method) {
    case 'get':
      handleGetRequest(url);
      break;
    case 'post':
    case 'put':
    case 'delete':
      handleBodyRequests(url, method, jsonBody);
      break;
    default:
      console.log(
        messages.error(`${method} is not a recongnized http method!`)
      );
  }
};

module.exports = {
  handleHttpRequest,
};
