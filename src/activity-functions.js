export function navbar(location) {
  return true; // The navbar is always active
}

export function employees(location) {
  // console.log(location)
  // console.log(location.pathname)
  // return location.pathname === "/employees";
  // return location.pathname.employees;
  return true;
}

export function employeeDetails(location) {
  const regex = /^\/employees\/\d+?$/;
  return location.pathname.match(regex);
}