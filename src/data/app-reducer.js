import {
  SELECT_COMPANY,
  SELECT_JOB_AREA,
  SELECT_EMPLOYEE,
  SELECT_PROJECT
} from "./actions";

const initialState = {
  selectedCompanyId: undefined
};

function app(state = initialState, action) {
  switch (action.type) {
    case SELECT_COMPANY:
      return {
        ...state,
        selectedCompanyId: action.payload.companyId,
        selectedProjectId: undefined,
        selectedJobArea: undefined,
        selectedEmployeeId: undefined
      };
    case SELECT_JOB_AREA:
      return {
        ...state,
        selectedCompanyId: undefined,
        selectedProjectId: undefined,
        selectedJobArea: action.payload.jobArea,
        selectedEmployeeId: undefined
      };
    case SELECT_EMPLOYEE:
      return {
        ...state,
        selectedCompanyId: undefined,
        selectedProjectId: undefined,
        selectedJobArea: undefined,
        selectedEmployeeId: action.payload.employeeId
      };
    case SELECT_PROJECT:
      return {
        ...state,
        selectedProjectId: action.payload.projectId,
        selectedJobArea: undefined,
        selectedEmployeeId: undefined
      };
    default:
      return state;
  }
}

export default app;
