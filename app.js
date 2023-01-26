const express = require("express");
const app = express();
const tasks = require("./src/routes/tasks");
const connectDB = require("./src/db/connect");
require("dotenv").config();
const notfound = require("./src/middleware/not-found");
const errorHandler = require("./src/middleware/error-handler");

// middleware
app.use(express.static("./public"));
// without the code below the task data won't be available in the request body
// parse json
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasks);

app.use(notfound);
app.use(errorHandler);

const port = process.env.PORT || 5001;

const start = async () => {
  try {
    await connectDB(process.env.APP_DB_URI);
    app.listen(port, console.log(`server is listening on port ${port}...`));
  } catch (err) {
    console.log(err);
  }
};

start();
