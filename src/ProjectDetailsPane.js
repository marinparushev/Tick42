import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateEntities } from "redux-query";

import {
  getSelectedProject,
  getProjects,
  getEmployees,
  selectProject
} from "./data";
import "./ProjectDetails.css";
import ProjectDetails from "./ProjectDetails";
import ProjectDetailsEdit from "./ProjectDetailsEdit";

function ProjectDetailsPane() {
  const dispatch = useDispatch();
  const [isEditing, setEditing] = useState(false);
  const projects = useSelector(getProjects) || {};
  const employees = useSelector(getEmployees) || {};
  const selectedProject = projects[useSelector(getSelectedProject)];
  const companyEmployees = selectedProject
    ? Object.values(employees).filter(employee => {
        return employee.companyId === selectedProject.companyId;
      })
    : [];

  const projectEmployees = selectedProject
    ? Object.values(employees).filter(employee => {
        return selectedProject.employeesId.indexOf(employee.id) > -1;
      })
    : [];

  const onToggleEdit = () => {
    setEditing(prevIsEditing => !prevIsEditing);
  };

  const onSave = (projectName, projectEmployees) => {
    const employeesId = projectEmployees.map(employee => employee.id);

    setEditing(prevIsEditing => !prevIsEditing);
    dispatch(
      updateEntities({
        projects: oldValue => ({
          ...oldValue,
          [selectedProject.id]: {
            ...oldValue[selectedProject.id],
            name: projectName,
            employeesId
          }
        })
      })
    );
  };

  const onDeleteProject = id => {
    setEditing(prevIsEditing => !prevIsEditing);

    dispatch(
      updateEntities({
        projects: oldValue => {
          const newValue = { ...oldValue };
          delete newValue[id];
          return newValue;
        }
      })
    );

    dispatch(selectProject(undefined));
  };

  if (!selectedProject) {
    return null;
  }

  return isEditing ? (
    <ProjectDetailsEdit
      project={selectedProject}
      companyEmployees={companyEmployees}
      projectEmployees={projectEmployees}
      onSave={onSave}
      onCancel={onToggleEdit}
      onDeleteProject={onDeleteProject}
    />
  ) : (
    <ProjectDetails
      project={selectedProject}
      projectEmployees={projectEmployees}
      onToggleEdit={onToggleEdit}
    />
  );
}

export default ProjectDetailsPane;
