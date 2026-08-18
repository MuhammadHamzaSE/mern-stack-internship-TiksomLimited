# Day 2: MERN Stack Internship Tiksom Limited

## Introduction to Git and GitHub

## Hands-on Tasks
- Create a new local repository.
- Initialize Git.
- Create:
  - README.md
  - .gitignore
- Make multiple commits.
- Push the repository to GitHub.
- Clone the repository into another folder.

## Deliverables
- GitHub repository.
- Minimum 5 meaningful commits.
- Proper README.md.


# Day 3: Git Branching & Collaboration

## Hands-on Tasks
- Create a feature branch.
- Modify the README.
- Merge the branch.
- Delete the branch.
- Simulate a merge conflict and resolve it.

## Deliverables
- Repository with feature branch history.
- Screenshot of merge conflict resolution.
- Notes explaining GitHub Flow.


# Day 4: Setting Up Your First Node.js Project & npm Basics

## Hands-on Tasks
- Run `npm init` (and `npm init -y`) to generate a `package.json`; understand each field (`name`, `version`, `main`, `scripts`, `dependencies`, `devDependencies`).
- Install a package as a dependency (e.g., `chalk` or `dayjs`) and a package as a dev dependency (e.g., `nodemon`).
- Add a custom npm script (e.g., `"start": "node index.js"`) and run it with `npm run`.
- Use `npx` to run a package without installing it globally.
- Explore the difference between dependencies, devDependencies, and global installs.

## Deliverables
- A small Node.js project folder with a proper `package.json`, at least one dependency and one dev dependency installed, and a working npm script.
- Pushed to GitHub (with `node_modules` correctly ignored).


# Day 5: Weekly Review Practical

- Initialize the Node.js project with a maintainable package.json file.
- Create a repository from scratch.
- Resolve a merge conflict.
- Push code to GitHub.


# Day 6: Introduction to JavaScript

## Hands-on Tasks
Write programs demonstrating:
- Hello World
- Variables
- Constants
- String interpolation
- User input (via `readline` or `prompt-sync`)
- Printing output

## Exercise
Create a Node.js script that asks:
- Name
- Age
- Favorite programming language
Print a formatted introduction.

## Deliverables
- `hello_world.js`
- `introduction.js`
- Push all work to GitHub


# Day 7: Variables, Data Types, Conditionals & Loops

## Hands-on Tasks
Practice:
- Numbers
- Strings
- Booleans
- null/undefined
- Template literals
- if/else if/else
- switch
- While Loop
- Do...while
- For Loop
- For of
- For...in

## Exercise
- Build a small calculator supporting addition, subtraction, multiplication, and division, using conditionals (if/else or switch) to select the operation.
- Create a number guessing game using a loop to allow repeated guesses.
- Practice loop patterns: using nested for loops, print common patterns.

## Deliverables
- `calculator.js`
- `guessing_game.js`
- `loop_patterns.js`


# Day 8: Operators, Functions & Scope

## Hands-on Tasks
Practice:
- Arithmetic operators (+, -, *, /, %, **).
- Comparison operators (== vs ===, != vs !==, <, >, <=, >=) and understand type coercion pitfalls.
- Logical operators (&&, ||, !), the ternary operator (condition ? a : b), nullish coalescing (??), and optional chaining (?.).
- Function declarations
- Function expressions
- Arrow functions
- Default parameters
- Closures

## Exercise
- Practice arithmetic, comparison, logical, ternary, nullish coalescing (??), and optional chaining (?.) operators through small code examples.
- Compare the behavior of var, let, and const using practical examples.
- Create and invoke:
  - Function declarations
  - Function expressions
  - Arrow functions
  - Functions with default parameters
- Write examples demonstrating:
  - Global scope
  - Function scope
  - Block scope
  - Closures

## Deliverables
- `operators_practice.js`
- `functions_practice.js`
- `scope_practice.js`
- `closures_practice.js`


# Day 9 & 10: Arrays, Objects & Collection Methods

## Hands-on Tasks Practice

### Arrays
- Create, access, update, and delete array elements.
- Use common array methods:
  - `push()`
  - `pop()`
  - `shift()`
  - `unshift()`
  - `slice()`
  - `splice()`

### Objects
- Create, update, and delete object properties.
- Access properties using dot and bracket notation.
- Loop through objects using `for...in` and `Object.keys()`.

### Array Methods
- `map()`
- `filter()`
- `reduce()`
- `forEach()`
- `find()`
- `findIndex()`
- `some()`
- `every()`
- `sort()`
- `includes()`

### ES6 Features
- Object Destructuring
- Array Destructuring
- Spread Operator (`...`)
- Rest Parameters (`...`)

## Exercise
- Practice all array methods using a sample array of numbers and strings.
- **Create a Student Grades Analyzer:**
  - Calculate each student's average marks.
  - Find the top scorer.
  - Filter students who passed.
  - Sort students by average marks.
- **Create an Employee Directory:**
  - Store employee information in an array of objects.
  - Search employees by name.
  - Filter employees by department.
  - Calculate the average salary using `reduce()`.
- Use destructuring and the spread operator to clone and update objects and arrays without modifying the original data.

