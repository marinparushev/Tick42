import React from "react";
import "./ProjectDetails.css";

function ProjectDetails(props) {
  // props.projectName, props.employees, props.onToggleEdit
  const { employees, projectName, onEdit } = props;

  return (
    <div className="projectDetails">
      <h1>Project</h1>
      <dl>
        <dt>Name:</dt>
        <dd>{projectName}</dd>
      </dl>

      {employees.length > 0 && (
        <ul>
          {employees.map(employeeId => {
            return (
              <li>{`${employees[employeeId].firstName} ${employees[employeeId].lastName}`}</li>
            );
          })}
        </ul>
      )}
      <div className="button" onClick={onEdit}>
        Edit project
      </div>
    </div>
  );
}

export default ProjectDetails;
