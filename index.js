const inquirer = require("inquirer");
const fs = require("fs"); 

// Linking this index.js to all the files within the library folder
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");




// function to write HTMl file

// array of questions for manager

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
]



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
]

// need an empty array to push these answers into 

// manager questions need to come first
// need to include github for engineer, school for intern, office number for manager