import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 300, paddingTop: 120, textAlign: "center", backgroundColor:"black", backgroundSize: "cover" }}
    className="jumbotron">
    {children}
  </div>
);

export default Jumbotron;
