const inquirer = require("inquirer");
const fs = require("fs"); 

// Linking this index.js to all the files within the library folder
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHtml = require("./utils/generatehtml"); 

// Empty array to begin with 
const employees = [];

function writeToFile(fileName, data) {
  

  fs.writeFile(fileName, generateHtml(employees), (err) =>
    err ? console.error(err) : console.log("index.html successfully created!")
  );
}

// array of questions for all employees

const managerQuestionsArr = [
    {
      type: "input",
      message: "What is your manager's first name?",
      name: "firstName",
    },
    {
        type: "input",
        message: "What is your manager's last name?",
        name: "lastName",
      },
      {
        type: "input",
        message: "What is your manager's id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your manager's email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your manager's office number?",
        name: "officeNumber",
      },
]
// Created a function that will initiate the prompt for the manager questions.
function init() {
  inquirer.prompt(managerQuestionsArr).then((answers) => {
    const manager = new Manager(
      answers.firstName + " " + answers.lastName,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    employees.push(manager);
    return askPromptQuestions();
  });
}

// Questions to add a new kind of employee 
const startQuestions= [
  {
      type: "list",
      message: "What kind of employee do you want to add to your team?",
      choices: ["Engineer", "Intern", "Exit"],
      name: "employeeSelection",
  }
];
function askPromptQuestions() {
  inquirer.prompt(startQuestions)
  .then((answers) => {
    if (answers.employeeSelection === "Intern") {
      promptInternQuestionsArr();
    }
    if (answers.employeeSelection === "Engineer") {
      promptEngineerQuestionsArr();
    }
    if (answers.employeeSelection === "Exit") {
      exit();
    }
  })
}
function promptInternQuestionsArr(){
  // Questions specific to the intern 
  const internQuestionsArr = [
    {
      type: "input",
      message: "What is your intern's first name?",
      name: "firstName",
    },
    {
        type: "input",
        message: "What is your intern's last name?",
        name: "lastName",
      },
      {
        type: "input",
        message: "What is your intern's id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your intern's email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your intern's school name?",
        name: "school",
      },
];
      inquirer.prompt(internQuestionsArr).then((answers) =>  {
        const intern = new Intern(
          answers.firstName + " " + answers.lastName,
          answers.id,
          answers.email,
          answers.school
        );
        employees.push(intern);
        return askPromptQuestions();
      });
 }


    

function promptEngineerQuestionsArr() {
  const engineerQuestionsArr = [
    {
      type: "input",
      message: "What is your engineer's first name?",
      name: "firstName",
    },
    {
        type: "input",
        message: "What is your engineer's last name?",
        name: "lastName",
      },
      {
        type: "input",
        message: "What is your engineer's id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your engineer's email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your engineer's github username?",
        name: "github",
      },
];
inquirer.prompt(engineerQuestionsArr).then((answers) => {
  const engineer = new Engineer(
    answers.firstName + " " + answers.lastName,
          answers.id,
          answers.email,
          answers.github
  );
  employees.push(engineer);
  return askPromptQuestions();
});
}


// function to write HTMl file and exit the questions 
function exit() {
  writeToFile("index.html", employees);
}


init(); 




