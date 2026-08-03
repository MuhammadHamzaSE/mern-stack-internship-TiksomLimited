# NPM Practice
 
## 1. What is NPM?
 
NPM (Node Package Manager) is the default package manager for Node.js.

It is used to install, update, remove, and manage packages in a Node.js project.
 
---
 
## 2. npm init
 
Creates a new Node.js project and generates a package.json file.
 
Command:
 
```bash

npm init

```
 
Quick version:
 
```bash

npm init -y

```
 
---
 
## 3. Install Packages
 
Install a package locally:
 
```bash

npm install axios

```
 
Install multiple packages:
 
```bash

npm install axios dotenv

```
 
---
 
## 4. Remove Packages
 
Remove a package:
 
```bash

npm uninstall axios

```
 
Remove a global package:
 
```bash

npm uninstall -g nodemon

```
 
---
 
## 5. Update Packages
 
Update a package:
 
```bash

npm update axios

```
 
Update all packages:
 
```bash

npm update

```
 
---
 
## 6. package.json
 
package.json contains information about the project.
 
Example:
 
```json

{

  "name": "npm-practice",

  "version": "1.0.0",

  "main": "index.js",

  "scripts": {

    "start": "node index.js"

  },

  "dependencies": {

    "axios": "^1.11.0"

  }

}

```
 
---
 
## 7. package-lock.json
 
package-lock.json stores the exact versions of installed packages.

It ensures everyone working on the project installs the same package versions.
 
---
 
## 8. Dependencies
 
Dependencies are packages required to run the application.
 
Example:
 
```bash

npm install axios

```
 
Stored inside:
 
```json

"dependencies": {

  "axios": "^1.11.0"

}

```
 
---
 
## 9. Dev Dependencies
 
Dev dependencies are packages used only during development.
 
Example:
 
```bash

npm install -D nodemon

```
 
Stored inside:
 
```json

"devDependencies": {

  "nodemon": "^3.1.10"

}

```
 
---
 
## 10. Global vs Local Packages
 
### Local Package
 
Installed only inside the current project.
 
```bash

npm install axios

```
 
### Global Package
 
Installed for the entire system.
 
```bash

npm install -g nodemon

```
 
List global packages:
 
```bash

npm list -g --depth=0

```
 
---
 
## 11. Axios GET Request
 
Example:
 
```javascript

const axios = require("axios");
 
async function getUsers() {

    const response = await axios.get("https://jsonplaceholder.typicode.com/users");

    console.log(response.data);

}
 
getUsers();

```
 
---
 
## 12. Axios POST Request
 
Example:
 
```javascript

const axios = require("axios");
 
async function createUser() {

    const response = await axios.post(

        "https://jsonplaceholder.typicode.com/users",

        {

            name: "Sohaib",

            age: 22

        }

    );
 
    console.log(response.data);

}
 
createUser();

```
 
---
 
## 13. Environment Variables
 
Environment variables store configuration values outside the source code.
 
Examples:
 
- API URL

- Database URL

- API Keys

- JWT Secret

- Port Number
 
Access them using:
 
```javascript

process.env.VARIABLE_NAME

```
 
---
 
## 14. .env
 
The `.env` file stores environment variables.
 
Example:
 
```env

API_URL=https://jsonplaceholder.typicode.com/users

PORT=5000

```
 
Load them in Node.js:
 
```javascript

require("dotenv").config();

```
 
Access values:
 
```javascript

process.env.API_URL

process.env.PORT

```
 
---
 
## 15. .gitignore
 
The `.gitignore` file tells Git which files and folders should not be uploaded to GitHub.
 
Example:
 
```text

node_modules

.env

```
 
---
 
# Summary
 
- npm init → Create a Node.js project.

- npm install → Install packages.

- npm uninstall → Remove packages.

- npm update → Update packages.

- package.json → Project information.

- package-lock.json → Exact package versions.

- dependencies → Required to run the application.

- devDependencies → Used only during development.

- Local packages → Available only in the current project.

- Global packages → Available system-wide.

- Axios GET → Retrieve data from an API.

- Axios POST → Send data to an API.

- Environment Variables → Store configuration securely.

- .env → Stores environment variables.

- .gitignore → Prevents files like node_modules and .env from being pushed to GitHub.
 