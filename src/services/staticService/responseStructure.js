const { uid } = require('uid');
const config = require('../../config/config.json');

const successResponse = (responseMessage) => ({
  result: 'Success',
  responseObj: {
    responseId: uid(),
    responseTs: `${Math.floor(Date.now() / 1000)}`,
    responseApiVersion: config.appVersion,
    responseCode: 200,
    responseMessage: 'successfully done',
    responseDataParams: {
      data: responseMessage,
    },
  },
});

const errorResponse = (errorMessage) => ({
  result: 'Error',
  responseObj: {
    responseId: uid(),
    responseTs: `${Math.floor(Date.now() / 1000)}`,
    responseApiVersion: config.appVersion,
    responseCode: 401,
    responseMessage: 'Error in Process',
    responseDataParams: {
      data: errorMessage,
    },
  },
});

const warningResponse = (warningMessage) => ({
  result: 'Warning',
  responseObj: {
    responseId: uid(),
    responseTs: `${Math.floor(Date.now() / 1000)}`,
    responseApiVersion: config.appVersion,
    responseCode: 501,
    responseMessage: 'Ran with Warnings',
    responseDataParams: {
      data: warningMessage,
    },
  },
});

const validationResponse = (validaitonMessage) => ({
  result: 'Validaiton',
  responseObj: {
    responseId: uid(),
    responseTs: `${Math.floor(Date.now() / 1000)}`,
    responseApiVersion: config.appVersion,
    responseCode: 601,
    responseMessage: 'Error in request format',
    responseDataParams: {
      data: validaitonMessage,
    },
  },
});

module.exports = {
  successResponse,
  errorResponse,
  warningResponse,
  validationResponse,
};
