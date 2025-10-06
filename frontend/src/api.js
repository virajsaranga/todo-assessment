const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:4000/api";

export async function fetchTasks() {
  const res = await fetch(`${API_BASE}/tasks`);
  if (!res.ok) throw new Error("Failed to fetch tasks");
  return res.json();
}

export async function createTask(payload) {
  const res = await fetch(`${API_BASE}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Failed to create task");
  return res.json();
}

export async function completeTask(id) {
  const res = await fetch(`${API_BASE}/tasks/${id}/complete`, {
    method: "PUT",
  });
  if (!res.ok) throw new Error("Failed to mark complete");
  return res.json();
}
