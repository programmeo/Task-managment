import { useState, useContext } from "react";
import { useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash, FaSearch } from "react-icons/fa"; // Make sure to install react-icons

function Card({ isTask, showForm, setEditTask }) {
  const [tasks, setTasks] = useState([]);
  const [res, setRes] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All categories");

  //detch data from DB
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`${import.meta.env.VITE_HOST_URI}/api/task/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        setTasks(data.data);
        setRes("");
      });
  }, [isTask, res]);

  //Handle delete function
  const handleDelete = (e, id) => {
    axios
      .delete(`${import.meta.env.VITE_HOST_URI}/api/task/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((data) => {
        console.log(data.message);
        setRes(data.message);
      });
  };

  //Hande Update Function
  const handleUpdate = async (data) => {
    setEditTask(data); // Set the task to be edited
    showForm(true);
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-500";
      case "pending":
        return "bg-amber-500";
      case "progress":
        return "bg-sky-500";
      default:
        return "bg-gray-500";
    }
  };

  const filteredTasks = tasks.filter(task => {
    return task.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
           task.description.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div>
      <div className="mb-6 m-10">
        <form className="max-w-lg mx-auto">
          <div className="flex">
            <button 
              id="dropdown-button" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("dropdown").classList.toggle("hidden");
              }}
              className="shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-[var(--foreground-primary)] bg-[var(--background-secondary)] border border-[var(--border)] rounded-s-lg hover:bg-[var(--accent-secondary)] hover:text-white focus:ring-2 focus:ring-[var(--accent-primary)]" 
              type="button"
            >
              {selectedCategory}
              <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
              </svg>
            </button>
            <div id="dropdown" className="z-10 hidden absolute mt-12 bg-[var(--background-secondary)] divide-y divide-[var(--border)] rounded-lg shadow-md w-44">
              <ul className="py-2 text-sm text-[var(--foreground-primary)]">
                {["All categories", "completed", "progress", "pending"].map((category) => (
                  <li key={category}>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCategory(category);
                        document.getElementById("dropdown").classList.add("hidden");
                      }}
                      className="inline-flex w-full px-4 py-2 hover:bg-[var(--accent-secondary)] hover:text-white"
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative w-full">
              <input 
                type="search" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block p-2.5 w-full z-20 text-sm text-[var(--foreground-primary)] bg-[var(--background-secondary)] rounded-e-lg border border-[var(--border)] focus:ring-2 focus:ring-[var(--accent-primary)] placeholder-[var(--foreground-secondary)]" 
                placeholder="Search tasks..." 
              />
              <button 
                type="submit"
                onClick={(e) => e.preventDefault()} 
                className="absolute top-0 end-0 p-2.5 h-full text-white bg-[var(--accent-primary)] rounded-e-lg border border-[var(--accent-primary)] hover:bg-[var(--accent-hover)] focus:ring-2 focus:ring-[var(--accent-primary)]"
              >
                <FaSearch className="w-4 h-4" />
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {filteredTasks.filter(task => 
          selectedCategory === "All categories" || 
          task.status.toLowerCase() === selectedCategory.toLowerCase()
        ).map((task) => (
          <div
            key={task._id}
            className="bg-[var(--background-secondary)] rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-[var(--foreground-primary)]">
                {task.name}
              </h3>
              <div className="flex items-center gap-2">
                <span
                  className={`w-3 h-3 rounded-full ${getStatusColor(
                    task.status
                  )}`}
                ></span>
                <span className="text-sm text-[var(--foreground-secondary)]">
                  {task.status}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-4">
              <p className="text-[var(--foreground-secondary)] text-sm line-clamp-3">
                {task.description}
              </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
              <span className="text-sm text-[var(--foreground-secondary)]">
                Due: {new Date(task.date).toLocaleDateString()}
              </span>
              <div className="flex gap-3">
                <button
                  onClick={() =>
                    handleUpdate({
                      id: task._id,
                      name: task.name,
                      description: task.description,
                      status: task.status,
                      date: task.date,
                    })
                  }
                  className="text-[var(--accent-primary)] hover:text-[var(--accent-hover)] transition-colors"
                >
                  <FaEdit size={18} />
                </button>
                <button
                  onClick={(e) => handleDelete(e, task._id)}
                  className="text-[var(--error)] hover:opacity-80 transition-opacity"
                >
                  <FaTrash size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
