import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { selectJobArea, selectEmployee } from "./data";

function JobAreaNode(props) {
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);
  const { name, employees } = props;

  const onToggleExpanded = () => {
    setExpanded(prevExpanded => !prevExpanded);
  };

  const onSelectJobArea = () => {
    dispatch(selectJobArea(name));
  };

  const onSelectEmployee = employee => {
    dispatch(selectEmployee(employee.id));
  };

  return (
    <li>
      <div className="node nodeLevel2">
        <span onClick={onToggleExpanded} className="expandButton">
          {expanded ? "-" : "+"}
        </span>
        <span className="nodeText" onClick={onSelectJobArea}>
          {name}
        </span>
      </div>
      {expanded && (
        <ul className="subTree">
          {employees.map(employee => (
            <li key={employee.id} className="node nodeLevel3">
              <span
                className="nodeText"
                onClick={onSelectEmployee.bind(this, employee)}
              >
                {employee.firstName} {employee.lastName}
              </span>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default JobAreaNode;
