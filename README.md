### Attention to Detail Auto Website

Welcome to the GitHub repository for the Attention to Detail Auto website! This project is a dynamic and responsive web application built to showcase and manage services for a premier car detailing business based in Southern New Jersey.

## Project Overview

This website includes both a frontend and a backend, developed using modern web technologies to provide a seamless user experience for both customers and administrators.

## TODO

### Test Acuity Scheduling Integration

- **Objective**: Ensure that the webhooks from Acuity Scheduling are correctly capturing data and updating it in the MongoDB database.
- **Details**: Verify that data such as email addresses and purchase amounts from bookings are accurately captured and stored.
- **Steps**:
  1. Review webhook responses to ensure they contain the required data.
  2. Create tests to simulate various booking scenarios to check data consistency.
  3. Debug any issues found during testing to ensure reliable data handling.

### Connect Frontend with Backend API Calls

- **Objective**: Make sure the frontend can effectively communicate with the backend services.
- **Details**: Implement and test API calls for fetching and sending data to the backend.
- **Steps**:
  1. Define necessary API endpoints in the backend.
  2. Develop frontend logic to make API calls and handle responses.
  3. Test frontend interactions to ensure data is handled correctly.

### Maintain Code and Documentation Quality

- **Objective**: Keep the project's codebase and documentation clear and up-to-date.
- **Steps**:
  1. Regularly review and refactor code for clarity and efficiency.
  2. Update documentation to match current project structure and functionalities.
  3. Utilize peer reviews to improve coding practices and discover potential issues early.

### Adjust Global CSS File to Remove Redundant CSS Files and Classes

- **Objective**: Streamline CSS to improve maintainability and performance.
- **Steps**:
  1. Review and list all current CSS files and classes.
  2. Remove unused or redundant styles.
  3. Update `index.css` and ensure functionality remains intact.
  4. Test for visual consistency and document the changes.

### Frontend

The frontend is built with React and styled using React-Bootstrap to ensure a responsive and professional look. Key features include:

- **Service Listings**: Detailed descriptions of available car detailing services.
- **Appointment Scheduling**: Integration with Acuity Scheduling to allow customers to book appointments easily.
- **User Authentication**: Auth0 is used to manage user authentication and secure access to user-specific features.
- **Rewards Program**: Customers can view and redeem rewards points based on their spending.

### Backend

The backend is developed using Node.js and Express.js, with MongoDB and Mongoose handling data storage and retrieval. Key functionalities include:

- **User Management**: Secure authentication and user data handling through Auth0.
- **Rewards System**: Tracks customer spending and manages rewards points.
- **Appointment Integration**: Handles scheduling data from Acuity Scheduling for the Rewards program.

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). To get started, clone the repo and install the dependencies.

```bash
git clone <repository-url>
cd attention-to-detail-auto
npm install
```

# Available Scripts

In the project directory, you can run the following scripts:

### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload if you make edits, and you will also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified, and the filenames include the hashes. Your app is ready to be deployed!

### `npm run eject`

**Note:** This is a one-way operation. Once you eject, you can't go back! This command will remove the single build dependency from your project and copy all the configuration files and transitive dependencies (webpack, Babel, ESLint, etc.) directly into your project. This is generally only necessary if you need full control over the configuration settings.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started). To learn React, check out the [React documentation](https://reactjs.org/).

## Project Structure

### Backend

- `config/` - Configuration files for the application.
- `controllers/` - Controller files to handle incoming requests.
- `models/` - Mongoose schemas and models for database interaction.
- `routes/` - API routes for handling requests.
- `.env` - Environment variables for configuration settings.
- `.gitignore` - Specifies intentionally untracked files to ignore.
- `checkJwt.js` - Middleware for JWT authentication.
- `package-lock.json` - Automatically generated for any operations where npm modifies either the node_modules tree or package.json.
- `package.json` - Manifest file for Node.js projects, includes metadata about the project.
- `server.js` - Entry point for the Node.js server.

### Frontend

- `node_modules/` - Contains all npm dependencies.
- `public/` - Static assets like images and icons.
- `src/` - Source files for the React application.
  - `components/` - Houses reusable UI components for the application.
  - `App.js` - Main React component for UI routing and layout.
  - `index.css` - Global stylesheet for the application.
  - `index.js` - Entry point for the React app, handling DOM rendering.
- `.gitignore` - Specifies intentionally untracked files to ignore.
- `package-lock.json` - Automatically generated for any operations where npm modifies either the node_modules tree or package.json.
- `package.json` - Manifest file for the project, defines project dependencies.

## Deployment

This section is coming soon. We will provide guidelines on how to deploy your build on a live system.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
