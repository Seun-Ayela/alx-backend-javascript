export default function createIteratorObject(report) {
  const employeesIterator = {
    departments: Object.values(report.allEmployees),
    currentIndex: 0,
    next() {
      if (this.currentIndex >= this.departments.length) {
        return { done: true };
      }
      const department = this.departments[this.currentIndex];
      const employee = department.shift();
      if (department.length === 0) {
        this.currentIndex += 1;
      }
      return { value: employee, done: false };
    },
  };
  return employeesIterator;
}
