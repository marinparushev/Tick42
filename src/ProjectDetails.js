import React, { Fragment } from "react";
import "./ProjectDetails.css";

function ProjectDetails(props) {
  const { project, projectEmployees, onToggleEdit } = props;
  const { name } = project;

  return (
    <div className="projectDetails">
      <h1>Project</h1>
      <dl>
        <dt>Name:</dt>
        <dd>{name}</dd>
      </dl>

      {projectEmployees && projectEmployees.length > 0 && (
        <Fragment>
          <h2>Employees</h2>
          <ul className="projectEmployees">
            {projectEmployees.map(employee => {
              return (
                <li
                  key={employee.id}
                >{`${employee.firstName} ${employee.lastName}`}</li>
              );
            })}
          </ul>
        </Fragment>
      )}
      <div className="button" onClick={onToggleEdit}>
        Edit project
      </div>
    </div>
  );
}

export default ProjectDetails;
