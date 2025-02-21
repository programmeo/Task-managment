import { useState } from "react";
import TaskForm from "../components/Form";
import Card from "../components/Card";
import NavbarDash from "../components/NavbarDash";

function DashBoard() {
  const [showForm, setShowForm] = useState(false);
  const [editTask, setEditTask] = useState(null);

  return (
    <div>
      <div
        className={`min-h-screen bg-[var(--background-primary)] ${
          showForm ? "blur-sm bg-[var(--card-bg)] opacity-100" : ""
        }`}
      >
        <NavbarDash showForm={showForm} setShowForm={setShowForm} />
        <Card 
          isTask={showForm} 
          showForm={setShowForm} 
          setEditTask={setEditTask}
        />
      </div>
      {showForm && (
        <TaskForm 
          onClose={() => {
            setShowForm(false);
            setEditTask(null);
          }} 
          editTask={editTask}
        />
      )}
    </div>
  );
}

export default DashBoard;
