import PropTypes from "prop-types";

const Form = ({ handleChange, addTask, task }) => {
  return (
    <form className="mb-6" onSubmit={addTask}>
      <div className="flex items-center border-b border-indigo-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          value={task}
          placeholder="Escribe una nota..."
          aria-label="Full name"
          onChange={handleChange}
        />
        <button
          className="flex-shrink-0 bg-indigo-500 hover:bg-indigo-700 border-indigo-500 hover:border-indigo-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="submit"
        >
          Añadir
        </button>
      </div>
    </form>
  );
};

export default Form;

Form.propTypes = {
  handleChange: PropTypes.string,
  addTask: PropTypes.func,
  task: PropTypes.string,
};
