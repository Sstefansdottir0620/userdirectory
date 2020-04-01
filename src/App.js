import React, {Component} from 'react';
// import Employees from './components/employees';
import API from './utils/API';
import './App.css';
// import API from "./utils/API";


const rowHeadStyle = {
  padding: 5,
  fontWeight: "bold",
  marginLeft: 5,
};
const rowStyle = {
  padding: 5,

}


class App extends Component{
  state = {
    employees:[]
  };

componentWillMount(){
  API.getUsers().then(employeeData => {
    this.setState({
      employeePicture: employeeData.data.results[0].picture.large,
      employeeFirst: employeeData.data.results[0].name.first,
      employeeLast: employeeData.data.results[0].name.last,
      employeeDOB: employeeData.data.results[0].dob.date,
      employeePhone: employeeData.data.results[0].phone,
      employeeEmail: employeeData.data.results[0].email,
      // filteredEmployees: employeeData.data.results
     });
  })
  .catch(err => console.log(err));
}

// //grabbes the last name
// employeeData.data.results[0].name.last

// //grabbes the first name
// employeeData.data.results[0].name.first

// //grabbes the email
// employeeData.data.results[0].email

// //grabbes the DOB
// employeeData.data.results[0].dob.date

// //grabbes the phone number
// employeeData.data.results[0].phone

// //grabbes the image
// employeeData.data.results[0].picture.medium


  render() {
      return (
        <div className="container">
        <header>
          <input type="search" placeholder="Employee Search"></input>
        </header>
        
            <div className="row d-flex justify-content-between">
                <div className="col-md-2">
                  <div className="row" style={rowHeadStyle}>Employee Picture</div>
                  <div className="row">
                  <img src={this.state.employeePicture} style={{marginLeft:24}}alt=""/></div>
            </div>
                          
                
                <div className="col-md-2">
                  <div className="row" style={rowHeadStyle}>Employee Name</div>
                  <div className="row" style={rowStyle}>
                  {this.state.employeeFirst}
                  {this.state.employeeLast}
                </div>
              </div>
                  
                
                <div className="col-md-2">
                <div className="row" style={rowHeadStyle}>Email</div>
                  <div className="row" style={rowStyle}>
                  {this.state.employeeEmail}</div>
                  </div>
                <div className="col-md-2">
                <div className="row">
                  {this.state.employeePhone}</div>
                  </div>
                <div className="col-md-2">
                  {this.state.employeeDOB}</div>
              </div>

      </div>
              


      
      );
  }
}

export default App;