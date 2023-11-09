const fs = require("fs");
const blogData = "blog.json";
const { v4: uuidv4 } = require("uuid");
const moment = require("moment");

function readBlogData() {
  try {
    const data = fs.readFileSync(blogData, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

function writeBlogData(blog) {
  const data = JSON.stringify(blog, null, 2);
  fs.writeFileSync(blogData, data);
}

//get all data
const GetBlog = (req, res) => {
  const getBlog = readBlogData();
  res.json(getBlog);
};

//create an blog
const CreateBlog = (req, res) => {
  const createBlog = readBlogData();
  const newBlog = req.body;
  newBlog.id = uuidv4();
  newBlog.date = moment().format("MMMM Do YYYY, h:mm:ss a");
  createBlog.push(newBlog);
  writeBlogData(createBlog);

  res.status(201).json({ message: "blogcreated successfully" });
};

module.exports = {
  GetBlog,
  CreateBlog,
};
