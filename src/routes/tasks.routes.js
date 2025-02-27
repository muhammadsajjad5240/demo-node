const express = require("express");
const validate = require("../middlewares/validate");
const taslValidations = require("../validations/tasks.validation");
const taskController = require("../controllers/task.controller");

const router = express.Router();

router.post(
  "/add",
  validate(taslValidations.createTask),
  taskController.createTask
);
router.get("/all", taskController.getAllTasks);

router
  .route("/:taskId")
  .patch(validate(taslValidations.updateTask), taskController.updateTask)
  .delete(validate(taslValidations.deleteTask), taskController.deleteTask);

module.exports = router;
