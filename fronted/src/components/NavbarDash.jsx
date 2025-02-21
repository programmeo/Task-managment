
import { FaPlus } from "react-icons/fa";
import Toggel from "../components/Toggel";

function NavbarDash({ showForm, setShowForm }) {
  return (
    <div>
      <nav
        className={`bg-[var(--background-secondary)] shadow-md px-4 py-3 ${
          showForm ? "blur-sm bg-[var(--card-bg)] opacity-100" : ""
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold text-[var(--foreground-primary)]">
              TaskManager
            </h1>
          </div>
          <div>
            <span className="text-[var(--foreground-secondary)]">
              Dashboard
            </span>
          </div>
          <div className="flex gap-5">
            <button
              onClick={() => setShowForm(true)}
              className="flex items-center gap-2 px-4 py-2 bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] text-white rounded text-xs"
            >
              <FaPlus />
              Add Task
            </button>

            <Toggel />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarDash;
