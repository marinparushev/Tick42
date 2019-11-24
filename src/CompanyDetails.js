import React, { Fragment } from "react";
import { useDispatch } from "react-redux";

import { selectProject } from "./data";
import "./CompanyDetails.css";

function CompanyDetails(props) {
  const dispatch = useDispatch();
  const { company, address, projects } = props;
  const { name } = company;
  const { city, country, street, state } = address;

  const onSelectProject = id => {
    dispatch(selectProject(id));
  };

  return (
    <div className="companyDetails">
      <h1>Company</h1>
      <dl>
        <dt>Name:</dt>
        <dd>{name}</dd>

        {city && (
          <Fragment>
            <dt>City:</dt>
            <dd>{city}</dd>
          </Fragment>
        )}
        {country && (
          <Fragment>
            <dt>Country:</dt>
            <dd>{country}</dd>
          </Fragment>
        )}
        {street && (
          <Fragment>
            <dt>Street:</dt>
            <dd>{street}</dd>
          </Fragment>
        )}
        {state && (
          <Fragment>
            <dt>State:</dt>
            <dd>{state}</dd>
          </Fragment>
        )}
      </dl>
      {projects.length > 0 && (
        <Fragment>
          <h2>Projects</h2>
          <ul className="projectsList">
            {projects.map(project => {
              return (
                <li
                  key={project.id}
                  className="projectName"
                  onClick={onSelectProject.bind(this, project.id)}
                >
                  {project.name}
                </li>
              );
            })}
          </ul>
        </Fragment>
      )}
    </div>
  );
}

export default CompanyDetails;
