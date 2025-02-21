import { Outlet, Link } from "react-router-dom";
import Toggel from "./Toggel";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-20 top-0 start-0` border-[color:var(--border)] bg-[color:var(--background-primary)]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-[color:var(--accent-primary)]">
            TaskManager
          </span>
        </Link>

        {/* Buttons Container */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* Sign In Button */}
          <Link to="/auth/login">
            <button
              type="button"
              className="text-[color:var(--accent-primary)] hover:text-[color:var(--background-primary)] hover:bg-[color:var(--accent-primary)] border border-[color:var(--accent-primary)] font-medium rounded-lg text-sm px-4 py-2 text-center transition-colors duration-300"
            >
              Sign In
            </button>
          </Link>

          {/* Sign Up Button */}
          <Link to="/auth/signup">
            <button
              type="button"
              className="text-[color:var(--background-primary)] bg-[color:var(--accent-primary)] hover:bg-[color:var(--accent-hover)] font-medium text-sm px-4 py-2 text-center rounded-lg transition-colors duration-300"
            >
              Sign Up
            </button>
          </Link>

          <Toggel />
        </div>
      </div>
      <Outlet />
    </nav>
  );
};

export default Navbar;
