import express from "express";
import fs from "node:fs/promises";
const app = express();
const PORT = 3001;

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

class TaskList {
    tasks: Task[];

    constructor() {
        this.tasks = [];
    }

    addTask(task: Task) {
        this.tasks.push(task);
    }
}

const taskList = new TaskList();

app.use(express.json());

//GET a list of the tasks
app.get("/tasks", async (req, res) => {
    const getTasks = await fs.readFile('tasks.json');
    const tasks = JSON.parse(getTasks.toString());
    res.json(tasks);
});

//POST a new task to the list
app.post('/tasks', async (req, res) => {
    const newTask = req.body;
    const task = new Task(newTask.id, newTask.title);
    taskList.addTask(task);
    res.json(task);
    await fs.writeFile('tasks.json', JSON.stringify(taskList.tasks));
});

//PUT to toggle a task completed or not
app.put('/tasks/:taskId/togglecomplete' , (req, res) => {

});

//DELETE a task
app.delete('/tasks/:taskID' , (req, res) => {

});

app.listen(PORT, function () {
	console.log(`Server is now listening on http://localhost:${PORT}`);
});