## Deliverables
- `array_methods_practice.js`
- `object_practice.js`
- `grades_analyzer.js`
- `employee_directory.js`
- `destructuring_practice.js`


# Day 11: Weekly Review

## Hands-on Tasks
Starting from an empty project:
- Create a new Git repository.
- Create a `week2-review` folder.
- Write JavaScript programs demonstrating:
  - Variables and data types
  - Conditionals and loops
  - Operators
  - Function declarations, expressions, and arrow functions
  - Scope and closures
  - Arrays and objects
  - Array methods (`map`, `filter`, `reduce`, `find`, `forEach`)
  - Object and array destructuring
  - Spread and rest operators
- Commit your work using meaningful commit messages.
- Push the repository to GitHub.

## Practical
- Build a simple calculator using functions.
- Create a program that processes an array of objects using `map()`, `filter()`, and `reduce()`.
- Demonstrate the use of closures and different scopes.
- Solve 5 array manipulation problems using modern JavaScript methods.
- Push all solutions to GitHub with meaningful commit messages.


# Day 12: Asynchronous JavaScript & Error Handling

## Hands-on Tasks Practice
- Synchronous vs Asynchronous
- `setTimeout()`
- `setInterval()`
- Callback Functions
- Callback Hell
- Promises
- Promise Chaining
- `async/await`
- `try/catch`
- `.then()`
- `.catch()`
- `.finally()`
- Handle API errors

## Exercise
- Create custom Promises.
- Display user information after the Promise resolves.
- Handle loading, success, and error states using `try...catch`.
- Compare the same API request using both `.then()` and `async/await`.

## Deliverables
- `promises_practice.js`
- `async_await_practice.js`
- `error_handling.js`


# Day 13: HTTP, REST APIs & Fetch API

## Hands-on Tasks Practice
- HTTP Request & Response
- REST APIs
- API Endpoints
- HTTP Methods
- Status Codes:
  - 200
  - 201
  - 400
  - 401
  - 403
  - 404
  - 500
- Request Headers
- Response Body
- JSON Parsing
- Fetch API
- Error Handling

## Exercise
- Fetch users from JSON placeholder.
- Display user names and emails.
- Fetch posts for a selected user.
- Create a POST request.
- Handle API errors gracefully.

## Deliverables
- `fetch_practice.js`
- `rest_api_practice.js`
- `json_practice.js`


# Day 14: npm Packages, Axios & Environment Variables

## Hands-on Tasks Practice
- `npm init`
- Install Packages
- Remove Packages
- Update Packages
- `package.json`
- `package-lock.json`
- Dependencies
- Dev Dependencies
- Global vs Local Packages
- Axios GET Request
- Axios POST Request
- Environment Variables
- `.env`
- `.gitignore`

## Exercise
- Create a new Node.js project.
- Install Axios and dotenv.
- Fetch data using Axios.
- Store the API URL inside `.env`.
- Compare Fetch API and Axios.

## Deliverables
- `axios_practice.js`
- `npm_practice.md`
- `dotenv_practice.js`


# Day 15: JavaScript Mini Project - User Management System

## Project Overview
Built a **User Management System** using modular JavaScript to fetch, filter, sort, and display user data from a public API.

## Features
- Fetch users from a public API using `async/await`.
- Display all users dynamically.
- Search users by name.
- Filter users by company.
- Sort users alphabetically.
- View individual user details.
- Gracefully handle API errors.
- Organize code into clean, reusable modules.
- Secure environment configuration using `.env`.

## Concepts Covered
- Functions
- Arrays & Objects
- Array Methods (`map`, `filter`, `sort`, etc.)
- Async/Await
- Fetch API / Axios
- Error Handling (`try...catch`)
- ES6 Modules
- Environment Variables

## Deliverables
- `user-management-system/`


# Day 16: Weekly Review

## Hands-on Tasks
Starting from an empty directory:
- Initialize a Node.js project.
- Configure `package.json`.
- Install required npm packages.
- Create a modular folder structure.
- Fetch data from a public API.
- Process API responses using JavaScript array methods.
- Handle errors using `try...catch`.
- Store configuration values in `.env`.
- Push the completed project to GitHub.

## Practical
- Create a custom Promise.
- Fetch data from a public API using both Fetch and Axios.
- Handle API errors using `try...catch`.
- Create a Node.js project using npm.
- Build a modular application using ES Modules.


# Day 17: Introduction to React & Project Setup

## Hands-on Tasks Practice
- What is React?
- Why React?
- SPA vs MPA
- Virtual DOM
- React Project Structure
- Vite (`npm create vite`)
- JSX Syntax
- Rendering Elements
- Expressions in JSX
- React Fragments (`<> </>`)

## Exercise
- Install Node.js dependencies.
- Create a React project using Vite.
- Explore the project structure.
- Modify the default application.
- Display personal information using JSX.
- Display the current date and time.
- Display variables and expressions inside JSX.

## Deliverables
- `react-introduction/`
- `hello-react/`
- `jsx-practice/`


# Day 18: Components & Props

