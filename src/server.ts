import express = require("express");
import fs = require("node:fs/promises");
const app = express();
const PORT = 3001;

// This represents the structure of a task and types of each element of the task
class Task {
    id: number;
    title: string;
    done: boolean;

    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
        this.done = false;
    }
}

// This defines a class TaskList with a constructor that initializes an empty array to store tasks and a method addTask that allows you to add tasks to the array. When you create an instance of the TaskList class, you can use the addTask method to add tasks to the list managed by that instance.
class TaskList {
    tasks: Task[];

    constructor() {
        this.tasks = [];
    }

    addTask(task: Task) {
        this.tasks.push(task);
    }
}

// Create an instance of the TaskList class to manage tasks
const taskList = new TaskList();


// Serve static files from the "public" directory so they can be displayed to the user
app.use(express.static("public"));

// Enable JSON request parsing
app.use(express.json());

// Define a route to serve the main HTML file
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});


//GET a list of the tasks
app.get("/tasks", async (req, res) => {
    // Read tasks from the "tasks.json" file
    const getTasks = await fs.readFile('tasks.json');
    // Parse the tasks JSON content
    const tasks = await JSON.parse(getTasks.toString());
    // Respond with the list of tasks as JSON
    res.json(tasks);
});

//POST a new task to the list
app.post('/tasks', async (req, res) => {
    // Get new data from the request body
    const newTask = req.body;
    // Create a new Task instance
    const task = new Task(newTask.id, newTask.title);
    // Add the new task to the task list
    taskList.addTask(task);
    // Respond with the added task as JSON
    res.json(task);
    // Write the updated task list to "tasks.json" file
    await fs.writeFile('tasks.json', JSON.stringify(taskList.tasks));
});

//PUT to toggle a task completed or not
// app.put('/tasks/:taskId/togglecomplete' , (req, res) => {

// });

// DELETE a task
// app.delete('/tasks/:taskID' , (req, res) => {
//     const deleteTask = req.body;

// });

// Start the server and listen on the chosen port
app.listen(PORT, function () {
	console.log(`Server is now listening on http://localhost:${PORT}`);
});