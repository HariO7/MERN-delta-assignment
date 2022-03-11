import React from "react";
import "./table.css";
import trash from './trash.png'
const data = [
  {
    name: "Wayne Rooney",
    Company: "DC United",
    status: "Active",
    LastUpdated: "7/07/2017",
    Notes: "ManUtdHighestscorer",
  },
  {
    name: "Wayne Rooney",
    Company: "DC United",
    status: "Active",
    LastUpdated: "7/07/2017",
    Notes: "ManUtdHighestscorer",
  },
  {
    name: "Wayne Rooney",
    Company: "DC United",
    status: "Active",
    LastUpdated: "7/07/2017",
    Notes: "ManUtdHighestscorer",
  },
];
const App = () => {
  return (
    <div>
      <h1
        className="head"
        style={{ display: "inline-block", fontWeight: "lighter" }}
      >
        Team Members
      </h1>
      <button className="button">add member+</button>
      <form>
        <table>
          <tr>
              <th><input type={'checkbox'}/></th>
            <th>Name</th>
            <th>Company</th>
            <th>Status</th>
            <th>Last Updated</th>
            <th>Notes</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td><input type={'checkbox'}/></td>
                <td>{val.name}</td>
                <td>{val.Company}</td>
                <td>{val.status}</td>
                <td>{val.LastUpdated}</td>
                <td>{val.Notes}</td>
                <td><img src= {trash} /></td>
              </tr>
            );
          })}
        </table>
      </form>
    </div>
  );
}; 

export default App;
