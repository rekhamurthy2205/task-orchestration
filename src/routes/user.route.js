const router = require("express").Router();
const validation = require("../services/validation/user/user.validation");
const adminToken = require("../middleware/token_validation/admin");
const verifyToken = require("../middleware/token_validation/token_validation");
const userController = require("../controller/user.controller");

router.post("/userreg", validation.insertData, userController.registerRequests);

router.post("/userlogin", validation.loginData, userController.LoginRequests);

router.get(
  "/readuserdata/:id",
  verifyToken.verifyToken,
  validation.readSingleData,
  userController.getUserData
);

router.get(
  "/readallusers",
  adminToken.verifyAdminToken,
  userController.readAllUserData
);

router.put(
  "/edituser/:id",
  verifyToken.verifyToken,
  validation.updateData,
  userController.editUserProfile
);

router.delete(
  "/removeuser/:id",
  verifyToken.verifyToken,
  userController.deleteUserAccount
);
module.exports = router;
