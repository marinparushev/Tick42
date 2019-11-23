import { arrayToObject } from "../utils/utils.js";

function reducer(
  state = {
    companies: {
      loading: false,
      loaded: false,
      error: "",
      data: {},
      selectedCompanyId: ""
    },
    employees: { loading: false, loaded: false, error: "", data: {} },
    projects: {
      loading: false,
      loaded: false,
      error: "",
      data: {},
      selectedProjectId: ""
    },
    companyAddresses: { loading: false, loaded: false, error: "", data: {} }
  },
  action
) {
  switch (action.type) {
    case "FETCH_COMPANIES":
      return {
        ...state,
        companies: { ...state.companies, loading: true, error: "" }
      };
    case "FETCH_COMPANIES_SUCCESS":
      return {
        ...state,
        companies: {
          loading: false,
          loaded: true,
          error: "",
          data: arrayToObject(action.data)
        }
      };
    case "FETCH_COMPANIES_ERROR":
      return {
        ...state,
        companies: { ...state.companies, loading: false, error: action.error }
      };
    case "SELECT_COMPANY":
      return {
        ...state,
        companies: { ...state.companies, selectedCompanyId: action.companyId }
      };
    case "FETCH_EMPLOYEES":
      return {
        ...state,
        employees: { ...state.employees, loading: true, error: "" }
      };
    case "FETCH_EMPLOYEES_SUCCESS":
      return {
        ...state,
        employees: {
          loading: false,
          loaded: true,
          error: "",
          data: arrayToObject(action.data)
        }
      };
    case "FETCH_EMPLOYEES_ERROR":
      return {
        ...state,
        employees: { ...state.employees, loading: false, error: action.error }
      };
    case "FETCH_PROJECTS":
      return {
        ...state,
        projects: { ...state.projects, loading: true, error: "" }
      };
    case "FETCH_PROJECTS_SUCCESS":
      return {
        ...state,
        projects: {
          loading: false,
          loaded: true,
          error: "",
          data: arrayToObject(action.data)
        }
      };
    case "FETCH_PROJECTS_ERROR":
      return {
        ...state,
        projects: {
          ...state.projects,
          loading: false,
          error: action.error
        }
      };
    case "SELECT_PROJECT":
      console.log(action.projectId);
      return {
        ...state,
        projects: { ...state.projects, selectedProjectId: action.projectId }
      };
    case "FETCH_COMPANY_ADDRESSES":
      return {
        ...state,
        companyAddresses: { ...state.projects, loading: true, error: "" }
      };
    case "FETCH_COMPANY_ADDRESSES_SUCCESS":
      return {
        ...state,
        companyAddresses: {
          loading: false,
          loaded: true,
          error: "",
          data: arrayToObject(action.data)
        }
      };
    case "FETCH_COMPANY_ADDRESSES_ERROR":
      return {
        ...state,
        companyAddresses: {
          ...state.projects,
          loading: false,
          error: action.error
        }
      };
    default:
      return state;
  }
}

export default reducer;
