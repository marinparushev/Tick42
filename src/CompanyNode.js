import React, { useState } from "react";
import { useDispatch } from "react-redux";

import JobAreaNode from "./JobAreaNode";
import { selectCompany } from "./data";
import "./CompanyNode.css";

function CompanyNode(props) {
  const dispatch = useDispatch();
  const { id, name, employees } = props;
  const [expanded, setExpanded] = useState(false);

  const onToggleExpanded = () => {
    setExpanded(prevExpanded => !prevExpanded);
  };

  const onSelectCompany = () => {
    dispatch(selectCompany(id));
  };

  const jobAreas = [...new Set(employees.map(employee => employee.jobArea))];

  return (
    <li key={id}>
      <div className="node">
        {employees.length > 0 && (
          <span className="expandButton" onClick={onToggleExpanded}>
            {expanded ? "-" : "+"}
          </span>
        )}
        <span className="nodeText" title={name} onClick={onSelectCompany}>
          {name}
        </span>
      </div>
      {expanded && (
        <ul className="subTree">
          {jobAreas.map(jobArea => {
            return (
              <JobAreaNode
                key={props.id + jobArea}
                employees={employees.filter(
                  employee =>
                    employee.companyId === id && employee.jobArea === jobArea
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
