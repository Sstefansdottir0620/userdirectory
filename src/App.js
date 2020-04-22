import React, { useState, useEffect } from "react";
import EmployeeSet from "./components/employeeSet";
import Header from "./components/header";
import API from "./utils/API";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [employeeSearch, setEmployeeSearch] = useState("");

  useEffect(() => {
    API.getUsers()
      .then((result) => {
        return result.data.results;
      })
      .then((data) => {
        setEmployees(data);
        console.log(employees);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleSearch(event) {
    setEmployeeSearch(event.target.value);
    var filtering = employees.filter((employee) => {
      return employee.name.first.includes(employeeSearch);
    });
    setFilteredEmployees(filtering);
    console.log(filteredEmployees);
  }

  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row justify-content-center">
          <input
            className="input-group mt-3 p-2"
            type="input"
            placeholder="Employee Search"
            onChange={handleSearch}
          />
        </div>
        {filteredEmployees.map((employee) => (
          <EmployeeSet
            key={employee.name.first + employee.name.last}
            data={employee}
          />
        ))}
      </div>
    </>
  );
}

export default App;
