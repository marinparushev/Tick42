import React from "react";
import CompaniesTree from "./CompaniesTree.js";
// import CompanyDetails from "./CompanyDetails.js";
import ProjectDetailsPane from "./ProjectDetailsPane.js";
import "./App.css";
import DetailsPane from "./DetailsPane.js";

function App() {
  return (
    <div className="App">
      <CompaniesTree />
      <DetailsPane />
      {/* <CompanyDetails /> */}
      <ProjectDetailsPane />
    </div>
  );
}

export default App;
