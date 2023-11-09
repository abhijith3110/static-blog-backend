const express = require("express");
const { GetBlog, CreateBlog } = require("../Controller/controller");

const router = express.Router();

router.route("/").get(GetBlog).post(CreateBlog);

module.exports = router;
