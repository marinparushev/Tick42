import React from "react";
import CompaniesTree from "./CompaniesTree.js";
import ProjectDetailsPane from "./ProjectDetailsPane.js";
import "./App.css";
import DetailsPane from "./DetailsPane.js";

function App() {
  return (
    <div className="App">
      <CompaniesTree />
      <DetailsPane />
      <ProjectDetailsPane />
    </div>
  );
}

export default App;
