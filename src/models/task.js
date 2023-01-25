const { model, Schema } = require("mongoose");

const TaskSchema = new Schema({
  name: {
    type: String,
    required: [true, "name must be provided"],
    trim: true,
    maxlength: [20, "name cannot be more than 20 characters"],
  },
  completed: { type: Boolean, default: false },
});

module.exports = model("Task", TaskSchema);
// task schema is converted into a model
// the instance of a model is called a document
