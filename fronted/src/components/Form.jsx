import { useState, useEffect } from "react";
import axios from "axios";

function TaskForm({ onClose, editTask }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    status: "pending",
    date: "",
  });

  // Populate form when editTask changes
  useEffect(() => {
    if (editTask) {
      setFormData({
        name: editTask.name,
        description: editTask.description,
        status: editTask.status,
        date: editTask.date.split("T")[0], // Format date for input
      });
    }
  }, [editTask]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const url = `${import.meta.env.VITE_HOST_URI}/api/task${editTask ? `/${editTask.id}` : ''}`;
    
    try {
      if (editTask) {
        // Update existing task
        await axios.put(url, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } else {
        // Create new task
        await axios.post(url, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
      onClose();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-[var(--background-secondary)] p-6 rounded-lg w-full max-w-md border border-[var(--border)]">
        <h2 className="text-2xl font-bold mb-4 text-[var(--accent-primary)]">
          {editTask ? 'Edit Task' : 'Add New Task'}
        </h2>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="space-y-4">
            <div>
              <label className="block text-[var(--foreground-secondary)] mb-1">
                Title
              </label>
              <input
                type="text"
                className="w-full p-2 rounded border border-[var(--border)] bg-[var(--background-primary)]"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label className="block text-[var(--foreground-secondary)] mb-1">
                Description
              </label>
              <textarea
                className="w-full p-2 rounded border border-[var(--border)] bg-[var(--background-primary)]"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                rows="3"
                required
              />
            </div>
            <div>
              <label className="block text-[var(--foreground-secondary)] mb-1">
                Status
              </label>
              <select
                className="w-full p-2 rounded border border-[var(--border)] bg-[var(--background-primary)]"
                value={formData.status}
                onChange={(e) => {
                  setFormData({ ...formData, status: e.target.value });
                  console.log(e.target.value);
                }}
              >
                <option value="pending">pending</option>
                <option value="progress">progress</option>
                <option value="completed">completed</option>
              </select>
            </div>
            <div>
              <label className="block text-[var(--foreground-secondary)] mb-1">
                Date
              </label>
              <input
                type="date"
                className="w-full p-2 rounded border border-[var(--border)] bg-[var(--background-primary)]"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                required
              />
            </div>
          </div>
          <div className="flex gap-2 mt-6">
            <button
              type="submit"
              className="px-4 py-2 bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] text-white rounded"
            >
              {editTask ? 'Edit Task' : 'Add Task'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-[var(--foreground-secondary)] hover:opacity-90 text-white rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
