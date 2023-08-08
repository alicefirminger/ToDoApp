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
console.log("frontend is connected");
// Wait until the dom content is loaded before executing the function
document.addEventListener("DOMContentLoaded", function () {
    // Get the task list container element by its ID
    var taskListElement = document.getElementById("task-list");
    // Get the "Add" button element by its class
    var addButton = document.querySelector(".submit-button");
    // Add a click event listener to the "Add" button
    addButton.addEventListener("click", function () {
        return __awaiter(this, void 0, void 0, function () {
            var newTaskInput, newTaskTitle, response, newTask, taskElement;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newTaskInput = document.getElementById("add-task-form");
                        newTaskTitle = newTaskInput.value;
                        if (!newTaskTitle) return [3 /*break*/, 3];
                        return [4 /*yield*/, fetch("/tasks", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                // Send the new task title in JSON format
                                body: JSON.stringify({
                                    // Generate an ID using the current timestamp
                                    id: Date.now(),
                                    title: newTaskTitle,
                                }),
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        newTask = _a.sent();
                        taskElement = document.createElement("div");
                        taskElement.innerHTML = "\n        <p class=\"task-text-display\">".concat(newTask.title, "</p>\n          <input type=\"checkbox\" name=\"completed\" id=\"completed\" />\n          <button class=\"delete-button\" data-id=\"").concat(newTask.id, "\">Delete</button>\n          \n        ");
                        // Append the new task element to the task list container
                        taskListElement === null || taskListElement === void 0 ? void 0 : taskListElement.appendChild(taskElement);
                        // Clear the input field after adding the task
                        newTaskInput.value = "";
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    });
});
