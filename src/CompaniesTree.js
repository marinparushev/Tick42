import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./CompaniesTree.css";
import CompanyNode from "./CompanyNode.js";
import { fetchData } from "./utils/utils.js";

function CompaniesTree() {
  const companies = useSelector(state => state.companies.data);
  const loading = useSelector(state => state.companies.loading);
  const error = useSelector(state => state.companies.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchData(
        "http://localhost:3000/companies.json",
        "FETCH_COMPANIES",
        dispatch
      )
    );
  }, [dispatch]);

  const renderCompanies = (companies, loading, error) => {
    if (loading) {
      return "Loading...";
    }

    if (error) {
      return error;
    }

    const companiesCount = Object.keys(companies).length;

    if (!companiesCount) {
      return "No Data";
    }

    return Object.keys(companies).map(company => {
      return (
        <CompanyNode
          key={companies[company].id}
          id={companies[company].id}
          name={companies[company].name}
        />
      );
    });
  };

  return (
    <ul className="companiesTree">
      {renderCompanies(companies, loading, error)}
    </ul>
  );
}

export default CompaniesTree;
