import { useState } from "react";
import Form from "./components/form/Form";
import Task from "./components/task/Task";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (task.trim() === "") {
      alert("Agrega una tarea...");
      return;
    }

    const newTask = {
      id: Math.floor(Math.random() * 999999),
      task: task,
      state: false,
    };

    const totalTask = [...tasks, newTask];
    setTasks(totalTask);
    setTask("");
  };

  const deleteTask = (id) => {
    const filtredTask = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(filtredTask);
  };

  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="container mx-auto p-4">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">
              Bloc de Notas
            </h1>
            <Form handleChange={handleChange} task={task} addTask={addTask} />
            {tasks.map((task) => (
              <Task
                key={task.id}
                id={task.id}
                task={task}
                deleteTask={deleteTask}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
