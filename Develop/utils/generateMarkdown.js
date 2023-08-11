// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let markdown = `
  # ${data.title}
  
  ## Description
  ${data.description}
  `;
  markdown += `
  - Purpose of Project:

    ${data.purpose}
  `;
  markdown += `
  ## Table of Contents

 `;
  
   if (data.installReq === true) {
    markdown += `
  - [Installation](#installation)
    `;
   }
   if (data.usageReq === true) {
    markdown += `
  - [Usage](#usage)
    `;
   }

   // appending the sections and their content
   if (data.installReq === true){
    markdown += `
## Installation
       
       `;
    markdown += `
    ${data.installDetails}  
    `;   
   } else {}
   if (data.usageReq === true) {
    markdown += `
## Usage
    
       `;
    markdown += `
    ${data.usageDetails}
    `
   } else {}
   
   
  
    
  
  return markdown;
}

module.exports = generateMarkdown;
