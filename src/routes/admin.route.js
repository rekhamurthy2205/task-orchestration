const router = require("express").Router();
const validation = require("../services/validation/user/user.validation");
const adminController = require("../controller/admin.controller");
const adminToken = require("../middleware/token_validation/admin");

router.post(
  "/createadmin",
  adminToken.verifyAdminToken,
  validation.insertData,
  adminController.createAdmin
);

router.get(
  "/viewjson",
  adminToken.verifyAdminToken,
  adminController.dataRetrieve
);

module.exports = router;
