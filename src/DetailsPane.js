import React from "react";
import { useSelector } from "react-redux";
import {
  getSelectedCompany,
  getSelectedJobArea,
  getSelectedEmployee,
  getCompanies,
  getEmployees,
  getAddresses,
  companyAddressesRequest,
  getProjects,
  projectsRequest
} from "./data";
import { useRequest } from "redux-query-react";

import CompanyDetails from "./CompanyDetails";
import JobAreaDetails from "./JobAreaDetails";
import { arrayToObject } from "./utils/utils";
import EmployeeDetails from "./EmployeeDetails";

function DetailsPane() {
  const companies = useSelector(getCompanies) || {};
  const employees = useSelector(getEmployees) || {};
  const addresses = useSelector(getAddresses) || {};
  const projects = useSelector(getProjects) || {};
  const selectedCompany = useSelector(getSelectedCompany);
  const selectedJobArea = useSelector(getSelectedJobArea);
  const selectedEmployee = useSelector(getSelectedEmployee);
  useRequest(companyAddressesRequest);
  useRequest(projectsRequest);

  const renderDetails = () => {
    if (selectedCompany) {
      const companyProjects = Object.values(projects).filter(project => {
        return project.companyId === selectedCompany;
      });
      return (
        <CompanyDetails
          company={companies[selectedCompany]}
          address={addresses[selectedCompany] || {}}
          projects={companyProjects}
        />
      );
    }

    if (selectedJobArea) {
      const jobAreaEmployees = Object.values(employees).filter(
        emp => emp.jobArea === selectedJobArea
      );
      const employeesCount = jobAreaEmployees.length;
      const jobAreaEmployeesObject = arrayToObject(jobAreaEmployees);
      const projectsCount = Object.values(projects).reduce((acc, project) => {
        for (let employee in project.employeesId) {
          const employeeId = project.employeesId[employee];

          if (jobAreaEmployeesObject[employeeId] !== undefined) {
            return ++acc;
          }
        }

        return acc;
      }, 0);

      return (
        <JobAreaDetails
          jobArea={selectedJobArea}
          employeesCount={employeesCount}
          projectsCount={projectsCount}
        />
      );
    }

    if (selectedEmployee) {
      const employeeProjects = Object.values(projects).filter(project => {
        return project.employeesId.indexOf(selectedEmployee) > -1;
      });
      return (
        <EmployeeDetails
          employee={employees[selectedEmployee]}
          projects={employeeProjects}
        />
      );
    }
  };

  return <div className="detailsPane">{renderDetails()}</div>;
}

export default DetailsPane;
