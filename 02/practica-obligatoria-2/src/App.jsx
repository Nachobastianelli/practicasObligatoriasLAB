import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.esm";
import Table from "./components/table/Table";

const netIncome = [
  { brand: "McDonalds", income: 1291283 },
  { brand: "Burger King", income: 1927361 },
  { brand: "KFC", income: 1098463 },
  { brand: "Al Volo", income: 12912 },
  { brand: "Penion", income: 1361 },
  { brand: "TBS", income: 1098463567 },
  { brand: "Suipacha", income: 8888888 },
  { brand: "R&F's", income: 192736123425 },
];

//Creacion de la funcion que calcula el promedio;

const sumNetIcomes = (array) => {
  return array.reduce((acc, current) => {
    return acc + current.income;
  }, 0);
};

function App() {
  return (
    <div className="mt-4">
      <Table netIncome={netIncome} />
      <h1 className="d-flex justify-content-center align-items-center">
        Promedio: {sumNetIcomes(netIncome) / netIncome.length}
      </h1>
    </div>
  );
}

export default App;
