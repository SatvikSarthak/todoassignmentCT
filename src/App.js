import TodoInput from "./components/TodoInput";
import "./App.css";
import { useEffect, useState , useRef } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");
  const isFirstLoad = useRef(true); 
  const handleAddTask = (data) => {
    const newTask = {
      id: Date.now(),
      text: data,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  useEffect(() => {
    try {
      const storedTasks = localStorage.getItem("tasks");
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.log("failed to parse data");
    }
  }, []);
 
  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false; 
      return;
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleRemoveTask = (id) => {
    const taskToDelete = tasks.find((task) => task.id === id);
    setTasks(tasks.filter((task) => task.id !== id));
    console.log(taskToDelete);
  };

  const handleTaskCompletion = (taskToUpdate) => {
    const updatedTask = tasks.map((task) =>
      task.id === taskToUpdate.id
        ? { ...task, completed: !task.completed }
        : task
    );
    console.log(updatedTask);
    if (updatedTask) {
      setTasks(updatedTask);
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (filterStatus === "Completed") return task.completed;
    if (filterStatus === "Pending") return !task.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold mb-8 text-teal-400 drop-shadow-lg">
        To-Do List
      </h1>

      <div className="w-full max-w-xl bg-gray-800 rounded-xl shadow-lg p-8">
        <TodoInput onAddTask={handleAddTask} />

        <div className="flex items-center justify-between px-4 py-4">
          <h6 className="text-[20px] text-[#F5F5DC] font-thin">
            Total Tasks: {tasks.length}
          </h6>

          <select
            className="bg-teal-700 text-white text-sm px-3 py-1 rounded shadow-md"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
          </select>
        </div>

        <ul className="mt-6 space-y-4">
          {filteredTasks.length === 0 && (
            <p className="text-gray-400 text-center mt-8">
              No tasks to show under selected filter.
            </p>
          )}
          {filteredTasks.map((task) => (
            <li
              key={task.id}
              className={`flex items-center justify-between p-4 rounded-md transition-colors duration-300
                ${
                  task.completed
                    ? "bg-teal-700 line-through text-gray-300"
                    : "bg-teal-900 hover:bg-teal-800 text-white"
                }
              `}
            >
              <div className="flex items-center space-x-4">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleTaskCompletion(task)}
                  className="w-5 h-5 border-2 bg-[#F5F5DC] text-teal-400  rounded focus:ring-teal-300 border-gray-600"
                />
                <span className="text-lg">{task.text}</span>
              </div>
              <p>Status: {task.completed ? "Completed" : "Pending"}</p>
              <button
                onClick={() => handleRemoveTask(task.id)}
                className="bg-red-600 hover:bg-red-700 transition-colors duration-200 text-white px-3 py-1 rounded-md font-semibold shadow-md"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        <button
          className="mt-6 font-light text-red-400 p-1 text-sm hover:bg-red-500 hover:text-[#ffffff] border-[0.5px] rounded"
          onClick={() => {
            setTasks([]);
            localStorage.removeItem("tasks");
          }}
        >
          Clear all tasks
        </button>
      </div>
    </div>
  );
}

export default App;
