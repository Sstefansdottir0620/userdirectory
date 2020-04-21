import React from "react";

const rowHeadStyle = {
  padding: 5,
  fontWeight: "bold",
  marginLeft: 5,
};
const rowStyle = {
  padding: 5,
};

function EmployeeSet({ data }) {
  return (
    <div className="row d-flex justify-content-between">
      <div className="col-md-2">
        <div className="row" style={rowHeadStyle}>
          Employee Picture
        </div>
        <div className="row justify-content-center">
          <img src={data.picture.large} alt="" />
        </div>
      </div>

      <div className="col-md-2">
        <div className="row" style={rowHeadStyle}>
          Employee Name
        </div>
        <div className="row" style={rowStyle}>
          <p>{`${data.name.first} ${data.name.last}`}</p>
        </div>
      </div>

      <div className="col-md-2">
        <div className="row" style={rowHeadStyle}>
          Email
        </div>
        <div className="row" style={rowStyle}>
          <p>{data.email}</p>
        </div>
      </div>
      <div className="col-md-2">
        <div className="row" style={rowHeadStyle}>
          <p>Phone-number</p>
        </div>
        <div className="row">
          <p>{data.phone}</p>
        </div>
      </div>
      <div className="col-md-2">
        <div className="row" style={rowHeadStyle}>
          <p>AGE</p>
        </div>
        <div className="row">
          <p>{data.dob.age}</p>
        </div>
      </div>
    </div>
  );
}

export default EmployeeSet;
