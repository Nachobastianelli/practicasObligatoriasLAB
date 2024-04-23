import React from "react";
import PropTypes from "prop-types";

const Table = ({ netIncome }) => {
  return (
    <>
      <div className="container mt-5">
        <table className="table table-hover table-dark">
          <thead>
            <tr>
              <th scope="col">Marca</th>
              <th scope="col">Ingreso</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {netIncome.map((netIncome, index) => {
              return (
                <tr key={index}>
                  <td>{netIncome.brand}</td>
                  <td>{netIncome.income}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;

Table.propTypes = {
  netIncome: PropTypes.array,
};
