import React from "react";

function Header() {
  return (
    <header className="container-fluid">
      <h1 style={{ color: "white", textAlign: "center" }}>
        Employee Directory
      </h1>
      <input
        type="search"
        placeholder="Employee Search"
        // onChange={this.handleSearch()}
      />
    </header>
  );
}

export default Header;
