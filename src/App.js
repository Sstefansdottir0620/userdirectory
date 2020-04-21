import React, { useState, useEffect } from "react";
import EmployeeSet from "./components/employeeSet";
import Header from "./components/header";
import API from "./utils/API";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);

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
  }, [employees]);

  // handleSearch() {
  //   var filteredEmployees = this.state.employees.filter((employee) => {
  //     return this.state.employeeSearch === employee.name.first;
  //   });
  //   this.setState({
  //     employees: filteredEmployees,
  //   });
  // }

  return (
    <>
      <Header />
      <div className="container-fluid">
        {employees.map((employee) => (
          <EmployeeSet data={employee} />
        ))}
      </div>
    </>
  );
}

export default App;
