const express = require("express");
const cors = require("cors");
const blogRouter = require("./routes/blogRoutes");
const Port = 8080;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", blogRouter);

app.listen(Port, () => {
  console.log(`App running on the port ${Port}`);
});