## Hands-on Tasks Practice
- Functional Components
- Component Naming Conventions
- Nested Components
- Props & Passing Data
- Default Props
- Children Props
- Component Reusability

## Exercise
- Build reusable UI components:
  - Header
  - Footer
  - Navbar
  - User Card
  - Product Card
- Create a `Student Card` component that receives:
  - Name
  - Roll Number
  - Department
  - CGPA
  - Image
- Render multiple student cards using props.

## Deliverables
- `components_practice/`
- `student_card_app/`


# Day 19: State & Event Handling

## Objective
- Learn state management using `useState`.
- Update UI dynamically.
- Handle user interactions.

## Hands-on Tasks Practice
- `useState` Hook
- Event Handling (Click, Input, Form Events)
- Updating State
- Managing Multiple State Variables

## Exercise
- Counter App
- Show/Hide Password Toggle
- Light/Dark Theme Toggle
- Live Character Counter

## Deliverables
- `counter_app/`
- `theme_toggle/`
- `character_counter/`


# Day 20: Rendering Lists & Conditional Rendering

## Objective
- Render dynamic data.
- Display lists using `map()`.
- Conditionally display UI.

## Hands-on Tasks Practice
- `map()` Array Method
- Keys in React Lists
- Conditional Rendering
- Ternary Operator (`? :`)
- Logical AND Operator (`&&`)
- Filtering Lists
- Empty State UI Handling

## Exercise
- Create:
  - Student List
  - Employee List
  - Product List
- Features:
  - Search functionality
  - Filter options
  - Display "No Data Found" empty state
  - Highlight Active Users dynamically

## Deliverables
- `student_list/`
- `employee_directory/`
- `product_listing/`


# Day 21: Weekly Review & Mini Project (Student Management Dashboard)

## Objective
Apply everything learned during Week 4 by building a React application from scratch.

## Mini Project: Student Management Dashboard
### Features:
- Header & Sidebar navigation layout
- Dynamic Student List with Student Cards
- Live Search functionality by student name
- Filter students by Department
- Dynamic Total Students Count
- Active/Inactive Student Status indicators

### Concepts Applied:
- JSX Syntax
- Component Composition
- Props & Default Props
- `useState` State Management
- Event Handling
- Conditional Rendering
- Dynamic List Rendering using `map()` and unique Keys

## Weekly Quiz Coverage
- **Theory:** React basics, JSX, Components, Props vs State, `useState()`, State Immutability, Importance of Keys, Conditional Rendering, and Component Composition.
- **Practical:** Built reusable components, passed prop data, managed dynamic state, rendered complex array objects, applied conditional UI elements, and authored custom interactive components.

## Weekly Deliverables
- GitHub repository containing Week 4 exercises
- 15–20 meaningful commits
- All React practice exercises completed
- Product Listing review exercise completed
- Student Management Dashboard completed
- Weekly quiz completed
- Clean, modular React project structure


# Day 22: Flexbox, Grid & CSS Positioning

## Objective
- Understand modern CSS layout systems.
- Build 1D layouts using Flexbox and 2D layouts using CSS Grid.
- Master layout decision-making (Flexbox vs CSS Grid).
- Understand element positioning and layering (`z-index`).

## Hands-on Tasks Practice

### Flexbox
- **Properties Practiced:** `display: flex`, `flex-direction`, `justify-content`, `align-items`, `align-content`, `flex-wrap`, `gap`, `flex-grow`, `flex-shrink`, `flex-basis`, `order`
- **Layouts Built:** Navbar, Two-column layout, Card row, Centered content, Footer

### CSS Grid
- **Properties Practiced:** `display: grid`, `grid-template-columns`, `grid-template-rows`, `gap`, `grid-column`, `grid-row`, `repeat()`, `minmax()`
- **Layouts Built:** Image gallery, Product grid, Dashboard layout

### Positioning
- **Types Practiced:** `static`, `relative`, `absolute`, `fixed`, `sticky`, `z-index`

## Exercise
- **Dashboard UI Project:**
  - Sidebar & Header (using Flexbox)
  - Grid-based Dashboard sections (Statistics cards, Main content, Recent activity, User table)
  - Positioning overlays for Badges and UI elements


  # Day 23: Responsive Design & CSS Patterns

## Objective
- Master responsive web design principles and mobile-first development.
- Implement media queries and custom breakpoints effectively.
- Create flexible layouts using relative units (`max-width`, `%`, `rem`, `em`, `vw`, `vh`).
- Build and adapt common responsive UI patterns across different screen sizes.

## Hands-on Tasks Practice

### Responsive Fundamentals
- Mobile-first CSS workflow
- Media queries & Breakpoints
- Responsive containers & Flexible widths
- Responsive images & Typography

### Common CSS Patterns Built
- Responsive navbar (hamburger menu layout)
- Responsive card grid
- Two-column to one-column layout transition
- Responsive sidebar (collapsible/toggleable)
- Sticky header & Hero section
- Responsive image gallery

## Exercise
- **Responsive Dashboard UI:** Converted the Day 24 Dashboard UI into a fully mobile-responsive dashboard that seamlessly adapts across mobile, tablet, and desktop views.