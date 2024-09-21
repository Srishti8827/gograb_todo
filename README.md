Go-Grab TODO App
This project is a TODO application developed as part of the Go-Grab Mobile Developer Assignment for the Mobile App Developer Internship. The app is designed to help users organize tasks efficiently by grouping them into categories, marking them as completed or pending, and storing all data locally using SQLite for offline support.

Features
Group Management: Users can create and manage different groups (categories) to organize tasks.
Task Management: Each group can have multiple tasks, and users can add, edit, or delete tasks.
Task Status: Tasks can be marked as completed or pending.
Data Persistence: All data is stored locally on the device using SQLite, ensuring data is available even offline.
User Interface: The app has a simple and intuitive interface, focusing on ease of navigation and visual appeal.
Project Structure
The project is organized into the following main sections:

Assets: Contains static assets like images, icons, and fonts (if used).
Components: Reusable UI components (buttons, input fields, etc.) that are used across multiple screens.
Database: All database-related logic, including SQLite setup and data operations (creating, fetching, updating, and deleting tasks and groups).
Screens: Contains all the individual screens of the app (Home screen, Task List, Task Detail, Task Creation).
Styles: Centralized styles for the app's user interface to ensure consistency.
App.js: The entry point of the app where navigation and initial setup are defined.
Setup Instructions
Prerequisites
Node.js: Make sure you have Node.js installed on your machine.
Expo CLI: You will need Expo CLI to run the app.
Steps to Run the Project
Clone the repository to your local machine:

bash
Copy code
git clone https://github.com/your-username/go-grab-todo.git
Navigate to the project directory:

bash
Copy code
cd go-grab-todo
Install dependencies: Run the following command to install the required dependencies:

bash
Copy code
npm install
Install additional libraries for React Navigation and SQLite:

bash
Copy code
npm install @react-navigation/native
npm install @react-navigation/stack
expo install expo-sqlite
expo install react-native-screens react-native-safe-area-context
Run the app: Start the app using Expo by running:

bash
Copy code
expo start
Test on a mobile device: Use the Expo Go app on your Android/iOS device to scan the QR code that appears in the Expo Developer Tools, and the app will run on your phone.

Design Decisions
SQLite for Data Storage: We chose SQLite for local storage as it offers a lightweight and reliable solution for persisting task and group data on the device. This allows the app to function even when offline, ensuring that no data is lost.

React Navigation for Screen Transitions: React Navigation was used to manage transitions between screens (Home, Task List, Task Detail, Task Creation). It provides a seamless and efficient way to handle navigation, improving user experience.

Separation of Concerns: The project structure separates concerns to maintain code modularity and clarity. UI components, database operations, and screen-specific logic are kept in separate files to ensure maintainability.

User-Centric Design: The app was designed with the user in mind. The navigation is kept simple and intuitive, while the design focuses on a clean, uncluttered interface for easy task management.

Challenges Overcome
Asynchronous Database Queries: Managing asynchronous operations with SQLite was a challenge, especially when ensuring that UI updates correctly reflect changes in the database. Callbacks were used effectively to handle these asynchronous queries and keep the UI in sync with the database.

State Management Across Screens: Handling state between different screens (such as creating tasks in one screen and displaying them in another) required careful planning. Using React’s state management (useState and useEffect hooks) ensured that changes in state were correctly propagated across screens.

Validation and Error Handling: Implementing form validation (e.g., preventing empty task or group names) and providing feedback to the user in case of errors (such as database failures) helped enhance the user experience and ensure data consistency.

Conclusion
The Go-Grab TODO App is a simple yet powerful tool for managing tasks efficiently. It uses SQLite for local storage to ensure persistence, even when offline, and provides a clean, user-friendly interface. Through thoughtful design and careful state management, the app ensures that users can keep track of their tasks easily.

