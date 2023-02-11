const Employee = require("./Employee");

class Engineer extends Employee {
  // constructor function from employee plus the github
  constructor(name, id, email, github) {
    super(name, id, email);

    // only specific to engineer question 
    this.github = github;
  }

  // methods
  getGithub() {
    return this.github;
  }
// overwrites the getrole from Employee 
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;