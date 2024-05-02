import { useState } from "react";

const Button = () => {
  const [darkMode, setDarkMode] = useState(false);

  const text = darkMode ? "Cambiar a modo Claro" : "Cambiar a modo Oscuro";

  const handleClick = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 focus:ring hover:bg-blue-400 active:transform active:translate-y-1 rounded transition-all shadow-md px-4  py-2 "
    >
      {text}
    </button>
  );
};

export default Button;
