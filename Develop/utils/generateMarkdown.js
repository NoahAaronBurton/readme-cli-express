
function renderLicenseBadge(license) {
  let licenseBadge;
  if(license === 'MIT') {
    licenseBadge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else {
    licenseBadge = `![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)`
  }

  return licenseBadge;

}


function generateMarkdown(data) {
  // title and desc
  let placeholderImg = `![placeholder img](https://placehold.co/600x400)`;
  let markdown = `
  # ${data.title}
  
  
  ## Description
  ${data.description}


  ${placeholderImg}
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
   // contrib ref
   if (data.contribReq === true) {
    markdown += `
  - [Contributing](#contributing) 
     `;
   }
   // tests ref
   if (data.testReq === true) {
    markdown += `
  - [Tests](#tests)  
    `;
   }

   // questions ref
   if(data.questionsReq === true) {
    markdown += `
  - [Questions](#questions)  
    `;
   }

   // credits ref
   if (data.creditsReq === true) {
    markdown += `
  - [Credits](#credits)  
    `;
   }
   

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

   // contributing section
   if (data.contribReq === true) {
    markdown += `
  ## Contributing

  ${data.contribDetails}

  1. Fork the Project
  2. Create your Feature Branch ('git checkout -b feature/AmazingFeature')
  3. Commit your Changes ('git commit -m 'Add some AmazingFeature')
  4. Push to the Branch ('git push origin feature/AmazingFeature')
  5. Open a Pull Request
     `;
   }

   //tests section
   if (data.testReq === true) {
    markdown += `
  ## Tests
  
    ${data.testDetails}

    `;
   }
   // questions section
   if(data.questionsReq === true) {
    let githubUsername = data.githubUsername;
    let githubUsernameURL = 'https://github.com/'+ githubUsername;
    let userEmail = data.userEmail;
    console.log(githubUsername);
    markdown += `
  ## Questions

  
  

  [![${githubUsername}](${'https://img.shields.io/badge/' + githubUsername + '-GitHub-purple.svg'})](${githubUsernameURL})


  Contact Email: ${userEmail}
    `;
   }
   // credits section
   if (data.creditsReq === true) {
    markdown += `
  ## Credits
  
  
    `;
    for (let i = 0; i < data.creditsSlots; i++) {
      markdown += `
  - []()
      `;
    }
   }
   
  
    
  
  return markdown;
}

module.exports = generateMarkdown;
