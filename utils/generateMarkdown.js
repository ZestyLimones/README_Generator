// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = '';
  switch (license) {
    case 'Academic.Free.License':
      licenseBadge =
        'https://img.shields.io/badge/license-Academic.Free.License-blue';
      break;
    case 'Boost.Software.License':
      licenseBadge =
        'https://img.shields.io/badge/license-Boost.Software.License-blue';
      break;
    case 'ISC':
      licenseBadge = 'https://img.shields.io/badge/license-ISC-blue';
      break;
    case 'MIT':
      licenseBadge = 'https://img.shields.io/badge/license-MIT-blue';
      break;
    case 'PostgreSQL.License':
      licenseBadge =
        'https://img.shields.io/badge/license-PostgreSQL.License-blue';
      break;
    default:
      licenseBadge = '';
      break;
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  switch (license) {
    case 'Academic.Free.License':
      licenseBadge =
        'https://img.shields.io/badge/license-Academic.Free.License-blue';
      break;
    case 'Boost.Software.License':
      licenseBadge =
        'https://img.shields.io/badge/license-Boost.Software.License-blue';
      break;
    case 'ISC':
      licenseBadge = 'https://img.shields.io/badge/license-ISC-blue';
      break;
    case 'MIT':
      licenseBadge = 'https://img.shields.io/badge/license-MIT-blue';
      break;
    case 'PostgreSQL.License':
      licenseBadge =
        'https://img.shields.io/badge/license-PostgreSQL.License-blue';
      break;
    default:
      licenseBadge = '';
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${responses.title}

![Github license](https://img.shields.io/badge/license-${responses.license}-blue)

## Table of Contents
1.  [Description](#description)
2.  [Installation](#installation)
3.  [Usage](#usage)
4.  [Contibution](#contribution)
5.  [Test](#test)
6.  [Questions](#questions)
7.  [License](#license)
        
## [Description](#description)
    ${responses.description}

## Installation (#installation)
    ${responses.installation}

## [Usage](#usage)
    ${responses.usage}

## [Contribution](#contribution)
    If others would like to contribute to this project they may ${responses.contribute} the Repo.

## [Test](#test)
    The testing used for this application
     ${responses.test}

## [Questions](questions)
    If you have any questions, feel free to reach out to me via GitHub: ${responses.github}
    
    or you may also send me an email at: ${responses.email}

## [license](#license)
    This application is licensed under: ${responses.license}`;
}

module.exports = generateMarkdown;
