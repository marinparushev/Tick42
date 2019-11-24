import React, { useState } from "react";

import "./ProjectDetails.css";
import tick from "./images/tick.png";

function ProjectDetailsEdit(props) {
  const {
    project,
    projectEmployees,
    companyEmployees,
    onToggleEdit,
    onSave,
    onDeleteProject
  } = props;
  const { name } = project;
  const projectEmployeesIds = Object.values(projectEmployees).map(
    employee => employee.id
  );

  const [projectName, setProjectName] = useState(name);
  const [employees, setEmployees] = useState(
    companyEmployees.map(employee => {
      if (projectEmployeesIds.indexOf(employee.id) > -1) {
        employee.isInProject = true;
      } else {
        employee.isInProject = false;
      }

      return employee;
    })
  );

  const onProjectNameChange = e => {
    const value = e.target.value;
    setProjectName(() => value);
  };

  const onToggleEmployee = (id, index) => {
    setEmployees(prevEmployees => {
      let employees = [...prevEmployees];
      let employee = { ...employees[index] };
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
                onClick={onToggleEmployee.bind(this, employee.id, index)}
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
          onClick={onSave.bind(
            this,
            projectName,
            employees.filter(employee => employee.isInProject)
          )}
        >
          OK
        </div>
        <div className="button cancelButton" onClick={onToggleEdit}>
          Cancel
        </div>
        <div
          className="button deleteButton"
          onClick={onDeleteProject.bind(this, project.id)}
        >
          Delete project
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailsEdit;
