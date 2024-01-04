// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions =
    [
        {
            type: 'input',
            message: 'Please enter the title',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Please enter the description',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Please enter installation instructions',
            name: 'install',
        },
        {
            type: 'input',
            message: 'PLease enter the usage information',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'Please enter licensing information',
            name: 'license',
            choices: ['MIT', 'GNU', 'Apache', 'BSD']
        },
        {
            type: 'input',
            message: 'Please enter contributing information',
            name: 'contrib',
        },
        {
            type: 'input',
            message: 'Please enter tests information',
            name: 'test',
        },
        {
            type: 'input',
            message: 'Please enter github username',
            name: 'github',
        },
        {
            type: 'input',
            message: 'Please enter email',
            name: 'email',
        }
    ]

let readmestr = ``
// TODO: Create a function to write README file
let license_badge = [
    {
        id: 'MIT',
        svg: '[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        content: `Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
    },
    {
        id: 'GNU',
        svg: '[![License](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
        content: `Copyright © 2007 Free Software Foundation, Inc. <https://fsf.org/>

        Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.`
    },
    {
        id: 'Apache',
        svg: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
        content: `Apache License, Version 2.0
        Version 2.0
        Submitted: February 8, 2004
        Submitter: Kevin Coar
        SPDX short identifier: Apache-2.0
        Steward:Apache Software Foundation
        Link to license steward's version`
      },
    {
        id: 'BSD',
        svg: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
        content: `1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

        2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
        
        3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
        
        THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS IS” AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`
    } 
]

let installinstr = `You will need Node.js for this application.  To check if you already have it type "node -v".
You will see a version number if already installed. To install go [Node](https://nodejs.org/en/download) download site. \n\n`
let usageinfo = ``
function writeToFile(fileName, data) {
    inquirer.prompt(questions).then((response) => {
        license_svg = license_badge.find(license => license.id === response.license).svg
        license_content = license_badge.find(license => license.id === response.license).content
        readmestr += `# ${response.title} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${license_svg}\n\n`
        readmestr += `## Description: \n`
        readmestr += `${response.description}\n\n`
        readmestr += ` ## Table of contents\n`
        readmestr += ` * [Installation](#installation)\n`
        readmestr += ` * [Usage](#usage)\n`
        readmestr += ` * [Contributions](#contributions)\n`
        readmestr += ` * [License](#license)\n`
        readmestr += ` * [Test](#test)\n`
        readmestr += ` * [Questions](#questions)\n`
        readmestr += `## Installation\n`
        readmestr += `${response.install}\n\n`
        readmestr += `## Usage\n`
        readmestr += `${response.usage}\n\n`
        readmestr += `## Contributions\n`
        readmestr += `${response.contrib}\n\n`
        readmestr += `## License\n`
        readmestr += `#### ${response.license}\n`
        readmestr += `${license_content}\n\n`
        readmestr += `## Test\n`
        readmestr += `${response.test}\n\n`
        readmestr += `## Questions\n`
        readmestr += `Github account: [${response.github}](https://github.com/${response.github})\n\n`
        readmestr += `Email: [${response.email}](${response.email})\n\n`

        fs.writeFile('README.md', readmestr, (err) => {
            err ? console.error(err) : console.log('successfully created readme file')
        })

        // console.log(readmestr)
    })
}

// TODO: Create a function to initialize app
function init() {
    writeToFile()
}

// Function call to initialize app
init();
