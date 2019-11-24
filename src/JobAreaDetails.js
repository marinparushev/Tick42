import React from "react";

function JobAreaDetails(props) {
  const { employeesCount, jobArea, projectsCount } = props;

  return (
    <div className="jobAreaDetails">
      <h1>{jobArea}</h1>

      <p>
        {employeesCount} employees work in {jobArea}.
      </p>
      <p>They participate in {projectsCount} projects.</p>
    </div>
  );
}

export default JobAreaDetails;
