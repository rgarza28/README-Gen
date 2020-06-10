const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown")
const writeFileAsync = util.promisify(fs.writeFile);


const questions = [
    {
        message: "What is your project title?",
        name: "title"
    },
    {
        message: "Provide a description of your project",
        name: "description"
    },
    {
        message: "What command should be used to install?",
        name: "install"
    },
    {
        message: "What can this repo be used for?",
        name: "use"
    },
    {
        message: "What licesne does this repo use?",
        name: "license",
        type: "list",
        choices: ["mit", "gpl", "other", "none"]
    },
    {
        message: "Who are the contributors to this project?",
        name: "contributors"
    },
    {
        message: "Did you run any tests?",
        name: "tests"
    },
    {
        message: "What is your GitHub email?",
        name: "email"
    },
    {
        message: "What is your GitHub username?",
        name: "username"
    },
];


function askUser() {
    return inquirer.prompt(questions)
};

async function init() {
    console.log("Welcome to the ReadMe Generator");


    try {
        const answers = await askUser();

        let github = await axios.get(`https://api.github.com/users/${answers.username}`)

        const md = generateMarkdown(answers, github.data);

        await writeFileAsync("README.md", md);

        console.log("ReadME file has been generated");

    } catch (err) {
        console.log(err);
    }
};

init();
