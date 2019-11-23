import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchData } from "./utils/utils.js";
import "./ProjectDetails.css";

function ProjectDetails() {
  const [isEditing, setEditing] = useState(false);
  const dispatch = useDispatch();
  const employees = useSelector(state => state.employees.data);
  const employeesLoaded = useSelector(state => state.employees.employeesLoaded);
  const projects = useSelector(state => state.projects.data);
  const selectedProjectId = useSelector(
    state => state.projects.selectedProjectId
  );
  const selectedProject = projects[selectedProjectId];
  const [projectName, setProjectName] = useState(
    selectedProject ? selectedProject.name : ""
  );

  const projectEmployeesId = selectedProject ? selectedProject.employeesId : [];
  const companyEmployees = selectedProject
    ? Object.values(employees).filter(emp => {
        console.log(
          emp.firstName,
          emp.lastName,
          emp.companyId,
          selectedProject.companyId
        );
        return emp.companyId === selectedProject.companyId;
      })
    : [];

  const onToggleEdit = () => {
    setEditing(!isEditing);
  };

  const onProjectNameChange = e => {
    setProjectName(e.target.value);
  };

  useEffect(() => {
    if (!employeesLoaded) {
      dispatch(
        fetchData(
          "http://localhost:3000/employees.json",
          "FETCH_EMPLOYEES",
          dispatch
        )
      );
    }
  }, [dispatch, employeesLoaded]);

  return selectedProject ? (
    <div className="projectDetails">
      <h1>Project</h1>
      {isEditing ? (
        <Fragment>
          <div>
            <label>Name: </label>
            <input
              type="text"
              value={projectName}
              onChange={onProjectNameChange}
            />
          </div>
          {companyEmployees.length > 0 && <label>Employees: </label>}
          <ul>
            {companyEmployees.map(employee => {
              return (
                <li className="projectEmployees">
                  {employee.firstName} {employee.lastName}
                </li>
              );
            })}
          </ul>
          <div className="buttons">
            <div className="button confirmButton" onClick={onToggleEdit}>
              OK
            </div>
            <div className="button cancelButton" onClick={onToggleEdit}>
              Cancel
            </div>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <dl>
            <dt>Name:</dt>
            <dd>{selectedProject.name}</dd>
          </dl>

          {projectEmployeesId.length > 0 && (
            <ul>
              {projectEmployeesId.map(employeeId => {
                return (
                  <li>{`${employees[employeeId].firstName} ${employees[employeeId].lastName}`}</li>
                );
              })}
            </ul>
          )}
          <div className="button" onClick={onToggleEdit}>
            Edit project
          </div>
        </Fragment>
      )}
    </div>
  ) : (
    ""
  );
}

export default ProjectDetails;
