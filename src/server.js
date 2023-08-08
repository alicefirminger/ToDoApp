"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var fs = require("node:fs/promises");
var app = express();
var PORT = 3001;
var jsonFilePath = '/ToDoApp/src/tasks.json';
// This represents the structure of a task and types of each element of the task
var Task = /** @class */ (function () {
    function Task(id, title) {
        this.id = id;
        this.title = title;
        this.done = false;
    }
    return Task;
}());
// This defines a class TaskList with a constructor that initializes an empty array to store tasks and a method addTask that allows you to add tasks to the array. When you create an instance of the TaskList class, you can use the addTask method to add tasks to the list managed by that instance.
var TaskList = /** @class */ (function () {
    function TaskList() {
        this.tasks = [];
    }
    TaskList.prototype.addTask = function (task) {
        this.tasks.push(task);
    };
    return TaskList;
}());
// Create an instance of the TaskList class to manage tasks
var taskList = new TaskList();
// Serve static files from the "public" directory so they can be displayed to the user
app.use(express.static("public"));
// Enable JSON request parsing
app.use(express.json());
// Define a route to serve the main HTML file
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});
//GET a list of the tasks
app.get("/tasks", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var getTasks, tasks;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fs.readFile('tasks.json')];
            case 1:
                getTasks = _a.sent();
                return [4 /*yield*/, JSON.parse(getTasks.toString())];
            case 2:
                tasks = _a.sent();
                // Respond with the list of tasks as JSON
                res.json(tasks);
                return [2 /*return*/];
        }
    });
}); });
//POST a new task to the list
app.post('/tasks', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newTask, task;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                newTask = req.body;
                task = new Task(newTask.id, newTask.title);
                // Add the new task to the task list
                taskList.addTask(task);
                // Respond with the added task as JSON
                res.json(task);
                // Write the updated task list to "tasks.json" file
                return [4 /*yield*/, fs.writeFile('tasks.json', JSON.stringify(taskList.tasks))];
            case 1:
                // Write the updated task list to "tasks.json" file
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
//PUT/PATCH to toggle a task completed or not
// This should use the taskID to update the task "done" section to true
// So I think patch would work because it only needs to update one part of the 'Task'
app.patch('/tasks/:taskId/togglecomplete', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var taskId;
    return __generator(this, function (_a) {
        taskId = req.params.taskId;
        return [2 /*return*/];
    });
}); });
// DELETE a task
// This should get the task by taskID and then delete only that task from the json file.
// app.delete('/tasks/:taskID' , (req, res) => {
//     const deleteTask = req.body;
// });
// Start the server and listen on the chosen port
app.listen(PORT, function () {
    console.log("Server is now listening on http://localhost:".concat(PORT));
});
