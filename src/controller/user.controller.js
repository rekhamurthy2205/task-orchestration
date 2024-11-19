const userService = require("../services/sourceService/user.service");
const responseStructure = require("../services/staticService/responseStructure");
const jwt = require("jsonwebtoken");
const { log } = require("winston");

const getUserData = async (req, res) => {
  let responseMessage;
  try {
    const findOneData = await userService.getOneRequests({
      id: req.params.id,
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

const readAllUserData = async (req, res) => {
  let responseMessage;
  try {
    const findOneData = await userService.readAllRequests();
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

const editUserProfile = async (req, res) => {
  try {
    let responseMessage;
    try {
      const update = await userService.updateRequests({
        id: req.params.id,
        updateObject: req.body.updateData,
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

const deleteUserAccount = async (req, res) => {
  let responseMessage;
  try {
    const data = await userService.removeOneRequests({
      id: req.params.id,
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

const registerRequests = async (req, res) => {
  let responseMessage;
  try {
    const insertdata = await userService.insertRequests({
      dbName: "user",
      insertObject: req.body.insertObject,
    });
    (insertdata.responseObj.responseCode === 200
      ? async () => {
          responseMessage = responseStructure.successResponse({
            message: "Register successfully",
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

const LoginRequests = async (req, res) => {
  let responseMessage;
  try {
    const insertdata = await userService.getAllRequests({
      insertObject: req.body.insertObject,
    });
    (insertdata.responseObj.responseCode === 200
      ? async () => {
          var user = insertdata.responseObj.responseDataParams.data.user;

          const token = jwt.sign({ id: user }, "your_jwt_secret", {
            expiresIn: "1h",
          });
          if (token) {
            var emailTrigger = await userService.getEmailRequests({
              to: req.body.insertObject.email,
            });
            (emailTrigger.responseObj.responseCode === 200
              ? async () => {
                  const responseMessage = responseStructure.successResponse(
                    "otp is send to your mailid"
                  );
                  res.status(200).send({ ...responseMessage, token });
                }
              : () => {
                  const responseMessage = responseStructure.errorResponse(
                    "check email and password"
                  );
                  res.status(200).send({ ...responseMessage, token });
                })();
          } else {
            const responseMessage = responseStructure.errorResponse(
              "Error In token generation"
            );
            return res.status(400).send(responseMessage);
          }
        }
      : () => {
          responseMessage = responseStructure.errorResponse("Error In Login");
          res.send(responseMessage);
        })();
  } catch (error) {
    responseMessage = responseStructure.errorResponse("Error Please try again");
    res.send(responseMessage);
  }
};

module.exports = {
  getUserData,
  registerRequests,
  LoginRequests,
  readAllUserData,
  editUserProfile,
  deleteUserAccount,
};
