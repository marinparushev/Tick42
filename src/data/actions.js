export const SELECT_COMPANY = "SELECT_COMPANY";
export const SELECT_JOB_AREA = "SELECT_JOB_AREA";
export const SELECT_EMPLOYEE = "SELECT_EMPLOYEE";
export const SELECT_PROJECT = "SELECT_PROJECT";

export function selectCompany(id) {
  return {
    type: SELECT_COMPANY,
    payload: {
      companyId: id
    }
  };
}

export function selectJobArea(jobArea) {
  return {
    type: SELECT_JOB_AREA,
    payload: {
      jobArea
    }
  };
}

export function selectEmployee(id) {
  return {
    type: SELECT_EMPLOYEE,
    payload: {
      employeeId: id
    }
  };
}

export function selectProject(id) {
  return {
    type: SELECT_PROJECT,
    payload: {
      projectId: id
    }
  };
}
