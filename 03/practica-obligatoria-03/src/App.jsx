import Login from "./components/login/Login";
import Button from "./components/button/Button";

function App() {
  return (
    <>
      <div className="flex justify-end bg-gray-100 dark:bg-gray-900  dark:text-white transition-all">
        <Button className="m-3" />
      </div>
      <div className="bg-gray-100 dark:bg-gray-900  dark:text-white min-w-full h-screen flex flex-col justify-center items-center transition-all">
        <Login />
      </div>
    </>
  );
}

export default App;
