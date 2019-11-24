import { arrayToObject } from "../utils/utils.js";

export const companiesRequest = {
  url: "http://localhost:3000/companies.json",
  transform: body => ({ companies: body }),
  update: {
    companies: (oldValue, newValue) => arrayToObject(newValue)
  }
};

export const employeesRequest = {
  url: "http://localhost:3000/employees.json",
  transform: body => ({ employees: body }),
  update: {
    employees: (oldValue, newValue) => arrayToObject(newValue)
  }
};

export const projectsRequest = {
  url: "http://localhost:3000/projects.json",
  transform: body => ({ projects: body }),
  update: {
    projects: (oldValue, newValue) => arrayToObject(newValue)
  }
};

export const companyAddressesRequest = {
  url: "http://localhost:3000/company-addresses.json",
  transform: body => ({ companyAddresses: body }),
  update: {
    companyAddresses: (oldValue, newValue) =>
      arrayToObject(newValue, "companyId")
  }
};
