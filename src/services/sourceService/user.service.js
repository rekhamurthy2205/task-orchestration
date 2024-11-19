const axios = require("axios");
const config = require("../../config/config.json");
const { loggers } = require("winston");
const log = require("../staticService/logger").LOG;

const insertRequests = async (req) => {
  try {
    const insertData = req;
    const result = await axios
      .post(`${config.userPath}/v1/register`, insertData)
      .then((response) => {
        log.info("successfully performed insertRequests");
        return response.data;
      })
      .catch((error) => {
        const errorInfo = {
          StatusCode: 501,
          message: "unable to perform insert request",
        };
        log.error("error in api fetch.please try again");
        return errorInfo;
      });
    return result;
  } catch (error) {
    return error;
  }
};

const getAllRequests = async (req) => {
  try {
    const insertData = req;
    const result = await axios
      .post(`${config.userPath}/v1/login`, insertData)
      .then((response) => {
        log.info("successfully performed getOneRequests");
        return response.data;
      })
      .catch((error) => {
        const errorInfo = {
          responseObj: {
            responseCode: 501,
            message: "unable to perform getOne request",
          },
        };
        log.error("error in api fetch.please try again");
        return errorInfo;
      });
    return result;
  } catch (error) {
    return error;
  }
};

const getEmailRequests = async (req) => {
  try {
    const insertData = req;
    const result = await axios
      .post(`${config.utilPath}/sendmail`, insertData)
      .then((response) => {
        log.info("successfully performed getOneRequests");
        return response.data;
      })
      .catch((error) => {
        const errorInfo = {
          responseObj: {
            responseCode: 501,
            message: "unable to perform getOne request",
          },
        };
        log.error("error in api fetch.please try again");
        return errorInfo;
      });
    return result;
  } catch (error) {
    return error;
  }
};

const getOneRequests = async (req) => {
  try {
    const fetchKey = req;
    const result = await axios
      .post(`${config.userPath}/v1/readsinglerequests`, fetchKey)
      .then((response) => {
        log.info("successfully performed getOneRequests");
        return response.data;
      })
      .catch((error) => {
        const errorInfo = {
          responseObj: {
            responseCode: 501,
            message: "unable to perform getOne request",
          },
        };
        log.error("error in api fetch.please try again");
        return errorInfo;
      });
    return result;
  } catch (error) {
    return error;
  }
};

const readAllRequests = async (req) => {
  try {
    const fetchKey = req;
    const result = await axios
      .post(`${config.userPath}/v1/readrequests`, fetchKey)
      .then((response) => {
        log.info("successfully performed getRequests");
        return response.data;
      })
      .catch((error) => {
        const errorInfo = {
          responseObj: {
            responseCode: 501,
            message: "unable to perform getOne request",
          },
        };
        log.error("error in api fetch.please try again");
        return errorInfo;
      });
    return result;
  } catch (error) {
    return error;
  }
};

const updateRequests = async (req) => {
  try {
    const insertData = req;
    const result = await axios
      .post(`${config.userPath}/v1/editrequest`, insertData)
      .then((response) => {
        log.info("successfully performed getRequests");
        return response.data;
      })
      .catch((error) => {
        const errorInfo = {
          responseObj: {
            responseCode: 501,
            message: "unable to perform getOne request",
          },
        };
        log.error("error in api fetch.please try again");
        return errorInfo;
      });
    return result;
  } catch (error) {
    return error;
  }
};

const removeOneRequests = async (req) => {
  try {
    const fetchKey = req;
    const result = await axios
      .post(`${config.userPath}/v1/deleterequest`, fetchKey)
      .then((response) => {
        log.info("successfully performed deleterequest");
        return response.data;
      })
      .catch((error) => {
        const errorInfo = {
          responseObj: {
            responseCode: 501,
            message: "unable to perform getOne request",
          },
        };
        log.error("error in api fetch.please try again");
        return errorInfo;
      });
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = {
  insertRequests,
  getAllRequests,
  getEmailRequests,
  getOneRequests,
  readAllRequests,
  updateRequests,
  removeOneRequests,
};
