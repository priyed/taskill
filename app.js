const express = require("express");
const app = express();
const tasks = require("./src/routes/tasks");
const connectDB = require("./src/db/connect");

// middleware
// without the code below the task data won't be available in the request body
// parse json
app.use(express.json());

// routes
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

const port = 5001;

const start = async () => {
  try {
    await connectDB();
    app.listen(port, console.log(`server is listening on port ${port}...`));
  } catch (err) {
    console.log(err);
  }
};

start();
