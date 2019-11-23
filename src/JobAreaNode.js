import React, { useState } from "react";

function JobAreaNode(props) {
  const [expanded, setExpanded] = useState(false);

  const onToggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <li>
      <div class="node nodeLevel2">
        <span onClick={onToggleExpanded} className="expandButton">
          {expanded ? "-" : "+"}
        </span>
        <span className="nodeText">{props.name}</span>
      </div>
      {expanded && (
        <ul className="subTree">
          {props.employees.map(employee => (
            <li key={employee.id} className="node nodeLevel3">
              <span className="nodeText">
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
