# Attention to Detail Auto Website

Welcome to the GitHub repository for the Attention to Detail Auto website! This project is a dynamic and responsive web application built to showcase and manage services for a premier car detailing business based in Southern New Jersey.

## Project Overview

This website includes both a frontend and a backend, developed using modern web technologies to provide a seamless user experience for both customers and administrators.

## TODO

### Test Acuity Scheduling Integration

- **Objective**: Ensure that the webhooks from Acuity Scheduling are correctly capturing data and updating it in the MongoDB database.
- **Details**: Verify that data such as email addresses and purchase amounts from bookings are accurately captured and stored.
- **Steps**:
  - Review webhook responses to ensure they contain the required data.
  - Create tests to simulate various booking scenarios to check data consistency.
  - Debug any issues found during testing to ensure reliable data handling.

### Maintain Code and Documentation Quality

- **Objective**: Keep the project's codebase and documentation clear and up-to-date.
- **Steps**:
  - Regularly review and refactor code for clarity and efficiency.
  - Update documentation to match the current project structure and functionalities.
  - Utilize peer reviews to improve coding practices and discover potential issues early.

### Adjust Global CSS File to Remove Redundant CSS Files and Classes

- **Objective**: Streamline CSS to improve maintainability and performance.
- **Steps**:
  - Review and list all current CSS files and classes.
  - Remove unused or redundant styles.
  - Update `index.css` and ensure functionality remains intact.
  - Test for visual consistency and document the changes.

## Frontend

The frontend of the Attention to Detail Auto website is built with React, ensuring a dynamic and responsive user experience. Key technologies include React-Bootstrap for styling and layout, Axios for API interactions, and Auth0 for secure user authentication.

### Key Features

- **Service Listings**: Displays detailed descriptions of car detailing services with visually appealing cards and comparison features.
- **Appointment Scheduling**: Integrated with Acuity Scheduling for real-time booking, confirmation, and reminders.
- **User Authentication**: Managed by Auth0, providing secure login/signup and access to protected routes.
- **Rewards Program**: Allows users to view and redeem rewards points, track progress, and earn discounts on services.

### Implementation Details

- **Component-Based Architecture**: Modular components for maintainability and scalability.
- **State Management**: Utilizes React hooks like `useState` and `useEffect` for managing state.
- **Responsive Design**: Ensures compatibility across various devices.
- **Error Handling**: Comprehensive error handling for API calls and user inputs.
- **Styling and Theming**: Consistent branding with a central stylesheet and component-specific styles.

### Future Enhancements

- **Enhanced User Dashboard**: More detailed service history, rewards insights, and personalized recommendations.
- **Localization and Accessibility**: Multi-language support and improved accessibility features.
- **Advanced Analytics**: Detailed tracking of user behavior for optimizing the user experience.

## Backend

The backend for the Attention to Detail Auto website is a robust and scalable system built using Node.js and Express.js. It serves as the backbone of the application, handling all the business logic, data management, and interactions with third-party services. Below is a detailed breakdown of the core functionalities, technologies, and implementation details of the backend system.

### Core Technologies

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine, allowing for server-side scripting.
- **Express.js**: A minimal and flexible Node.js web application framework that provides a robust set of features for building single and multi-page web applications.
- **MongoDB**: A NoSQL database that stores data in JSON-like documents. It offers high performance, high availability, and easy scalability.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and representations in MongoDB.

### Core Functionalities

#### 1. **User Management**

The backend handles user authentication and management using Auth0, a third-party authentication service. Key aspects include:

- **Authentication**: Secure login and registration processes using JWT (JSON Web Tokens) provided by Auth0.
- **User Data Handling**: Secure storage and management of user data such as email, name, and rewards points.
- **Middleware Integration**: Custom middleware to check JWTs and ensure secure access to protected routes.

#### 2. **Rewards System**

The rewards system is a key feature that incentivizes customer loyalty by awarding points for various actions. Core aspects include:

- **Points Tracking**: Each user has an associated rewards balance that is updated based on their spending.
- **Redeeming Points**: Users can redeem their accumulated points for discounts on services.
- **Tier Management**: The system includes tiered rewards, where users earn different discounts based on the number of points accumulated.

#### 3. **Appointment Integration**

Integration with Acuity Scheduling allows the backend to handle scheduling data seamlessly. Key functionalities include:

- **Webhook Processing**: The backend listens to webhooks from Acuity Scheduling to receive real-time updates about appointments.
- **Data Synchronization**: Appointment details such as email addresses, booking times, and services booked are synchronized with the backend.
- **Rewards Allocation**: Based on the appointments and the services booked, the backend calculates and updates rewards points for users.

### Implementation Details

- **Database Schema Design**: The backend uses Mongoose schemas to define the structure of the data stored in MongoDB. Schemas are defined for users, appointments, and rewards, ensuring data consistency and integrity.
- **API Design**: The backend exposes a RESTful API that the frontend interacts with. This includes endpoints for user management (e.g., login, registration), rewards management (e.g., checking and redeeming points), and appointment handling.
- **Security Measures**: The backend employs several security measures, including HTTPS, JWT-based authentication, and data validation/sanitization to protect against common security vulnerabilities such as SQL injection and XSS attacks.
- **Error Handling**: Robust error handling mechanisms are in place to ensure that any issues are logged and reported effectively, providing a smooth user experience and aiding in debugging.
- **Environment Configuration**: The backend utilizes environment variables (configured via a `.env` file) to manage sensitive information like API keys and database credentials securely.

### Future Enhancements

Future plans for the backend include adding more sophisticated analytics, enhancing the rewards program, and integrating additional payment gateways to provide more options for users. Additionally, we aim to continuously optimize performance and scalability as the user base grows.

## Getting Started

This project uses Vite for frontend development. To get started, clone the repo and install the dependencies.

```bash
git clone <repository-url>
cd attention-to-detail-auto
npm install
```

## Available Scripts

In the project directory, you can run the following scripts:

### `npm run dev`

Runs the app in development mode with Vite.  
Open [http://localhost:5173](http://localhost:5173) to view it in your browser. The page will reload if you make edits, and you will also see any lint errors in the console.

### `npm run dev-all`

Runs both the frontend and backend concurrently in development mode. This is useful for development when you need both the frontend and backend servers running.

### `npm test`

Launches the test runner in interactive watch mode. See the section about running tests for more information.

### `npm run build`

Builds the app for production. It optimizes the build for the best performance. The build is minified, and the filenames include the hashes. Your app is ready to be deployed!

### `npm run preview`

Serves the built app for preview purposes.

## Project Structure

### Backend

- `config/` - Configuration files for the application.
- `controllers/` - Controller files to handle incoming requests.
- `models/` - Mongoose schemas and models for database interaction.
- `routes/` - API routes for handling requests.
- `.env` - Environment variables for configuration settings.
- `.gitignore` - Specifies intentionally untracked files to ignore.
- `checkJwt.js` - Middleware for JWT authentication.
- `package-lock.json` - Automatically generated for any operations where npm modifies either the `node_modules` tree or `package.json`.
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
  - `api.js` - Contains API calls for frontend-backend communication.
- `.gitignore` - Specifies intentionally untracked files to ignore.
- `package-lock.json` - Automatically generated for any operations where npm modifies either the `node_modules` tree or `package.json`.
- `package.json` - Manifest file for the project, defines project dependencies.

## Deployment

This section is coming soon. We will provide guidelines on how to deploy your build on a live system.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.
