const router = require("express").Router();
const usersListRoutes = require("./userList");

// Book routes
router.use("/user", usersListRoutes);

module.exports = router;
