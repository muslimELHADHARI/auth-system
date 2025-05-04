const express = require("express")
const router = express.Router()
const userController = require("../controllers/user.controller")
const { protect } = require("../middleware/auth.middleware")

// All routes are protected
router.use(protect)

router.get("/me", userController.getCurrentUser)
router.put("/profile", userController.updateProfile)

module.exports = router
