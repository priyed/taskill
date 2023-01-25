const Task = require("../models/task");

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    const task_id = req.params.id;
    const task = await Task.findOneAnddelete({ _id: task_id });
    if (!task) {
      return res.status(404).json({ msg: `No task with that id: ${task_id}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getTask = async (req, res) => {
  try {
    const task_id = req.params.id;
    const task = await Task.findOne({ _id: task_id });
    if (!task) {
      return res.status(404).json({ msg: `No task with that id: ${task_id}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateTask = async (req, res) => {
  try {
    const task_id = req.params.id;
    const task = await Task.findOneAndUpdate({ _id: task_id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ msg: `No task with that id: ${task_id}` });
    }
    res.status(200).json({});
  } catch (error) {
    res.status(500).json(error);
  }
  res.send("update task");
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
};
