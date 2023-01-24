const { model, Schema } = require("mongoose");

const TaskSchema = new Schema({
  name: String,
  completed: Boolean,
});

module.exports = model("Task", TaskSchema);
