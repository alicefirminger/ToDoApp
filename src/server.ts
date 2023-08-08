import express from "express";
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

app.use(express.json());

app.get("/tasks", )


app.listen(PORT, function () {
	console.log(`Server is now listening on http://localhost:${PORT}`);
});