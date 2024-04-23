import React from "react";

const Table = (/*{props}*/) => {
  // const brandsMapped = brands.map((brand, index) => (
  //     <p>{}</p>
  //     <p>{}</p>
  // ));
  return (
    <>
      <div className="container mt-5">
        <table className="table table-hover table-dark">
          <thead>
            <tr>
              <th scope="col">Marca</th>
              <th scope="col">Ingreso neto</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            <tr>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
