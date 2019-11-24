import React, { Fragment } from "react";

function EmployeeDetails(props) {
  const { employee, projects } = props;
  const {
    firstName,
    lastName,
    dateOfBirth,
    jobTitle,
    jobArea,
    jobType
  } = employee;

  const formattedDate = new Date(dateOfBirth).toLocaleDateString("bg-BG");

  return (
    <div className="employeeDetails">
      <h1>Employee</h1>
      <dl>
        <dt>Name:</dt>
        <dd>
          {firstName} {lastName}
        </dd>

        <dt>Date of birth:</dt>
        <dd>{formattedDate}</dd>

        <dt>Job title:</dt>
        <dd>{jobTitle}</dd>

        <dt>Job area:</dt>
        <dd>{jobArea}</dd>

        <dt>Job type:</dt>
        <dd>{jobType}</dd>
      </dl>
      {projects.length > 0 && (
        <Fragment>
          <h2>Projects</h2>
          <ul>
            {projects.map(project => {
              return <li key={project.id + project.name}>{project.name}</li>;
            })}
          </ul>
        </Fragment>
      )}
    </div>
  );
}

export default EmployeeDetails;
