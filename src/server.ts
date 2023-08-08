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