import Navbar from "../components/Navbar";

function Home() {
  console.log(`${import.meta.env.VITE_HOST_URI}/api/auth/register`)
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background-primary)' }}>
      <Navbar />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: 'var(--foreground-primary)' }}>
              Manage Your Tasks <span style={{ color: 'var(--accent-primary)' }}>Efficiently</span>
            </h1>
            <p className="text-lg mb-8" style={{ color: 'var(--foreground-secondary)' }}>
              Stay organized, focused, and in control of your daily tasks with our powerful task management solution.
            </p>
            <button 
              className="px-8 py-3 rounded-lg transition duration-300 transform hover:scale-105"
              style={{ 
                backgroundColor: 'var(--accent-primary)',
                color: 'var(--background-primary)',
                ':hover': {
                  backgroundColor: 'var(--accent-hover)'
                }
              }}
            >
              Get Started
            </button>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://cdni.iconscout.com/illustration/premium/thumb/task-management-3428202-2902701.png" 
              alt="Task Management"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Home;
