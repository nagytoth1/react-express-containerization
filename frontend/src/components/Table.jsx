import React from "react";
import { useTheme } from "../hook/useTheme";

export default function Table() {
  const { theme } = useTheme();
  const rows = [];
  for (let i = 0; i < 100; i++) {
    rows.push(
      <tr key={i}>
        <td>Value1</td>
        <td>Value2</td>
        <td>Value3</td>
        <td>Value4</td>
        <td>Value5</td>
        <td>Value6</td>
        <td>Value7</td>
        <td>Value8</td>
        <td>Value9</td>
        <td>Value10</td>
      </tr>
    );
  }
  return (
    <div className="table-container">
      <table className={`full ${theme}`}>
        <thead>
          <tr>
            <th>Col1 this is the longest</th>
            <th>Col2</th>
            <th>Col3</th>
            <th>Col4</th>
            <th>Col5</th>
            <th>Col6</th>
            <th>Col7</th>
            <th>Col8</th>
            <th>Col9</th>
            <th>Col10</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}
