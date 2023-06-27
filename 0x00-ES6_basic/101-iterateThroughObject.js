export default function iterateThroughObject(reportWithIterator) {
  let result = reportWithIterator.next();
  let employeesString = '';

  while (!result.done) {
    employeesString += result.value + ' | ';
    result = reportWithIterator.next();
  }

  // Remove the trailing ' | ' from the string
  employeesString = employeesString.slice(0, -3);

  return employeesString;
}
