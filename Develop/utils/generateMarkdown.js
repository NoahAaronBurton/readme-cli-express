// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge;
  if(license === 'MIT') {
    licenseBadge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else {
    licenseBadge = `![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)`
  }

  return licenseBadge;

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // title and desc
  let markdown = `
  # ${data.title}
  To do: add img anchor to the md for screenshot
  ## Description
  ${data.description}
  `;
  // purpose of project
  markdown += `
  - Purpose of Project:

    ${data.purpose}
  `;
  // ---TABLE OF CONTENTS----
  markdown += `
  ## Table of Contents

 `;
  // install instructions ref
   if (data.installReq === true) {
    markdown += `
  - [Installation](#installation)
    `;
  //usage ref  
   }
   if (data.usageReq === true) {
    markdown += `
  - [Usage](#usage)
    `;
   }
   // license ref
   markdown += `
  - [License](#license) 
   `;

   // ---APPENDING SECTIONS AND THEIR CONTENT---


   // install section
   if (data.installReq === true){
    markdown += `
## Installation
       
       `;
    markdown += `
    ${data.installDetails}  
    `;   
   } else {}
    // usage section 
   if (data.usageReq === true) {
    markdown += `
## Usage
    
       `;
    markdown += `
  ${data.usageDetails}
    `
   } else {}

   // license section
   licenseBadge = renderLicenseBadge(data.license);

   markdown += `
## License

  ${licenseBadge}
   `;
   if (data.license === 'MIT'){
    console.log('MIT selected');
    markdown += `
  Copyright ${data.licenseYear}   ${data.copyrightHolder}

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

    `;
   } else {
    markdown += `
  Copyright ${data.licenseYear} by ${data.copyrightHolder}   

  Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

  THE SOFTWARE IS PROVIDED “AS IS” AND ISC DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL ISC BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

    `;
   }

   
   
  
    
  
  return markdown;
}

module.exports = generateMarkdown;
