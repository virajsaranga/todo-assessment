const { getPool, sql } = require("../db");

// Get latest 5 tasks (not completed)
exports.getTasks = async (req, res) => {
  try {
    const pool = await getPool();
    const result = await pool.request()
      .query("SELECT TOP 5 * FROM task WHERE isCompleted = 0 ORDER BY createdAt DESC");
    res.json(result.recordset);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create new task
exports.createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const pool = await getPool();
    await pool.request()
      .input("title", sql.NVarChar, title)
      .input("description", sql.NVarChar, description)
      .query("INSERT INTO task (title, description) VALUES (@title, @description)");
    res.status(201).json({ message: "Task created successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Mark task as done
exports.markDone = async (req, res) => {
  try {
    const id = req.params.id;
    const pool = await getPool();
    await pool.request()
      .input("id", sql.Int, id)
      .query("UPDATE task SET isCompleted = 1 WHERE id = @id");
    res.json({ message: "Task marked as completed" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

