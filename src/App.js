import React from "react";
import CompaniesTree from "./CompaniesTree.js";
import CompanyDetails from "./CompanyDetails.js";
import ProjectDetails from "./ProjectDetails.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CompaniesTree />
      <CompanyDetails />
      {/* <ProjectDetails /> */}
    </div>
  );
}

export default App;
