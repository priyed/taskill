require("./src/db/connect");
const express = require("express");
const app = express();
const tasks = require("./src/routes/tasks");

// middleware
// without the code below the task data won't be available in the request body
// parse json
app.use(express.json());

// routes
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

// app.get('/api/v1/tasks') -- get all tasks
// app.post('/api/v1/tasks') -- create task
// app.get('/api/v1/tasks/:id) -- get single task
// app.delete('/api/v1/tasks/:id') -- delete task
// app.patch('/api/v1/tasks/:id') -- update task

const port = 5001;

app.listen(port, console.log(`server is listening on port ${port}...`));
