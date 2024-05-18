import { useState } from "react";
import PropTypes from "prop-types";

const Task = ({ task, deleteTask }) => {
  const [state, setState] = useState(false);

  const styleTask = state ? "line-through text-gray-300" : "text-gray-700";

  return (
    <div className="divide-y divide-gray-200">
      <div className="py-4 flex items-center justify-between">
        <span className={`${styleTask}`} onClick={() => setState(!state)}>
          Nota: {task.task}
        </span>
        <button
          className="text-red-500 hover:text-red-700"
          onClick={() => deleteTask(task.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Task;

Task.propTypes = {
  task: PropTypes.string,
  deleteTask: PropTypes.func,
};
