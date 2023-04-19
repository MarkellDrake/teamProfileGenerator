const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const template = require("./src/template");
const managerCard = require("./src/ManagerCard");
const internCard = require("./src/InternCard");
const engineerCard = require("./src/EngineerCard");

const distDir = path.resolve(__dirname, "dist");
const distPath = path.join(distDir, "teamProfile.html");
const team = [];

console.log(
  "Welcome to the team generator!\nfollow the prompts to build your team"
);
manager();
function menu() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "employeeType",
        choices: ["Engineer", "Intern", "Build a team"],
        message: "Who do you want on your team ?",
      },
    ])
    .then((response) => {
      if (response.employeeType === "Engineer") {
        engineer();
      } else if (response.employeeType === "Intern") {
        intern();
      } else if (response.employeeType === "Build a team") {
        build();
      }
    });
}
function build() {
  console.log(team);
  var cards = "";
  for (let i = 0; i < team.length; i++) {
    if (team[i].getRole() === "Manager") {
      cards = cards + managerCard(team[i]);
    } else if (team[i].getRole() === "Engineer") {
      cards = cards + engineerCard(team[i]);
    }else if(team[i].getRole() === "Intern"){
      cards = cards + internCard(team[i]);
    }
  }
  fs.writeFileSync("./dist/team.html",template(cards))
}
function manager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the team managers name?",
      },
      {
        type: "input",
        name: "managerId",
        messgae: "What is the team managers Id?",
      },
      {
        type: "input",
        name: "managerEmail",
        messgae: "What is the team managers email?",
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        messgae: "What is the team managers office number?",
      },
    ])
    .then((response) => {
      const manager = new Manager(
        response.managerName,
        response.managerId,
        response.managerEmail,
        response.managerOfficeNumber
      );
      team.push(manager);
      menu();
      //envoke function that asks user what they want to do next
    });
}
function engineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the team engineer name?",
      },
      {
        type: "input",
        name: "engineerId",
        messgae: "What is the team engineer Id?",
      },
      {
        type: "input",
        name: "engineerEmail",
        messgae: "What is the team engineer email?",
      },
      {
        type: "input",
        name: "engineerGitHub",
        messgae: "What is the team engineer's gitHub?",
      },
    ])
    .then((response) => {
      const engineer = new Engineer(
        response.engineerName,
        response.engineerId,
        response.engineerEmail,
        response.engineerGitHub
      );
      team.push(engineer);
      menu();
    });
}

function intern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is the team intern name?",
      },
      {
        type: "input",
        name: "internId",
        messgae: "What is the team intern Id?",
      },
      {
        type: "input",
        name: "internEmail",
        messgae: "What is the team intern email?",
      },
      {
        type: "input",
        name: "internSchool",
        messgae: "What is the team interns school?",
      },
    ])
    .then((response) => {
      const intern = new Intern(
        response.internName,
        response.internId,
        response.internEmail,
        response.internSchool
      );
      team.push(intern);
      menu();
    });
}
