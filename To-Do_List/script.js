document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <button onclick="completeTask(this)">Complete</button>
                <button onclick="deleteTask(this)">Delete</button>
            `;
            taskList.appendChild(taskItem);
            taskInput.value = "";
        } else {
            alert("Please enter a valid task.");
        }
    }

    function completeTask(button) {
        const taskItem = button.parentElement;
        taskItem.classList.toggle("completed");
    }

    function deleteTask(button) {
        const taskItem = button.parentElement;
        taskList.removeChild(taskItem);
    }

    window.addTask = addTask;
    window.completeTask = completeTask;
    window.deleteTask = deleteTask;
});
