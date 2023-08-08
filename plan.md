Set up project:
    - Initialise node (npm init)
    - Install expressfor the API
    - Install TypeScript
    - Install ts-node to be able to run TypeScript files directly

Backend:
    - create a src folder for typescript files
    - inside folder create server.ts file for backend code
    - add the code snippet to the server.ts file to define the classes
    - import express modules
    - create express instance
        - const app = express();
        - const PORT = 3001;
    - create API endpoints
        - GET : get a list of the tasks
        - POST : add new task to list
        - PUT/PATCH : toggle task completed
        - DELETE : remove tasks from list
    - write functions to handle each endpoint


Frontend:
    - Create and HTMl file with 
        - task list
        - input field
        - check box to mark as complete
        - buttons for deleting task
    - Create a CSS file for styling HTML elements
    - Create frontend.ts 
        - use queryselectors to select HTML elements
        - add event listeners for buttons to link to API requests & update the UI with data


Testing:
    - Test UI manually by checking that tasks can be added, toggled and deleted 
    - write some unit tests (jest/chai?)