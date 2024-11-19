const axios = require('axios');
const config = require('../../config/config.json');

const insertRequests = async (req) => {
  const insertData = req;
  const result = await axios
    .post(`${config.userPath}/insertRequests`, insertData)
    .then((response) => response.data)
    .catch((error) => error);
  return result;
};

const getAllRequests = async (req) => {
  const fetchKey = req;
  const result = await axios
    .post(`${config.userPath}/login`, fetchKey)
    .then((response) => response.data)
    .catch((error) => error);
  return result;
};

const updateMany = async (req) => {
  const updatekey = req;
  const result = await axios
    .put(`${config.userPath}/editById`, updatekey)
    .then((response) => response.data)
    .catch((error) => error);
  return result;
};

const deleteOne = async (req) => {
  const deletekey = req;
  const result = await axios
    .post(`${config.userPath}/removeById`, deletekey)
    .then((response) => response.data)
    .catch((error) => error);
  return result;
};

const getByField = async (req) => {
  const fetchKey = req;
  const result = await axios
    .post(`${config.userPath}/editById`, fetchKey)
    .then((response) => response.data)
    .catch((error) => error);
  return result;
};

module.exports = {
  insertRequests,
  getAllRequests,
  updateMany,
  deleteOne,
  getByField,
};
