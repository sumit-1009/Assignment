class Employee {
  constructor(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
  }

  displayDetails() {
    console.log(`ID: ${this.id}, Name: ${this.name}, Salary: $${this.salary}`);
  }
}


const employees = [
  new Employee(101, "Sumit", 50000),
  new Employee(102, "Santosh", 60000),
  new Employee(103, "Sahu", 70000),
];

console.log("Employee Details:");
employees.forEach((emp) => emp.displayDetails());