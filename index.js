// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Please describe your application.',
    name: 'description',
  },
  {
    type: 'input',
    message: 'What are the instation instructions?',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'What is the purpose of this application?',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'How may others contribute to this project',
    name: 'contribute',
  },
  {
    type: 'input',
    message: 'What command should be used to run tests?',
    name: 'test',
    default: 'npm test',
  },
  {
    type: 'list',
    message: 'What type of license would you like to use?',
    choices: [
      'Academic.Free.License',
      'Boost.Software.License',
      'ISC',
      'MIT',
      'PostgreSQL.License',
      'None',
    ],
    name: 'license',
  },
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'github',
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  let markdownContent = generateMarkdown(data);

  fs.writeFile(fileName, markdownContent, (err) =>
    err
      ? console.log(err)
      : console.log('Successfully created a README with user input!')
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile('./utils/Demo/README.md', data);
  });
}

// Function call to initialize app
init();
