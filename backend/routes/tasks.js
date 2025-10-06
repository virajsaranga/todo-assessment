const express = require("express");
const router = express.Router();
const tasksController = require("../controllers/tasksController");

// Routes
router.get("/", tasksController.getTasks);
router.post("/", tasksController.createTask);
router.put("/:id/done", tasksController.markDone);

module.exports = router;
