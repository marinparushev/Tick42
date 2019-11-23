import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./CompanyNode.css";
import JobAreaNode from "./JobAreaNode.js";
import { fetchData } from "./utils/utils.js";

function CompanyNode(props) {
  const dispatch = useDispatch();
  const employees = useSelector(state => state.employees.data);
  const employeesLoaded = useSelector(state => state.employees.loaded);
  const projectsLoaded = useSelector(state => state.projects.loaded);
  const addressesLoaded = useSelector(state => state.companyAddresses.loaded);

  const [expanded, setExpanded] = useState(false);
  const companyEmployees = Object.keys(employees)
    .map(key => employees[key])
    .filter(employee => {
      return employee.companyId === props.id;
    });

  const jobAreas = [
    ...new Set(companyEmployees.map(employee => employee.jobArea))
  ];

  const onToggleExpanded = evt => {
    setExpanded(!expanded);

    if (employeesLoaded) {
      return;
    }

    dispatch(
      fetchData(
        "http://localhost:3000/employees.json",
        "FETCH_EMPLOYEES",
        dispatch
      )
    );
  };

  const onSelectCompany = evt => {
    dispatch({ type: "SELECT_COMPANY", companyId: props.id });

    if (!projectsLoaded) {
      dispatch(
        fetchData(
          "http://localhost:3000/projects.json",
          "FETCH_PROJECTS",
          dispatch
        )
      );
    }

    if (!addressesLoaded) {
      dispatch(
        fetchData(
          "http://localhost:3000/company-addresses.json",
          "FETCH_COMPANY_ADDRESSES",
          dispatch
        )
      );
    }
  };

  return (
    <li key={props.id}>
      <div className="node">
        <span className="expandButton" onClick={onToggleExpanded}>
          {expanded ? "-" : "+"}
        </span>
        <span className="nodeText" title={props.name} onClick={onSelectCompany}>
          {props.name}
        </span>
      </div>
      {expanded && (
        <ul className="subTree">
          {jobAreas.map(jobArea => {
            return (
              <JobAreaNode
                key={props.id + jobArea}
                employees={companyEmployees.filter(
                  employee => employee.jobArea === jobArea
                )}
                name={jobArea}
              />
            );
          })}
        </ul>
      )}
    </li>
  );
}

export default CompanyNode;
