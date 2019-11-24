import React, { useState } from "react";

import "./ProjectDetails.css";
import tick from "./images/tick.png";

function ProjectDetailsEdit(props) {
  const {
    project,
    projectEmployees,
    companyEmployees,
    onSave,
    onCancel,
    onDeleteProject
  } = props;
  const { name } = project;
  const projectEmployeesIds = Object.values(projectEmployees).map(
    employee => employee.id
  );

  const [projectName, setProjectName] = useState(name);
  const [employees, setEmployees] = useState(
    [...companyEmployees].map(employee => ({
      ...employee,
      isInProject: projectEmployeesIds.includes(employee.id)
    }))
  );

  const onProjectNameChange = e => {
    const value = e.target.value;
    setProjectName(() => value);
  };

  const onToggleEmployee = (id, index) => {
    setEmployees(prevEmployees => {
      const employees = [...prevEmployees];
      const employee = { ...employees[index] };
      employee.isInProject = !employee.isInProject;
      employees[index] = employee;

      return employees;
    });
  };

  return (
    <div className="projectDetailsEdit">
      <h1>Project</h1>
      <label>Name: </label>
      <input type="text" value={projectName} onChange={onProjectNameChange} />
      {employees.length > 0 && (
        <ul className="projectEmployees">
          {employees.map((employee, index) => {
            return (
              <li
                key={employee.id}
                className="projectEmployeesItem"
                onClick={() => onToggleEmployee(employee.id, index)}
              >
                {employee.isInProject && (
                  <img alt="checked" className="tick" src={tick} />
                )}
                <span>
                  {employee.firstName} {employee.lastName}
                </span>
              </li>
            );
          })}
        </ul>
      )}
      <div className="buttons">
        <div
          className="button confirmButton"
          onClick={() =>
            onSave(
              projectName,
              employees.filter(employee => employee.isInProject)
            )
          }
        >
          OK
        </div>
        <div className="button cancelButton" onClick={onCancel}>
          Cancel
        </div>
        <div
          className="button deleteButton"
          onClick={() => onDeleteProject(project.id)}
        >
          Delete project
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailsEdit;
