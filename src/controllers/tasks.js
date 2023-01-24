const createTask = (req, res) => {
  const task = req.body;
  res.json(task);
};

const deleteTask = (req, res) => {
  res.send("delete task");
};

const getAllTasks = (req, res) => {
  res.send("get all tasks");
};

const getTask = (req, res) => {
  const {
    params: { id },
  } = req;
  res.json({ id });
};

const updateTask = (req, res) => {
  res.send("update task");
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
};
