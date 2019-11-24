import React from "react";
import { useSelector } from "react-redux";
import { useRequest } from "redux-query-react";

import "./CompaniesTree.css";
import CompanyNode from "./CompanyNode";
import {
  getCompanies,
  companiesRequest,
  getEmployees,
  employeesRequest
} from "./data";

function CompaniesTree() {
  const companies = useSelector(getCompanies) || {};
  const employees = useSelector(getEmployees) || {};
  const [{ isPending, status }] = useRequest(companiesRequest);
  useRequest(employeesRequest);

  const renderCompanies = () => {
    if (isPending) {
      return "Loading...";
    }

    if (typeof status === "number" && status >= 400) {
      return `Error loading! Status code: ${status}`;
    }

    const companiesCount = Object.keys(companies).length;

    if (!companiesCount) {
      return "No Data";
    }

    return Object.values(companies).map(company => {
      const companyEmployees = Object.values(employees).filter(emp => {
        return emp.companyId === company.id;
      });
      return (
        <CompanyNode
          key={company.id}
          id={company.id}
          name={company.name}
          employees={companyEmployees}
        />
      );
    });
  };

  return <ul className="companiesTree">{renderCompanies()}</ul>;
}

export default CompaniesTree;
