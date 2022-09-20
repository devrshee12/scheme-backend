const express = require("express");
const router = express.Router();
const {getAllSchemes, createScheme, getScheme, updateScheme, deleteScheme} = require("../controllers/schemes");





router.route("/").get(getAllSchemes).post(createScheme);
router.route("/:id").get(getScheme).patch(updateScheme).delete(deleteScheme);


module.exports = router;
