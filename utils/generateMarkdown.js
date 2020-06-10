function generateMarkdown(data) {
  return `


<h2 align="center">${answers.title}</h2>


<p align="center" margin="45px">
<a>
<img src="https://img.shields.io/badge/Author%3A-Bobby%20Garza-red"/>></>
</a>

<a>
<img src="https://img.shields.io/badge/Release%3A-1.0-blue"/>></>
</a>
</p>

## Description
${answers.description}


## Contents<br>
**[Installation](#Installation)**<br>
**[Usage](#Usage)**<br>
**[License](#License)**</br>
**[Contributors](#Contributors)**<br>
**[Tests](#Tests)**<br>
**[Contact](#Contact)**<br>

## **Installation**<br>
${answers.install}

## **Usage**<br>
${answers.usage}

## **License**<br>
${answers.license}

## **Contributors**<br>
${answers.contributors}

## **Tests**<br>
${answers.tests}

## **Contact**<br>
${answers.email}<br>

<img src="${data.avatar_url}" class="profile" align="left" height="80"/>

`;
}













module.exports = generateMarkdown;
