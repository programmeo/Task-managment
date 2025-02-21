const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
const auth = require("../middleware/auth");

//create task
router.post("/", auth, async (req, res) => {
  try {
    const { name, description, status, date } = req.body;
    const task = new Task({
      name,
      description,
      status,
      date,
      owner: req.user.id,
    });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: "Failed to create event", details: error });
  }
});

//read task
router.get("/", auth, async (req, res) => {
  try {
    const task = await Task.find({ owner: req.user.id });
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: "Failed to create event", details: error });
  }
});

//delete task
router.delete("/:id", auth, async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findByIdAndDelete(id);
    if (!task)
      return res.status(404).json({ message: `Item with id ${id} not found.` });
    res.status(200).json({ message: "Task Deleted" });
  } catch (error) {
    res.status(400).json({ error: "Failed to create event", details: error });
  }
});

//update data
router.put("/:id", auth, async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = req.body;
    const task = await Task.findByIdAndUpdate(id, updateData, { new: true });
    if (!task) {
      return res.status(404).json({ message: "task not found" });
    }

    return res.status(200).json({
      message: "User updated successfully",
      updatedUser: task,
    });
  } catch (error) {
    res.status(400).json({ error: "Failed to update event", details: error });
  }
});

module.exports = router;
