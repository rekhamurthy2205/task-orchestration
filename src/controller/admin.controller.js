const userService = require("../services/sourceService/user.service");
const responseStructure = require("../services/staticService/responseStructure");
const axios = require("axios");

const createAdmin = async (req, res) => {
  let responseMessage;
  try {
    const insertdata = await userService.insertRequests({
      dbName: "user",
      insertData: req.body.insertObject,
    });
    (insertdata.responseObj.responseCode === 200
      ? async () => {
          responseMessage = responseStructure.successResponse({
            message: "Org ADMIN was created",
          });
          res.send(responseMessage);
        }
      : () => {
          responseMessage = responseStructure.errorResponse(
            "email already exsist"
          );
          res.send(responseMessage);
        })();
  } catch (error) {
    responseMessage = responseStructure.errorResponse("Error Please try again");
    res.send(responseMessage);
  }
};

const findAdminById = async (req, res) => {
  let responseMessage;
  try {
    const findOneData = await userService.getByField({
      table: "users",
    });
    (findOneData.responseObj.responseCode === 200
      ? async () => {
          responseMessage = responseStructure.successResponse(
            findOneData.responseObj.responseDataParams.data
          );
          res.send(responseMessage);
        }
      : () => {
          responseMessage = responseStructure.errorResponse(
            "Error in retrieve data"
          );
          res.send(responseMessage);
        })();
  } catch (error) {
    responseMessage = responseStructure.errorResponse("Error Please try again");
    res.send(responseMessage);
  }
};

const editAdminProfile = async (req, res) => {
  try {
    let responseMessage;
    try {
      const update = await userService.updateMany({
        table: "users",
        updateObj: req.body.updateData,
      });
      (update.responseObj.responseCode === 200
        ? async () => {
            responseMessage = responseStructure.successResponse({
              message: "updated Successfully",
            });
            res.send(responseMessage);
          }
        : () => {
            responseMessage = responseStructure.errorResponse(
              "Error in updating data"
            );
            res.send(responseMessage);
          })();
    } catch (error) {
      responseMessage = responseStructure.errorResponse(
        "Error Please try again"
      );
      res.send(responseMessage);
    }
  } catch (error) {}
};

const removeAdmin = async (req, res) => {
  let responseMessage;
  try {
    const data = await userService.deleteOne({
      table: "users",
    });
    (data.responseObj.responseCode === 200
      ? async () => {
          responseMessage = responseStructure.successResponse({
            message: "data deleted successfully",
          });
          res.send(responseMessage);
        }
      : () => {
          responseMessage =
            responseStructure.errorResponse("Error in deletion ");
          res.send(responseMessage);
        })();
  } catch (error) {
    responseMessage = responseStructure.errorResponse("Error Please try again");
    res.send(responseMessage);
  }
};

const dataRetrieve = async (req, res) => {
  try {
    const response = await axios.get("https://dummyjson.com/users");
    (response
      ? async () => {
          responseMessage = responseStructure.successResponse(response.data);
          res.send(responseMessage);
        }
      : () => {
          responseMessage = responseStructure.errorResponse(
            "Error in retrieve data"
          );
          res.send(responseMessage);
        })();
  } catch (error) {}
};

module.exports = {
  createAdmin,
  findAdminById,
  editAdminProfile,
  removeAdmin,
  dataRetrieve,
};
