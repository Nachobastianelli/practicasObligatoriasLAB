import { useState } from "react";

const Login = () => {
  const [contains, setContains] = useState("");
  const [alertShown, setAlertShown] = useState(false);

  const verifyContent = (cadena) => {
    const caracter = [...cadena];

    if (caracter.includes("o") || caracter.includes("O")) {
      setAlertShown(true);
    } else {
      setAlertShown(false);
    }
  };

  const handleChangeInput = (event) => {
    setContains(event.target.value);

    verifyContent(event.target.value);

    if (alertShown === true) {
      alert("Nombres sin o porfavor!");
    }
  };

  const handleClick = () => {
    verifyContent(contains);

    if (contains == "") {
      alert("Ingrese al menos una letra");
    } else if (!alertShown) {
      alert("Te registraste correctamente!");
    }

    if (alertShown === true) {
      alert("No podes registrarte con una O en tu Username");
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-80">
        <form className="bg-white shadow-lg rounded-2xl px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Usuario:
            </label>
            <input
              className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded-lg"
              id="username"
              type="text"
              placeholder="Nombre de usuario"
              onChange={handleChangeInput}
            />
            <p className="flex justify-center text-black">{contains}</p>
          </div>
          <div className="flex mb-6">
            <input type="checkbox" />
            <span className="ml-2 text-gray-800 text-sm">
              Acepto los{" "}
              <u className="text-indigo-500 cursor-pointer">terminos</u>y{" "}
              <u className="text-indigo-500  cursor-pointer">condiciones</u>
            </span>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-indigo-500 hover:bg-indigo-700 text-white  py-2 px-4 rounded-md focus:outline-none  active:transform active:translate-y-1 focus:ring transition-all"
              type="button"
              onClick={handleClick}
            >
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
