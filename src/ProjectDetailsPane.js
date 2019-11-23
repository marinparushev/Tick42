import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ProjectDetails.css";

function ProjectDetailsPane(props) {
  const dispatch = useDispatch();
  const employees = useSelector(state => state.employees.data);
  const employeesLoaded = useSelector(state => state.employees.employeesLoaded);
  const projects = useSelector(state => state.projects.data);
  const selectedProjectId = useSelector(
    state => state.projects.selectedProjectId
  );
  const selectedProject = projects[selectedProjectId];
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
  return;
}

export default ProjectDetailsPane;
