import React from "react";
import numeral from "numeral";
import "./table.css";

const Table = ({ countries }) => {
  return (
    <div className="table">
      {countries.map(({ country, cases }) => (
        <tr key={country}>
          <td>{country}</td>
          <td>{numeral(cases).format("0,0")}</td>
        </tr>
      ))}
    </div>
  );
};

export default Table;
