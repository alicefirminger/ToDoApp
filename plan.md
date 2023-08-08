Set up project: - Initialise node (npm init) ✅ - Install express for the API ✅ - Install TypeScript ✅ - Install ts-node to be able to run TypeScript files directly ✅

Backend: - create a src folder for typescript files ✅ - inside folder create server.ts file for backend code ✅ - add the code snippet to the server.ts file to define the classes ✅ - import express modules (had to run npm install @types/express --save-dev) ✅ - create express instance ✅ - const app = express();✅ - const PORT = 3001;✅ - create a data directory and tasks.json to store the task data ✅ - create API endpoints - GET : get a list of the tasks ✅ - POST : add new task to list ✅ - PUT/PATCH : toggle task completed - DELETE : remove tasks from list - write functions to handle each endpoint

Frontend: - Create and HTMl file with ✅ - task list ✅ - input field ✅ - check box to mark as complete ✅ - buttons for deleting task ✅ - Create a CSS file for styling HTML elements ✅ - Create frontend.ts - use queryselectors to select HTML elements ✅ - add event listeners for buttons to link to API requests & update the UI with data ✅

Testing: - Test UI manually by checking that tasks can be added ✅, toggled and deleted - Use Thunderclient to check that API requests are working properly ✅ - write some unit tests (jest/chai?) -

Challenges: - I had some problems with compiling typescript - this was mainly due to me being in the wrong directory so was an easy fix once I cd'd into the correct one.

    - I had to look up the syntax of using crud routes for the API and make sure I fully understood it.

    - I was having a lot of trouble figuring out how to link the front and backend and so spent a lot of time watching videos and asking questions about it to ai.

    - I am going through and commenting the code to make sure I understand it all.

    - Next steps
        - The HTML element of task-list is displaying on the page too early (fix)
        - API request for toggle
        - API request for delete
        - Unit tests
