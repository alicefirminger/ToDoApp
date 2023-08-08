console.log("frontend is connected");

// Wait until the dom content is loaded before executing the function
document.addEventListener("DOMContentLoaded", function () {
    // Get the task list container element by its ID
    const taskListElement = document.getElementById("task-list");
    // Get the "Add" button element by its class
    const addButton = document.querySelector(".submit-button") as HTMLButtonElement;

    // Add a click event listener to the "Add" button
    addButton.addEventListener("click", async function () {
      // Get the input element for adding new tasks by its ID
      const newTaskInput = document.getElementById("add-task-form") as HTMLInputElement;
      // Get the value of the input, which is the new task title
      const newTaskTitle = newTaskInput.value;
  
      // Check if the input is not empty
      if (newTaskTitle) {
        // Send a POST request to the server to add the new task
        const response = await fetch("/tasks", {
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
        });
        
        // Parse the JSON response from the server
        const newTask = await response.json();
  
         // Create the task list element
         const taskListElement = document.createElement("div");
         taskListElement.classList.add("task-list"); 
         taskListElement.innerHTML = `
                <input
                type="checkbox"
                name="completed"
                id="completed"
                class="checkbox"
                />
                <p class="task-text-display">${newTask.title}</p>
                <button class="delete-button">Delete</button>
         `;
         
         // Append the new task list element to the body
         document.body.appendChild(taskListElement);

        // Clear the input field after adding the task
        newTaskInput.value = "";
      }
    });
  });
  