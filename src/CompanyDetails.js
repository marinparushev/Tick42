import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./CompanyDetails.css";

function CompanyDetails() {
  const dispatch = useDispatch();
  const companies = useSelector(state => state.companies.data);
  const projects = useSelector(state => state.projects.data);
  const addresses = useSelector(state => state.companyAddresses.data);
  const selectedCompanyId = useSelector(
    state => state.companies.selectedCompanyId
  );
  const selectedCompany = companies[selectedCompanyId];
  const companyAddress =
    Object.keys(addresses)
      .map(key => addresses[key])
      .find(address => address.companyId === selectedCompanyId) || {};
  const { city, country, street, state } = companyAddress;
  const companyProjects = Object.keys(projects)
    .map(key => projects[key])
    .filter(project => project.companyId === selectedCompanyId);

  const onSelectProject = projectId => {
    dispatch({ type: "SELECT_PROJECT", projectId });
  };

  return selectedCompany ? (
    <div className="companyDetails">
      <h1>Company</h1>
      <dl>
        <dt>Name:</dt>
        <dd>{selectedCompany.name}</dd>

        <dt>Address:</dt>
        <dd>
          {companyAddress ? (
            <span>
              {city}, {country}, {street}, {state}
            </span>
          ) : (
            "No data"
          )}
        </dd>

        {companyProjects.length > 0 && (
          <Fragment>
            <dt>Projects:</dt>
            <dd>
              <ul>
                {companyProjects.map(project => {
                  return (
                    <li onClick={onSelectProject.bind(this, project.id)}>
                      {project.name}
                    </li>
                  );
                })}
              </ul>
            </dd>
          </Fragment>
        )}
      </dl>
    </div>
  ) : (
    ""
  );
}

export default CompanyDetails;
