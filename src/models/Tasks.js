const mongoose = require("mongoose");

const tasksSchema = mongoose.Schema(
  {
    taskName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * @typedef Tasks
 */
const Tasks = mongoose.model("Task", tasksSchema);

module.exports = Tasks;
